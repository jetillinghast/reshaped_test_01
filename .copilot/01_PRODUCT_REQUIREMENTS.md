Product Requirements Document: Magnificent Seven Stock Dashboard
1. Overview & Vision
This document outlines the requirements for a simple, clean, and responsive single-page web application to display near real-time stock data for the "Magnificent Seven" companies. The primary goal is to serve as a practical project to test and showcase the capabilities of the Reshaped UI library. The user interface should be modern, intuitive, and adhere strictly to the Reshaped design system principles.

The Magnificent Seven Companies:

Apple (AAPL)

Microsoft (MSFT)

Alphabet (GOOGL)

Amazon (AMZN)

Nvidia (NVDA)

Meta Platforms (META)

Tesla (TSLA)

2. Target Audience
Primary: Developers evaluating or learning the Reshaped UI library.

Secondary: Individuals looking for a quick, at-a-glance view of the Magnificent Seven's stock performance.

3. Core Features & Functionality
3.1. Stock Data Display
The UI must display a collection of "stock cards," one for each of the seven companies.

Each card must clearly show the following information:

Company Name (e.g., "Apple Inc.")

Ticker Symbol (e.g., "AAPL")

Current Stock Price

Price Change (in dollars and percentage) for the current day.

A simple, color-coded indicator for positive (green) or negative (red) change.

3.2. Data Refresh
The application will fetch updated stock data from a mock/placeholder API.

A "Refresh" button will be present on the UI to allow the user to manually trigger a data fetch.

A timestamp indicating the "Last Updated" time will be displayed prominently.

3.3. UI Interactivity
The dashboard will have a toggle to switch between Light Mode and Dark Mode. This functionality will be powered by the Reshaped theme provider.

The layout must be fully responsive and adapt gracefully to desktop, tablet, and mobile screen sizes.

4. User Stories
As a user, I want to see the current stock price for all Magnificent Seven companies on a single screen so that I can quickly assess their performance.

As a user, I want to easily identify whether a stock is up or down for the day through clear visual cues (colors).

As a user, I want to manually refresh the stock data to get the latest prices.

As a user, I want to toggle between light and dark themes to suit my viewing preference.

5. Non-Functional Requirements
Performance: The application should load quickly and feel responsive. Data fetching should not block the UI.

Technology Stack:

Framework: React (Vite)

UI Library: Reshaped

Icons: lucide-react

Browser Support: Latest versions of Chrome, Firefox, and Safari.