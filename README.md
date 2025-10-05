# 📈 Top 20 Tech Stocks Dashboard

A beautiful, responsive stock market dashboard built with **React**, **Vite**, and **Reshaped UI** showcasing real-time data for 20 top technology companies with intelligent rate limit handling.

![Tech Stack](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Reshaped](https://img.shields.io/badge/Reshaped-000000?style=for-the-badge&logo=react&logoColor=white)
![Alpha Vantage](https://img.shields.io/badge/Alpha%20Vantage-00B4D8?style=for-the-badge&logo=chartdotjs&logoColor=white)

## ✨ Features

- **📊 Real-Time Stock Data** - Live market data powered by Alpha Vantage API
- **🏛️ Magnificent Seven Priority** - Apple, Microsoft, Alphabet with real-time data
- **🚀 Additional 17 Companies** - Netflix, Oracle, Adobe, Intel, AMD, PayPal, Uber, and more
- **🎨 Beautiful UI** - Built with Reshaped design system components
- **📱 Responsive Design** - Perfect 3-column grid layout on desktop, adapts to mobile
- **🌙 Dark/Light Theme** - Toggle between themes with persistent state
- **⚡ Smart Rate Limiting** - Intelligent API usage with graceful degradation
- **🛡️ Error Handling** - User-friendly alerts when rate limits are reached
- **📈 Visual Indicators** - Color-coded price changes with actual market data
- **🎯 Professional Typography** - Proper hierarchy using Reshaped's design tokens
- **🔄 Smart Refresh** - Manual refresh functionality with optimized API calls
- **💾 Fallback System** - Realistic mock data when API limits exceeded
- **� Rate Limit Alerts** - Clear messaging about API usage and data sources

## 🏗️ Built With

- **[React 19](https://react.dev/)** - Modern React with latest features
- **[Vite](https://vitejs.dev/)** - Lightning fast build tool and dev server  
- **[Reshaped UI](https://reshaped.so/)** - Professional React component library
- **[Alpha Vantage API](https://www.alphavantage.co/)** - Real-time stock market data
- **[Lucide React](https://lucide.dev/)** - Beautiful icon library
- **Modern JavaScript** - ES2024+ features and modules

## 🔌 API Integration

### Alpha Vantage Setup
1. **Get API Key** - Sign up at [Alpha Vantage](https://www.alphavantage.co/support/#api-key)
2. **MCP Server** - Configure in `.vscode/mcp.json`:
   ```json
   {
     "servers": {
       "alphavantage": {
         "type": "http",
         "url": "https://mcp.alphavantage.co/mcp?apikey=YOUR_API_KEY"
       }
     }
   }
   ```
3. **Rate Limits** - Free tier includes 25 requests/day, 5 requests/minute
4. **Smart Usage** - App uses only 3 API calls for priority stocks (AAPL, MSFT, GOOGL)
5. **Graceful Degradation** - Realistic mock data when rate limits are exceeded

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/jetillinghast/reshaped_test_01.git
   cd reshaped_test_01
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Alpha Vantage** (Optional - for real data)
   ```bash
   # Add your Alpha Vantage API key to .vscode/mcp.json
   # See API Integration section below
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   ```
   http://localhost:5173
   ```

### Production Build
```bash
npm run build
npm run preview
```

## 📂 Project Structure

```
src/
├── components/
│   ├── Header.jsx           # Main header with title and theme toggle
│   ├── DashboardGrid.jsx    # Responsive grid layout container
│   ├── StockCard.jsx        # Individual stock card component
│   └── ThemeToggle.jsx      # Dark/light mode switcher
├── utils/
│   └── alphaVantageAPI.js   # Alpha Vantage API integration utilities
├── App.jsx                  # Main app component with state management
├── main.jsx                 # React app entry point with Reshaped provider
└── index.css                # Global styles and CSS reset

.vscode/
└── mcp.json                 # MCP server configuration for Alpha Vantage

.copilot/                    # Project documentation
├── 01_PRODUCT_REQUIREMENTS.md
├── 02_ARCHITECTURE.md  
├── 03_DATA_MODELS.md
├── 04_CODING_STANDARDS.md
├── 05_RESHAPED_CONTEXT.md
└── 06_TASK_CHECKLIST.md
```

## 💼 Featured Companies

### Priority Real-Time Stocks (3)
| Company | Ticker | Market Focus |
|---------|--------|--------------|
| Apple | AAPL | Consumer Electronics |
| Microsoft | MSFT | Cloud & Software |
| Alphabet | GOOGL | Search & AI |

### Additional Tech Leaders (Mock Data)
**Magnificent Seven:** Amazon, NVIDIA, Meta, Tesla  
**Streaming & Media:** Netflix, Spotify, Roku  
**Enterprise Software:** Oracle, Salesforce, Adobe, Snowflake  
**Semiconductors:** Intel, AMD  
**Fintech:** PayPal, Block (Square)  
**Cloud & Security:** CrowdStrike, Okta, Cloudflare  
**Mobility & More:** Uber and other tech leaders

## 🎨 Design System

This project showcases the power of **Reshaped UI** components:

- **Cards** - Elevated, rounded cards with consistent padding
- **Typography** - Display, title, and body text variants
- **Grid Layout** - Responsive View components with CSS Grid
- **Theming** - Built-in dark/light mode support
- **Colors** - Semantic color system (positive/critical indicators)
- **Spacing** - Consistent design tokens for margins and padding
- **Custom Alerts** - User-friendly rate limit notifications
- **Data Source Indicators** - Clear visual distinction between real-time and demo data

## 🛡️ Rate Limit Management

The application intelligently handles Alpha Vantage API rate limits:

- **Smart API Usage** - Only 3 real-time API calls per load (AAPL, MSFT, GOOGL)
- **Graceful Degradation** - Seamless fallback to realistic mock data
- **User-Friendly Alerts** - Clear notifications when rate limits are reached
- **Data Source Transparency** - Visual indicators showing real-time vs demo data
- **Dismissible Warnings** - Users can acknowledge and dismiss rate limit alerts
- **No Blank Pages** - Application always shows content, never fails completely

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production  
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

- **Functional Components** - Modern React with hooks
- **Component Composition** - Reshaped UI building blocks
- **Clean Architecture** - Separation of concerns
- **Responsive Design** - Mobile-first approach
- **Accessibility** - WCAG compliant components

## 📱 Screenshots

*Dashboard showing 20 tech stocks with intelligent rate limit handling - 3 real-time stocks with live Alpha Vantage data and 17 realistic demo stocks with graceful fallback messaging.*

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Reshaped Team** - For the amazing UI component library
- **Vite Team** - For the incredible build tool
- **React Team** - For the fantastic framework
- **Lucide** - For the beautiful icons

---

**Built with ❤️ to showcase the power of modern React and Reshaped UI**
