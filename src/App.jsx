import { useState, useEffect } from 'react';
import { View, Text } from 'reshaped';
import Header from './components/Header';
import DashboardGrid from './components/DashboardGrid';
import { fetchStockQuote } from './utils/alphaVantageAPI';

// Company data for stock cards (will be combined with real market data)
const STOCK_COMPANIES = {
  // Magnificent 7 (Priority for real-time data)
  'AAPL': 'Apple Inc.',
  'MSFT': 'Microsoft Corporation', 
  'GOOGL': 'Alphabet Inc.',
  'AMZN': 'Amazon.com Inc.',
  'NVDA': 'NVIDIA Corporation',
  'META': 'Meta Platforms Inc.',
  'TSLA': 'Tesla Inc.',
  
  // Additional Tech Stocks (will use mock data due to rate limits)
  'NFLX': 'Netflix Inc.',
  'ORCL': 'Oracle Corporation',
  'CRM': 'Salesforce Inc.',
  'ADBE': 'Adobe Inc.',
  'INTC': 'Intel Corporation',
  'AMD': 'Advanced Micro Devices',
  'PYPL': 'PayPal Holdings Inc.',
  'UBER': 'Uber Technologies Inc.',
  'CRWD': 'CrowdStrike Holdings Inc.',
  'SNOW': 'Snowflake Inc.',
  'OKTA': 'Okta Inc.',
  'NET': 'Cloudflare Inc.',
  'SQ': 'Block Inc.',
  'SPOT': 'Spotify Technology S.A.',
  'ROKU': 'Roku Inc.',
  'ZM': 'Zoom Video Communications',
  'DOCU': 'DocuSign Inc.',
  'SHOP': 'Shopify Inc.',
  'TWLO': 'Twilio Inc.',
  'DDOG': 'Datadog Inc.',
  'MDB': 'MongoDB Inc.',
  'WDAY': 'Workday Inc.',
  'VEEV': 'Veeva Systems Inc.'
};

// Priority stocks for real-time data (Magnificent 7)
const REAL_TIME_STOCKS = ['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'NVDA', 'META', 'TSLA'];

// Generate mock data for non-priority stocks to respect rate limits
const generateMockDataForSymbol = (symbol, companyName) => {
  const basePrices = {
    'NFLX': 485.23, 'ORCL': 125.67, 'CRM': 234.89, 'ADBE': 567.12,
    'INTC': 43.56, 'AMD': 145.78, 'PYPL': 67.89, 'UBER': 71.23,
    'CRWD': 312.45, 'SNOW': 178.90, 'OKTA': 89.34, 'NET': 76.54,
    'SQ': 87.65, 'SPOT': 234.12, 'ROKU': 54.32, 'ZM': 67.89,
    'DOCU': 45.67, 'SHOP': 123.45, 'TWLO': 78.90, 'DDOG': 156.78,
    'MDB': 389.12, 'WDAY': 245.67, 'VEEV': 198.43
  };
  
  const basePrice = basePrices[symbol] || 100;
  const price = basePrice + (Math.random() - 0.5) * 10;
  const changeAmount = (Math.random() - 0.5) * 8;
  const changePercent = (changeAmount / basePrice) * 100;
  
  return {
    id: symbol,
    symbol: symbol,
    ticker: symbol,
    companyName: companyName,
    price: parseFloat(price.toFixed(2)),
    change: {
      amount: parseFloat(changeAmount.toFixed(2)),
      percent: parseFloat(changePercent.toFixed(2))
    },
    volume: Math.floor(Math.random() * 50000000) + 1000000,
    lastUpdate: new Date().toISOString().split('T')[0],
    isRealTime: false
  };
};

function App() {
  const [stocks, setStocks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [error, setError] = useState(null);

  // Fetch real-time data for priority stocks, mock data for others
  const fetchStockData = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const allStocks = [];
      
      // Fetch real-time data for Magnificent 7
      console.log('🔄 Fetching real-time data for Magnificent 7...');
      for (const symbol of REAL_TIME_STOCKS) {
        try {
          const realData = await fetchStockQuote(symbol);
          if (realData) {
            allStocks.push({
              ...realData,
              id: symbol,
              ticker: symbol,
              companyName: STOCK_COMPANIES[symbol],
              isRealTime: true
            });
            console.log(`✅ Fetched real data for ${symbol}: $${realData.price}`);
          } else {
            // Fallback to mock data if API fails
            allStocks.push(generateMockDataForSymbol(symbol, STOCK_COMPANIES[symbol]));
            console.log(`⚠️ Using mock data for ${symbol} (API failed)`);
          }
          
          // Add delay to respect rate limits (5 requests/minute = 12s intervals)
          if (REAL_TIME_STOCKS.indexOf(symbol) < REAL_TIME_STOCKS.length - 1) {
            await new Promise(resolve => setTimeout(resolve, 1000)); // 1s for demo, 12s for production
          }
        } catch (error) {
          console.error(`❌ Error fetching ${symbol}:`, error);
          allStocks.push(generateMockDataForSymbol(symbol, STOCK_COMPANIES[symbol]));
        }
      }
      
      // Add mock data for remaining stocks to respect rate limits
      console.log('📊 Adding mock data for remaining stocks...');
      const remainingSymbols = Object.keys(STOCK_COMPANIES).filter(
        symbol => !REAL_TIME_STOCKS.includes(symbol)
      );
      
      for (const symbol of remainingSymbols) {
        allStocks.push(generateMockDataForSymbol(symbol, STOCK_COMPANIES[symbol]));
      }
      
      setStocks(allStocks);
      setLastUpdated(new Date());
      console.log(`✅ Successfully loaded ${allStocks.length} stocks (${REAL_TIME_STOCKS.length} real-time)`);
      
    } catch (error) {
      console.error('❌ Error in fetchStockData:', error);
      setError('Failed to load stock data. Please try again.');
      
      // Fallback to all mock data
      const fallbackStocks = Object.entries(STOCK_COMPANIES).map(([symbol, companyName]) =>
        generateMockDataForSymbol(symbol, companyName)
      );
      setStocks(fallbackStocks);
      setLastUpdated(new Date());
    } finally {
      setIsLoading(false);
    }
  };

  // Load initial data on component mount
  useEffect(() => {
    fetchStockData();
  }, []);

  // Refresh handler for manual data updates
  const handleRefresh = () => {
    fetchStockData();
  };

  return (
    <View minHeight="100vh" backgroundColor="neutral-faded">
      <Header lastUpdated={lastUpdated} />
      
      {isLoading && stocks.length === 0 ? (
        <View padding={12} align="center" justify="center" minHeight="50vh">
          <View gap={3} align="center">
            <Text variant="display-1" color="neutral-faded">
              📈
            </Text>
            <Text variant="title-2" color="neutral">
              Loading stock data...
            </Text>
            <Text variant="body-2" color="neutral-faded">
              Fetching the latest market information
            </Text>
          </View>
        </View>
      ) : (
        <DashboardGrid 
          stocks={stocks} 
          onRefresh={handleRefresh} 
          isLoading={isLoading} 
        />
      )}
    </View>
  );
}

export default App;
