# BilMoko - Restaurant Price Aggregator

**🚀 IToolbox Startup Product**  
**Project Type:** Web Application - Price Comparison Platform  
**Status:** Planning  
**Lead:** Nico M.  
**Organization:** IToolbox Company

---

## 🎯 Project Overview

BilMoko is a price aggregator web application that collects food price data from different restaurants via their APIs to compare prices and provide data-driven recommendations for food pricing strategy.

### Target Restaurants
- 🍗 Jollibee
- 🍔 McDonald's
- 🍗 Mang Inasal
- 🍕 Pizza Hut
- ☕ Starbucks
- 🍜 (Add more as needed)

### Key Features (Planned)
- 📊 Real-time price comparison dashboard
- 🔄 Automated data collection via restaurant APIs
- 📈 Price trend analysis
- 💡 Pricing recommendations
- 📱 Mobile-responsive web interface
- 🔐 Independent authentication system

---

## 🗂️ Project Structure (To Be Created)

```
itoolbox_lab/bilmoko/
├── web_portal/              # Price comparison dashboard
│   ├── streamlit_app/       # Main web interface
│   └── auth/                # BilMoko authentication system
│
├── scrapers/                # Restaurant API integrations
│   ├── jollibee_scraper.py
│   ├── mcdo_scraper.py
│   ├── mang_inasal_scraper.py
│   └── base_scraper.py
│
├── data/                    # Price data storage
│   ├── jollibee/
│   ├── mcdo/
│   ├── mang_inasal/
│   └── processed/
│
├── models/                  # Pricing ML models
├── config.yaml              # BilMoko configuration
└── README.md                # This file
```

---

## 🚀 Next Steps

1. Research restaurant API availability
2. Design database schema for price data
3. Create web scraping/API integration strategy
4. Build price comparison dashboard
5. Implement pricing recommendation algorithm
6. Set up authentication system

---

**Last Updated:** February 5, 2026  
**Status:** Not yet started
