Data Models & API Contract
This file defines the structure for the data used in the application.

Mock Stock Data Object
All stock data will conform to the following JavaScript object structure. This represents the contract for the mock API response for a single stock.

{
  id: 'AAPL',
  ticker: 'AAPL',
  companyName: 'Apple Inc.',
  price: 185.34,
  change: {
    amount: -1.25,
    percent: -0.67
  }
}

Field Definitions:
id (String): A unique identifier for the list item key. Can be the same as the ticker.

ticker (String): The official stock ticker symbol.

companyName (String): The full legal name of the company.

price (Number): The current trading price.

change (Object): An object containing the day's price change information.

amount (Number): The price change in dollars. Can be positive or negative.

percent (Number): The price change as a percentage. Can be positive or negative.