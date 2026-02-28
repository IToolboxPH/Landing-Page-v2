# IToolbox Store

> **E-commerce Platform for IoT Devices, Smart Devices, Mobile Devices, and Computer Peripherals**

[![Status](https://img.shields.io/badge/status-planning-blue)]()
[![Version](https://img.shields.io/badge/version-1.0.0-green)]()
[![Platform](https://img.shields.io/badge/platform-web-orange)]()

---

## 📋 Overview

**IToolbox Store** is a comprehensive e-commerce platform designed to sell cutting-edge technology products for both home and enterprise users. Our product catalog includes IoT devices, smart home solutions, mobile devices, computer peripherals, and enterprise-grade equipment.

### 🎯 Mission

To provide a trusted, user-friendly online marketplace where customers can discover, compare, and purchase the latest technology products with confidence, backed by excellent customer service and reliable delivery.

---

## 🛍️ Product Categories

### 🏠 Home IoT Devices
- Smart Home Hubs (Google Home, Amazon Alexa, Apple HomeKit compatible)
- Smart Lighting (Philips Hue, LIFX, smart bulbs)
- Smart Locks & Security Systems
- Security Cameras & Video Doorbells
- Smart Thermostats
- Environmental Sensors (temperature, humidity, air quality)

### 🏢 Enterprise IoT Devices
- Industrial Sensors & Controllers
- Asset Tracking Solutions
- Environmental Monitoring Systems
- Building Automation Equipment
- Fleet Management Devices
- Inventory Management IoT

### 📱 Smart Devices
- Smart Speakers & Displays
- Wearable Technology (smartwatches, fitness trackers)
- Smart Appliances
- Health Monitoring Devices
- Smart TVs & Streaming Devices

### 📲 Mobile Devices & Peripherals
- Smartphones (latest models)
- Tablets & E-readers
- Phone Cases & Protective Gear
- Chargers & Cables
- Power Banks & Portable Batteries
- Wireless Earphones & Headphones
- Screen Protectors & Privacy Filters
- Mobile Stands & Mounts

### 💻 Computer Devices & Peripherals
- Laptops (consumer & enterprise)
- Desktop Computers & Workstations
- Monitors & Display Solutions
- Keyboards & Mice (wired & wireless)
- Webcams & Conference Equipment
- Headsets & Audio Equipment
- External Storage (HDDs, SSDs, NAS)
- Docking Stations & USB Hubs
- Networking Equipment (routers, switches, access points)
- Printers & Scanners

---

## ✨ Key Features

### Customer Experience
- **Advanced Product Catalog** - Browse thousands of products with detailed specifications
- **Smart Search & Filters** - Find exactly what you need quickly
- **Product Comparison** - Compare specifications side-by-side
- **User Reviews & Ratings** - Make informed decisions based on real feedback
- **Personalized Recommendations** - AI-powered product suggestions
- **Wishlist & Save for Later** - Keep track of products you're interested in
- **Secure Shopping Cart** - Safe and encrypted checkout process
- **Multiple Payment Options** - Credit/debit cards, GCash, PayMaya, bank transfers
- **Order Tracking** - Real-time updates on your order status
- **Customer Accounts** - Manage orders, addresses, and preferences
- **Responsive Design** - Seamless experience on desktop, tablet, and mobile

### Business Features
- **Inventory Management** - Real-time stock tracking across warehouses
- **Order Management System** - Efficient order processing and fulfillment
- **Customer Relationship Management** - Track customer interactions and history
- **Analytics Dashboard** - Sales metrics, customer insights, and trends
- **Promotional Tools** - Discounts, coupons, flash sales, bundles
- **Vendor Management** - Multi-vendor marketplace capabilities
- **Shipping Integration** - Automated shipping label generation
- **Tax & Compliance** - Automated tax calculation and compliance

---

## 🏗️ Technology Stack

### Frontend
- **Framework**: React 18.x
- **UI Library**: Material-UI (MUI)
- **State Management**: Redux Toolkit
- **Routing**: React Router v6
- **Forms**: React Hook Form + Yup
- **API Client**: Axios
- **Styling**: CSS Modules + Styled Components

### Backend
- **Runtime**: Node.js 20.x
- **Framework**: Express.js
- **API Style**: RESTful
- **Authentication**: JWT + OAuth2
- **Validation**: Joi
- **File Upload**: Multer + Cloudinary

### Database
- **Primary Database**: MongoDB (Atlas)
- **Caching**: Redis
- **Search Engine**: Elasticsearch
- **Object Storage**: AWS S3 / Cloudinary

### Payment Processing
- **Payment Gateway**: Stripe
- **Local Payments**: GCash, PayMaya
- **Currency Support**: PHP, USD
- **Compliance**: PCI DSS

### DevOps & Hosting
- **Frontend Hosting**: Vercel
- **Backend Hosting**: Railway / AWS
- **Database Hosting**: MongoDB Atlas
- **CDN**: Cloudflare
- **CI/CD**: GitHub Actions
- **Monitoring**: Sentry, LogRocket

### Shipping Partners
- LBC Express
- J&T Express
- Ninja Van
- DHL
- FedEx

---

## 📁 Project Structure

```
itoolbox-store_app/
├── frontend/                 # React frontend application
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Page components
│   │   ├── features/        # Redux feature slices
│   │   ├── hooks/           # Custom React hooks
│   │   ├── services/        # API service layer
│   │   ├── utils/           # Utility functions
│   │   ├── styles/          # Global styles
│   │   ├── App.js           # Root component
│   │   └── index.js         # Entry point
│   └── package.json
│
├── backend/                  # Node.js/Express backend
│   ├── src/
│   │   ├── config/          # Configuration files
│   │   ├── controllers/     # Route controllers
│   │   ├── middleware/      # Express middleware
│   │   ├── models/          # Database models
│   │   ├── routes/          # API routes
│   │   ├── services/        # Business logic
│   │   ├── utils/           # Utility functions
│   │   ├── validators/      # Request validators
│   │   └── server.js        # Entry point
│   └── package.json
│
├── admin/                    # Admin dashboard
│   └── (React admin panel)
│
├── mobile/                   # React Native mobile app (future)
│
├── docs/                     # Documentation
│   ├── api/                 # API documentation
│   ├── guides/              # User and admin guides
│   └── architecture/        # System architecture docs
│
├── scripts/                  # Automation scripts
│   ├── seed/                # Database seeding
│   └── deploy/              # Deployment scripts
│
├── tests/                    # Test suites
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── config.yaml              # Project configuration
└── README.md                # This file
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 20.x or higher
- MongoDB 6.x or higher
- Redis 7.x or higher
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/IToolboxPH/itoolbox-store.git
cd itoolbox-store_app

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Start MongoDB and Redis
# (Follow installation guides for your OS)

# Run database migrations/seeds
npm run seed

# Start development servers
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm start
```

The frontend will be available at `http://localhost:3000` and the backend API at `http://localhost:5000`.

---

## 🔐 Security Features

- **SSL/TLS Encryption** - All data transmitted over HTTPS
- **PCI DSS Compliance** - Secure payment processing
- **Two-Factor Authentication** - Optional 2FA for accounts
- **Data Encryption** - Sensitive data encrypted at rest
- **Rate Limiting** - API protection against abuse
- **SQL Injection Prevention** - Parameterized queries
- **XSS Protection** - Input sanitization and CSP headers
- **CSRF Protection** - Token-based protection
- **Regular Security Audits** - Quarterly penetration testing

---

## 📊 Business Model

### Revenue Streams
1. **Direct Sales** - Markup on products sold
2. **Premium Memberships** - Exclusive discounts and early access
3. **Vendor Commissions** - Fees from third-party sellers
4. **Extended Warranties** - Protection plans for products
5. **Installation Services** - Professional setup and configuration

### Target Markets
- **B2C**: Home users, tech enthusiasts, early adopters
- **B2B**: Small businesses, enterprises, resellers
- **Geographic**: Philippines (primary), Southeast Asia (expansion)

---

## 🛣️ Roadmap

### Phase 1: MVP (Q2 2026)
- [ ] Basic e-commerce functionality
- [ ] Product catalog with search
- [ ] Shopping cart and checkout
- [ ] Payment integration (Stripe)
- [ ] Order management
- [ ] Customer accounts

### Phase 2: Enhanced Features (Q3 2026)
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Advanced filtering and sorting
- [ ] Promotional tools (coupons, discounts)
- [ ] Email notifications
- [ ] Inventory management

### Phase 3: Scale & Optimize (Q4 2026)
- [ ] Mobile app (React Native)
- [ ] AI-powered recommendations
- [ ] Multi-vendor marketplace
- [ ] Loyalty program
- [ ] Advanced analytics
- [ ] International shipping

### Phase 4: Enterprise Features (2027)
- [ ] B2B portal with bulk pricing
- [ ] API for partners/integrators
- [ ] White-label solutions
- [ ] Advanced reporting and BI
- [ ] Regional expansion

---

## 👥 Team & Roles

### Founding Team
- **Nicole John A. Mortel** - Founder, CEO & Technical Lead

### Planned Hires (2026)
- Full-stack Developer (E-commerce specialist)
- UI/UX Designer
- DevOps Engineer
- Product Manager
- Customer Support Representative
- Marketing Specialist
- Logistics Coordinator

---

## 📞 Contact & Support

- **Website**: [Coming Soon]
- **Email**: store@itoolbox.ph
- **Phone**: [Coming Soon]
- **Support Hours**: 9 AM - 6 PM PHT, Monday - Saturday

---

## 📄 License

Copyright © 2026 IToolbox. All rights reserved.

---

## 🙏 Acknowledgments

- Built with modern e-commerce best practices
- Inspired by leading platforms like Shopify, Amazon, and Lazada
- Designed for the Filipino and Southeast Asian market

---

**IToolbox Store** - Your trusted technology marketplace 🛍️✨
