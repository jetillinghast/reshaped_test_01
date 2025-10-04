import { useState, useEffect } from 'react';
import { View, Text } from 'reshaped';
import Header from './components/Header';
import DashboardGrid from './components/DashboardGrid';

// Mock data for the Top 30 Tech Stocks (including Magnificent 7)
const generateMockData = () => [
  // Magnificent 7
  {
    id: 'AAPL',
    ticker: 'AAPL',
    companyName: 'Apple Inc.',
    price: 185.34 + (Math.random() - 0.5) * 10,
    change: {
      amount: -1.25 + (Math.random() - 0.5) * 5,
      percent: -0.67 + (Math.random() - 0.5) * 3
    }
  },
  {
    id: 'MSFT',
    ticker: 'MSFT',
    companyName: 'Microsoft Corporation',
    price: 420.15 + (Math.random() - 0.5) * 15,
    change: {
      amount: 2.45 + (Math.random() - 0.5) * 4,
      percent: 0.58 + (Math.random() - 0.5) * 2
    }
  },
  {
    id: 'GOOGL',
    ticker: 'GOOGL',
    companyName: 'Alphabet Inc.',
    price: 138.92 + (Math.random() - 0.5) * 8,
    change: {
      amount: -0.87 + (Math.random() - 0.5) * 3,
      percent: -0.62 + (Math.random() - 0.5) * 2
    }
  },
  {
    id: 'AMZN',
    ticker: 'AMZN',
    companyName: 'Amazon.com Inc.',
    price: 145.78 + (Math.random() - 0.5) * 12,
    change: {
      amount: 1.89 + (Math.random() - 0.5) * 6,
      percent: 1.31 + (Math.random() - 0.5) * 3
    }
  },
  {
    id: 'NVDA',
    ticker: 'NVDA',
    companyName: 'NVIDIA Corporation',
    price: 875.42 + (Math.random() - 0.5) * 25,
    change: {
      amount: 12.56 + (Math.random() - 0.5) * 20,
      percent: 1.45 + (Math.random() - 0.5) * 4
    }
  },
  {
    id: 'META',
    ticker: 'META',
    companyName: 'Meta Platforms Inc.',
    price: 502.18 + (Math.random() - 0.5) * 18,
    change: {
      amount: -3.22 + (Math.random() - 0.5) * 8,
      percent: -0.64 + (Math.random() - 0.5) * 2.5
    }
  },
  {
    id: 'TSLA',
    ticker: 'TSLA',
    companyName: 'Tesla Inc.',
    price: 248.91 + (Math.random() - 0.5) * 20,
    change: {
      amount: 5.67 + (Math.random() - 0.5) * 15,
      percent: 2.33 + (Math.random() - 0.5) * 5
    }
  },
  // Additional Top Tech Stocks
  {
    id: 'NFLX',
    ticker: 'NFLX',
    companyName: 'Netflix Inc.',
    price: 445.32 + (Math.random() - 0.5) * 15,
    change: {
      amount: 3.21 + (Math.random() - 0.5) * 8,
      percent: 0.72 + (Math.random() - 0.5) * 3
    }
  },
  {
    id: 'ORCL',
    ticker: 'ORCL',
    companyName: 'Oracle Corporation',
    price: 112.45 + (Math.random() - 0.5) * 8,
    change: {
      amount: -1.23 + (Math.random() - 0.5) * 4,
      percent: -1.09 + (Math.random() - 0.5) * 2
    }
  },
  {
    id: 'CRM',
    ticker: 'CRM',
    companyName: 'Salesforce Inc.',
    price: 267.89 + (Math.random() - 0.5) * 12,
    change: {
      amount: 4.56 + (Math.random() - 0.5) * 6,
      percent: 1.73 + (Math.random() - 0.5) * 3
    }
  },
  {
    id: 'ADBE',
    ticker: 'ADBE',
    companyName: 'Adobe Inc.',
    price: 523.67 + (Math.random() - 0.5) * 18,
    change: {
      amount: -2.34 + (Math.random() - 0.5) * 7,
      percent: -0.45 + (Math.random() - 0.5) * 2
    }
  },
  {
    id: 'INTC',
    ticker: 'INTC',
    companyName: 'Intel Corporation',
    price: 34.56 + (Math.random() - 0.5) * 4,
    change: {
      amount: 0.78 + (Math.random() - 0.5) * 2,
      percent: 2.31 + (Math.random() - 0.5) * 4
    }
  },
  {
    id: 'AMD',
    ticker: 'AMD',
    companyName: 'Advanced Micro Devices',
    price: 156.78 + (Math.random() - 0.5) * 12,
    change: {
      amount: 3.45 + (Math.random() - 0.5) * 8,
      percent: 2.25 + (Math.random() - 0.5) * 4
    }
  },
  {
    id: 'PYPL',
    ticker: 'PYPL',
    companyName: 'PayPal Holdings Inc.',
    price: 78.23 + (Math.random() - 0.5) * 6,
    change: {
      amount: -1.12 + (Math.random() - 0.5) * 3,
      percent: -1.41 + (Math.random() - 0.5) * 2
    }
  },
  {
    id: 'UBER',
    ticker: 'UBER',
    companyName: 'Uber Technologies Inc.',
    price: 67.89 + (Math.random() - 0.5) * 5,
    change: {
      amount: 2.34 + (Math.random() - 0.5) * 4,
      percent: 3.57 + (Math.random() - 0.5) * 3
    }
  },
  {
    id: 'SHOP',
    ticker: 'SHOP',
    companyName: 'Shopify Inc.',
    price: 89.45 + (Math.random() - 0.5) * 7,
    change: {
      amount: 1.67 + (Math.random() - 0.5) * 5,
      percent: 1.90 + (Math.random() - 0.5) * 4
    }
  },
  {
    id: 'SPOT',
    ticker: 'SPOT',
    companyName: 'Spotify Technology SA',
    price: 234.56 + (Math.random() - 0.5) * 10,
    change: {
      amount: -3.21 + (Math.random() - 0.5) * 6,
      percent: -1.35 + (Math.random() - 0.5) * 3
    }
  },
  {
    id: 'ZOOM',
    ticker: 'ZM',
    companyName: 'Zoom Video Communications',
    price: 78.90 + (Math.random() - 0.5) * 6,
    change: {
      amount: 0.89 + (Math.random() - 0.5) * 3,
      percent: 1.14 + (Math.random() - 0.5) * 2
    }
  },
  {
    id: 'SNAP',
    ticker: 'SNAP',
    companyName: 'Snap Inc.',
    price: 12.34 + (Math.random() - 0.5) * 2,
    change: {
      amount: -0.23 + (Math.random() - 0.5) * 1,
      percent: -1.83 + (Math.random() - 0.5) * 3
    }
  },
  {
    id: 'TWTR',
    ticker: 'X',
    companyName: 'X Corp (formerly Twitter)',
    price: 45.67 + (Math.random() - 0.5) * 4,
    change: {
      amount: 1.23 + (Math.random() - 0.5) * 3,
      percent: 2.77 + (Math.random() - 0.5) * 4
    }
  },
  {
    id: 'SQ',
    ticker: 'SQ',
    companyName: 'Block Inc.',
    price: 89.12 + (Math.random() - 0.5) * 7,
    change: {
      amount: 2.45 + (Math.random() - 0.5) * 5,
      percent: 2.83 + (Math.random() - 0.5) * 3
    }
  },
  {
    id: 'TWLO',
    ticker: 'TWLO',
    companyName: 'Twilio Inc.',
    price: 67.34 + (Math.random() - 0.5) * 5,
    change: {
      amount: -1.45 + (Math.random() - 0.5) * 4,
      percent: -2.11 + (Math.random() - 0.5) * 3
    }
  },
  {
    id: 'ROKU',
    ticker: 'ROKU',
    companyName: 'Roku Inc.',
    price: 78.45 + (Math.random() - 0.5) * 6,
    change: {
      amount: 3.12 + (Math.random() - 0.5) * 5,
      percent: 4.14 + (Math.random() - 0.5) * 4
    }
  },
  {
    id: 'DOCU',
    ticker: 'DOCU',
    companyName: 'DocuSign Inc.',
    price: 56.78 + (Math.random() - 0.5) * 4,
    change: {
      amount: 0.89 + (Math.random() - 0.5) * 3,
      percent: 1.59 + (Math.random() - 0.5) * 2
    }
  },
  {
    id: 'PLTR',
    ticker: 'PLTR',
    companyName: 'Palantir Technologies',
    price: 23.45 + (Math.random() - 0.5) * 3,
    change: {
      amount: 1.67 + (Math.random() - 0.5) * 2,
      percent: 7.67 + (Math.random() - 0.5) * 5
    }
  },
  {
    id: 'SNOW',
    ticker: 'SNOW',
    companyName: 'Snowflake Inc.',
    price: 178.90 + (Math.random() - 0.5) * 12,
    change: {
      amount: -2.34 + (Math.random() - 0.5) * 6,
      percent: -1.29 + (Math.random() - 0.5) * 3
    }
  },
  {
    id: 'CRWD',
    ticker: 'CRWD',
    companyName: 'CrowdStrike Holdings',
    price: 245.67 + (Math.random() - 0.5) * 15,
    change: {
      amount: 4.23 + (Math.random() - 0.5) * 8,
      percent: 1.75 + (Math.random() - 0.5) * 4
    }
  },
  {
    id: 'OKTA',
    ticker: 'OKTA',
    companyName: 'Okta Inc.',
    price: 98.34 + (Math.random() - 0.5) * 7,
    change: {
      amount: 2.11 + (Math.random() - 0.5) * 4,
      percent: 2.19 + (Math.random() - 0.5) * 3
    }
  },
  {
    id: 'NET',
    ticker: 'NET',
    companyName: 'Cloudflare Inc.',
    price: 87.56 + (Math.random() - 0.5) * 6,
    change: {
      amount: 1.89 + (Math.random() - 0.5) * 5,
      percent: 2.20 + (Math.random() - 0.5) * 4
    }
  }
];

function App() {
  const [stocks, setStocks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(null);

  // Simulated data fetching function
  const fetchStockData = async () => {
    setIsLoading(true);
    
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Generate fresh mock data with random price variations
    const mockData = generateMockData();
    setStocks(mockData);
    setLastUpdated(new Date().toLocaleTimeString());
    setIsLoading(false);
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
