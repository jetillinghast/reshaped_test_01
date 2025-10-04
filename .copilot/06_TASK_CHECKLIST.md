Task Checklist: Magnificent Seven Stock Dashboard
This document outlines the development tasks required to build the application. Tasks should be checked off as they are completed.

Phase 1: Project Setup & Foundation
[x] Initialize a new React project using Vite.

[x] Install reshaped and lucide-react dependencies.

[x] Configure postcss.config.js for the Reshaped library.

[x] Set up the main <Reshaped> provider in src/main.jsx.

[x] Create the reshaped.config.js file and generate the initial default theme.

[x] Clean up the default Vite boilerplate from src/App.jsx.

[x] Create a src/components directory for our UI components.

Phase 2: Core UI Components
[x] Create the Header.jsx component to display the application title.

[x] Create the StockCard.jsx component to display data for a single stock, based on docs/03_DATA_MODELS.md.

[x] Create the DashboardGrid.jsx component, which will be responsible for laying out all the StockCard components in a responsive grid.

Phase 3: Data & State Management
[x] Implement a mock data array for the Magnificent Seven stocks directly within App.jsx, following the structure in docs/03_DATA_MODELS.md.

[x] Set up useState hooks in App.jsx to manage the stock data, as well as loading and error states.

[x] Create a simulated data fetching function inside a useEffect hook in App.jsx that loads the mock data after a short delay.

Phase 4: Application Assembly
[x] Import and assemble the Header and DashboardGrid components within App.jsx.

[x] Pass the stock data from the state in App.jsx as a prop to the DashboardGrid component.

[x] Implement the logic in DashboardGrid.jsx to map over the data array and render a StockCard for each stock.

[x] Handle the display of a loading indicator while the simulated data fetch is in progress.

Phase 5: Finalization & Polish
[x] Review the entire UI for consistent spacing and layout, ensuring all layout is handled by the Reshaped <View> component.

[x] Verify that all text is rendered using the <Text> component and follows the theme's typography.

[x] Perform a final check to ensure the completed application meets all requirements outlined in docs/01_PRODUCT_REQUIREMENTS.md.