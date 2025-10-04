Data Models & API Contract
This file defines the structure for the data used in the application.

Stock Data Object (Alpha Vantage Integration)
All stock data will conform to the following JavaScript object structure. This represents the contract for both mock data and real Alpha Vantage API responses.

{
  id: 'AAPL',
  ticker: 'AAPL', 
  symbol: 'AAPL',           // Added for Alpha Vantage compatibility
  companyName: 'Apple Inc.',
  price: 185.34,
  change: {
    amount: -1.25,
    percent: -0.67
  },
  volume: 87234567,         // Added for Alpha Vantage data
  lastUpdate: '2025-10-03'  // Added for Alpha Vantage data
}

Field Definitions:
id (String): A unique identifier for the list item key. Can be the same as the ticker.

ticker (String): The official stock ticker symbol (legacy field).

symbol (String): The official stock ticker symbol (Alpha Vantage standard).

companyName (String): The full legal name of the company.

price (Number): The current trading price from Alpha Vantage Global Quote.

change (Object): An object containing the day's price change information.

amount (Number): The price change in dollars. Can be positive or negative.

percent (Number): The price change as a percentage. Can be positive or negative.

volume (Number): The trading volume for the current/last trading day.

lastUpdate (String): The date of the last trading day (YYYY-MM-DD format).

Alpha Vantage API Integration
The application integrates with Alpha Vantage's Global Quote API endpoint:
- Base URL: https://www.alphavantage.co/query
- Function: GLOBAL_QUOTE
- Rate Limits: 25 requests/day (free tier), 5 requests/minute
- Response format: JSON with Global Quote object
- API Key: Required via MCP server configuration

Alpha Vantage Response Transform:
The fetchStockQuote utility function transforms Alpha Vantage responses:
- '01. symbol' → symbol
- '05. price' → price (parsed as float)
- '09. change' → change.amount (parsed as float)
- '10. change percent' → change.percent (parsed as float, % removed)
- '06. volume' → volume (parsed as integer)
- '07. latest trading day' → lastUpdate