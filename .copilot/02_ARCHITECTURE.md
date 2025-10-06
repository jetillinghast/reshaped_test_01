Architecture & Component Structure
This document outlines the frontend architecture for the Magnificent Seven Stock Dashboard.

1. Component Breakdown
The application will be composed of the following React components, built using the Reshaped UI library.

App.jsx (Root Component)

Manages the overall application state, including the stock data and the current theme (light/dark).

Handles the data fetching logic.

Renders the main layout, including the header and the Dashboard component.

Header.jsx

A presentational component.

Displays the application title (e.g., "Magnificent Seven Stocks").

Contains the ThemeToggle component and the "Last Updated" timestamp.

ThemeToggle.jsx

A client-side component responsible for switching between 'light' and 'dark' modes.

It will use the useTheme hook from Reshaped to manage the theme state.

Dashboard.jsx

Receives the array of stock data as a prop from App.jsx.

Maps over the data to render a StockCard for each company.

Contains the "Refresh" button, which calls a handler function passed down from App.jsx.

Manages the responsive grid layout for the cards.

StockCard.jsx

A presentational component that receives a single stock object as a prop.

Uses Reshaped components like Card, View, and Text to display the stock information.

Implements the logic to display price changes in either red or green.

2. Data Flow
App.jsx on initial load (or on refresh click) fetches data from the mock API.

The fetched data is stored in the App.jsx component's state.

The stock data array and a refresh handler function are passed down as props to Dashboard.jsx.

Dashboard.jsx passes a single stock object from the array to each StockCard.jsx it renders.

The theme state is managed at the root in App.jsx and passed to the <Reshaped> provider. The ThemeToggle.jsx component interacts with this provider via the useTheme hook.