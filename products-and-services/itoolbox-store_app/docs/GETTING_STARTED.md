# Getting Started with IToolbox Store

This guide will help you set up and start developing the IToolbox Store e-commerce platform.

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

### Required Software
- **Node.js** 20.x or higher ([Download](https://nodejs.org/))
- **npm** 9.x or higher (comes with Node.js) or **yarn** 1.22.x
- **MongoDB** 6.x or higher ([Download](https://www.mongodb.com/try/download/community))
- **Redis** 7.x or higher ([Download](https://redis.io/download))
- **Git** ([Download](https://git-scm.com/downloads))

### Recommended Tools
- **Visual Studio Code** with extensions:
  - ESLint
  - Prettier
  - ES7+ React/Redux/React-Native snippets
  - MongoDB for VS Code
- **Postman** or **Insomnia** for API testing
- **MongoDB Compass** for database management

### Accounts Needed
- **MongoDB Atlas** (for cloud database) - [Sign up](https://www.mongodb.com/cloud/atlas/register)
- **Stripe** account (for payment processing) - [Sign up](https://dashboard.stripe.com/register)
- **Cloudinary** (for image hosting) - [Sign up](https://cloudinary.com/users/register/free)

---

## 🚀 Installation Steps

### 1. Clone the Repository

```bash
# Navigate to your projects directory
cd ~/Desktop/Nico\ M.\ Lab/itoolbox_lab

# The repository is already in place
cd itoolbox-store_app
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

Edit the `.env` file with your configuration:

```env
# Server Configuration
NODE_ENV=development
PORT=5000
API_URL=http://localhost:5000

# Database
MONGODB_URI=mongodb://localhost:27017/itoolbox_store
# Or use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/itoolbox_store

# Redis
REDIS_URL=redis://localhost:6379

# JWT Authentication
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRE=7d
JWT_REFRESH_SECRET=your_refresh_token_secret
JWT_REFRESH_EXPIRE=30d

# Stripe Payment
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# Email Configuration (SendGrid)
SENDGRID_API_KEY=your_sendgrid_api_key
SENDGRID_FROM_EMAIL=noreply@itoolbox.ph
SENDGRID_FROM_NAME=IToolbox Store

# Cloudinary (Image Storage)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# SMS (Twilio or local provider)
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
TWILIO_PHONE_NUMBER=your_twilio_number

# CORS
CORS_ORIGIN=http://localhost:3000

# Security
ENCRYPTION_KEY=your_32_character_encryption_key_here

# Shipping APIs (Add as needed)
LBC_API_KEY=your_lbc_api_key
JNT_API_KEY=your_jnt_api_key

# Analytics
GOOGLE_ANALYTICS_ID=UA-XXXXXXXXX-X

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100
```

Start the backend server:

```bash
# Development mode with hot reload
npm run dev

# Production mode
npm start
```

The backend API will be running at `http://localhost:5000`

### 3. Frontend Setup

```bash
# Navigate to frontend directory (from root)
cd ../frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

Edit the frontend `.env` file:

```env
# API Configuration
REACT_APP_API_URL=http://localhost:5000/api/v1
REACT_APP_API_TIMEOUT=30000

# Stripe
REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key

# Google Analytics
REACT_APP_GA_TRACKING_ID=UA-XXXXXXXXX-X

# Environment
REACT_APP_ENV=development

# Image CDN
REACT_APP_CDN_URL=https://res.cloudinary.com/your_cloud_name

# Features Flags
REACT_APP_ENABLE_REVIEWS=true
REACT_APP_ENABLE_WISHLIST=true
REACT_APP_ENABLE_CHAT=false
```

Start the frontend development server:

```bash
npm start
```

The frontend will be running at `http://localhost:3000`

### 4. Database Setup

#### Option A: Local MongoDB

```bash
# Start MongoDB service
# macOS
brew services start mongodb-community

# Or run MongoDB manually
mongod --dbpath /path/to/your/data/directory

# In another terminal, seed the database
cd backend
npm run seed
```

#### Option B: MongoDB Atlas (Cloud)

1. Create a cluster on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a database user
3. Whitelist your IP address (or allow from anywhere for development: 0.0.0.0/0)
4. Get your connection string and add it to `.env`
5. Run seed script:

```bash
cd backend
npm run seed
```

### 5. Redis Setup

```bash
# macOS
brew services start redis

# Or run Redis manually
redis-server

# Test Redis connection
redis-cli ping
# Should return: PONG
```

### 6. Verify Installation

After starting all services, verify everything works:

```bash
# Test backend API
curl http://localhost:5000/api/v1/health

# Should return: {"status":"ok","timestamp":"..."}

# Open frontend
# Navigate to http://localhost:3000 in your browser
```

---

## 🧪 Running Tests

```bash
# Backend tests
cd backend
npm test                    # Run all tests
npm run test:unit          # Unit tests only
npm run test:integration   # Integration tests only
npm run test:coverage      # With coverage report

# Frontend tests
cd frontend
npm test                   # Interactive mode
npm run test:coverage      # With coverage
```

---

## 📝 Development Workflow

### 1. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
```

### 2. Make Your Changes

Follow the project coding standards:
- Use ESLint and Prettier
- Write meaningful commit messages
- Add tests for new features
- Update documentation

### 3. Commit Your Changes

```bash
git add .
git commit -m "feat: add product search functionality"
```

Commit message format:
- `feat:` new feature
- `fix:` bug fix
- `docs:` documentation changes
- `style:` formatting, missing semicolons, etc.
- `refactor:` code refactoring
- `test:` adding tests
- `chore:` maintenance tasks

### 4. Push and Create Pull Request

```bash
git push origin feature/your-feature-name
```

Create a pull request on GitHub for review.

---

## 🛠️ Common Development Tasks

### Add a New Product Category

```bash
# Backend
cd backend
npm run category:add

# Follow the prompts
```

### Generate Sample Products

```bash
cd backend
npm run seed:products -- --count=100
```

### Clear Database

```bash
cd backend
npm run db:clear
# Careful! This deletes all data
```

### Build for Production

```bash
# Frontend
cd frontend
npm run build
# Output in frontend/build/

# Backend
cd backend
npm run build
# Output in backend/dist/
```

---

## 🔧 Troubleshooting

### MongoDB Connection Issues

```bash
# Check if MongoDB is running
# macOS
brew services list

# Check connection
mongosh
# or older versions
mongo
```

### Port Already in Use

```bash
# Find process using port 5000
lsof -ti:5000

# Kill the process
kill -9 <PID>

# Or change port in .env file
PORT=5001
```

### Redis Connection Issues

```bash
# Check if Redis is running
redis-cli ping

# Start Redis if not running
brew services start redis
```

### Clear npm Cache

```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

---

## 📚 Additional Resources

### Documentation
- [API Documentation](./docs/api/README.md)
- [Database Schema](./docs/architecture/database-schema.md)
- [Frontend Components](./docs/guides/frontend-components.md)
- [Deployment Guide](./docs/guides/deployment.md)

### External Resources
- [React Documentation](https://react.dev/)
- [Express.js Guide](https://expressjs.com/)
- [MongoDB Manual](https://docs.mongodb.com/manual/)
- [Stripe API Reference](https://stripe.com/docs/api)

---

## 🤝 Getting Help

- **Documentation**: Check the `/docs` directory
- **Issues**: Open an issue on GitHub
- **Team**: Contact the development team
- **Email**: dev@itoolbox.ph

---

## 🎯 Next Steps

1. ✅ Complete installation
2. 📖 Read the [Architecture Documentation](./docs/architecture/README.md)
3. 🎨 Review the [Design System](./docs/guides/design-system.md)
4. 💻 Start coding!
5. 🧪 Write tests
6. 📝 Update documentation

---

**Happy Coding! 🚀**
