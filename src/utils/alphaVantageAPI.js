// Alpha Vantage API Integration Helper
// Real stock data fetcher to replace mock data

const ALPHA_VANTAGE_API_KEY = '3KMZ42WCG28DH1PU';
const BASE_URL = 'https://www.alphavantage.co/query';

/**
 * Fetch real stock data from Alpha Vantage API
 * @param {string} symbol - Stock symbol (e.g., 'PLTR', 'AAPL')
 * @returns {Promise<Object>} Stock data object
 */
export const fetchStockQuote = async (symbol) => {
  try {
    const response = await fetch(
      `${BASE_URL}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${ALPHA_VANTAGE_API_KEY}`
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    
    // Check for rate limit response
    if (data.Note && data.Note.includes('rate limit')) {
      throw new Error('Alpha Vantage rate limit reached: ' + data.Note);
    }
    
    if (data.Information && data.Information.includes('rate limit')) {
      throw new Error('Alpha Vantage rate limit reached: ' + data.Information);
    }
    
    const quote = data['Global Quote'];
    
    if (!quote) {
      throw new Error(`No data found for symbol: ${symbol}`);
    }
    
    // Transform Alpha Vantage format to match your app's data structure
    return {
      symbol: quote['01. symbol'],
      price: parseFloat(quote['05. price']),
      change: {
        amount: parseFloat(quote['09. change']),
        percent: parseFloat(quote['10. change percent'].replace('%', ''))
      },
      volume: parseInt(quote['06. volume']),
      lastUpdate: quote['07. latest trading day']
    };
  } catch (error) {
    console.error(`Error fetching stock data for ${symbol}:`, error);
    
    // Re-throw rate limit errors so they can be caught upstream
    if (error.message && error.message.includes('rate limit')) {
      throw error;
    }
    
    return null;
  }
};

/**
 * Fetch multiple stock quotes with rate limiting
 * @param {Array<string>} symbols - Array of stock symbols
 * @returns {Promise<Array<Object>>} Array of stock data objects
 */
export const fetchMultipleQuotes = async (symbols) => {
  const results = [];
  
  // Alpha Vantage free tier: 5 requests per minute
  // Add delay between requests to respect rate limits
  for (let i = 0; i < symbols.length; i++) {
    const symbol = symbols[i];
    console.log(`Fetching data for ${symbol}... (${i + 1}/${symbols.length})`);
    
    const stockData = await fetchStockQuote(symbol);
    if (stockData) {
      results.push(stockData);
    }
    
    // Wait 12 seconds between requests (5 requests/minute = 12s interval)
    if (i < symbols.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 12000));
    }
  }
  
  return results;
};

// Test the PLTR data we just fetched
console.log('🧪 Testing PLTR data fetch...');
fetchStockQuote('PLTR').then(data => {
  console.log('✅ PLTR Stock Data:', data);
}).catch(error => {
  console.error('❌ Error:', error);
});
