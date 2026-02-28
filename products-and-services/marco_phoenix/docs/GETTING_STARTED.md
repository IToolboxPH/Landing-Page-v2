# Getting Started with Marco Phoenix

This guide will help you set up and start developing the Marco Phoenix conversational AI platform.

---

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

### Required Software
- **Node.js** 20.x or higher ([Download](https://nodejs.org/))
- **Python** 3.11.x or higher ([Download](https://www.python.org/downloads/))
- **npm** 9.x or higher or **yarn** 1.22.x
- **PostgreSQL** 15.x or higher ([Download](https://www.postgresql.org/download/))
- **Redis** 7.x or higher ([Download](https://redis.io/download))
- **Git** ([Download](https://git-scm.com/downloads))

### Optional but Recommended
- **Docker** & **Docker Compose** ([Download](https://www.docker.com/))
- **Poetry** (Python package manager) - `pip install poetry`
- **React Native CLI** (for mobile development)
- **Xcode** (for iOS development on macOS)
- **Android Studio** (for Android development)

### Recommended Tools
- **Visual Studio Code** with extensions:
  - ESLint
  - Prettier
  - Python
  - Pylance
  - REST Client
  - Docker
  - React Native Tools
- **Postman** or **Insomnia** for API testing
- **Pinecone Console** for vector database management
- **pgAdmin** or **TablePlus** for PostgreSQL

### API Keys & Accounts Needed

1. **OpenAI** - [Get API key](https://platform.openai.com/api-keys)
2. **Pinecone** - [Sign up](https://www.pinecone.io/)
3. **Azure Speech Services** (optional) - [Get started](https://azure.microsoft.com/en-us/services/cognitive-services/speech-services/)
4. **Google OAuth** (for integrations) - [Console](https://console.cloud.google.com/)
5. **Stripe** (for subscriptions) - [Sign up](https://dashboard.stripe.com/register)

---

## 🚀 Quick Start with Docker (Recommended)

The fastest way to get started is using Docker Compose:

```bash
# Clone/navigate to the repository
cd ~/Desktop/Nico\ M.\ Lab/itoolbox_lab/marco_app

# Create environment file
cp .env.example .env
# Edit .env with your API keys (see Environment Configuration section)

# Start all services
docker-compose up -d

# Check logs
docker-compose logs -f

# Access the application
# Web: http://localhost:3000
# API: http://localhost:5000
# AI Engine: http://localhost:8000
```

---

## 🛠️ Manual Installation

### 1. Clone & Setup

```bash
# Navigate to project directory
cd ~/Desktop/Nico\ M.\ Lab/itoolbox_lab/marco_app
```

### 2. Backend Setup (Node.js API)

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

Edit `backend/.env`:

```env
# Server Configuration
NODE_ENV=development
PORT=5000
API_URL=http://localhost:5000

# Database
DATABASE_URL=postgresql://postgres:password@localhost:5432/marco_phoenix
DATABASE_SSL=false

# Redis
REDIS_URL=redis://localhost:6379

# JWT Authentication
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_EXPIRE=7d
JWT_REFRESH_SECRET=your_refresh_token_secret
JWT_REFRESH_EXPIRE=30d

# Session
SESSION_SECRET=your_session_secret_key

# AI Engine
AI_ENGINE_URL=http://localhost:8000

# Stripe (Subscriptions)
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key
STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret

# Email (SendGrid)
SENDGRID_API_KEY=your_sendgrid_api_key
SENDGRID_FROM_EMAIL=noreply@marcophenix.ai
SENDGRID_FROM_NAME=Marco Phoenix

# Cloudinary (File Storage)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Google OAuth (for integrations)
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_REDIRECT_URI=http://localhost:5000/auth/google/callback

# Microsoft OAuth
MICROSOFT_CLIENT_ID=your_microsoft_client_id
MICROSOFT_CLIENT_SECRET=your_microsoft_client_secret

# CORS
CORS_ORIGIN=http://localhost:3000

# Rate Limiting
RATE_LIMIT_WINDOW_MS=900000
RATE_LIMIT_MAX_REQUESTS=100

# WebSocket
SOCKET_IO_CORS_ORIGIN=http://localhost:3000
```

Start the backend:

```bash
# Development mode with hot reload
npm run dev

# Production mode
npm start
```

### 3. AI Engine Setup (Python/FastAPI)

```bash
# Navigate to AI engine directory
cd ../ai-engine

# Create virtual environment
python -m venv venv

# Activate virtual environment
# macOS/Linux
source venv/bin/activate
# Windows
# venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Or with poetry (recommended)
poetry install

# Create environment file
cp .env.example .env
```

Edit `ai-engine/.env`:

```env
# AI Engine Configuration
ENVIRONMENT=development
HOST=0.0.0.0
PORT=8000

# OpenAI
OPENAI_API_KEY=sk-your-openai-api-key
OPENAI_ORG_ID=org-your-organization-id
OPENAI_MODEL=gpt-4-turbo-preview
OPENAI_EMBEDDING_MODEL=text-embedding-3-large

# Anthropic (optional)
ANTHROPIC_API_KEY=sk-ant-your-anthropic-key
ANTHROPIC_MODEL=claude-3-opus-20240229

# Azure OpenAI (optional)
AZURE_OPENAI_API_KEY=your_azure_key
AZURE_OPENAI_ENDPOINT=https://your-resource.openai.azure.com/
AZURE_OPENAI_DEPLOYMENT=gpt-4

# Pinecone Vector Database
PINECONE_API_KEY=your-pinecone-api-key
PINECONE_ENVIRONMENT=your-environment
PINECONE_INDEX_NAME=marco-phoenix

# Azure Speech Services (optional)
AZURE_SPEECH_KEY=your_speech_key
AZURE_SPEECH_REGION=your_region

# Redis (for caching)
REDIS_URL=redis://localhost:6379

# PostgreSQL (for metadata)
DATABASE_URL=postgresql://postgres:password@localhost:5432/marco_phoenix

# LangChain
LANGCHAIN_TRACING_V2=true
LANGCHAIN_API_KEY=your_langchain_api_key
LANGCHAIN_PROJECT=marco-phoenix

# Rate Limiting
MAX_REQUESTS_PER_MINUTE=60
MAX_TOKENS_PER_REQUEST=4096

# Model Configuration
TEMPERATURE=0.7
MAX_TOKENS=2048
TOP_P=1.0

# RAG Configuration
CHUNK_SIZE=1000
CHUNK_OVERLAP=200
TOP_K_RESULTS=5
```

Start the AI engine:

```bash
# With uvicorn
uvicorn src.main:app --reload --host 0.0.0.0 --port 8000

# Or with poetry
poetry run uvicorn src.main:app --reload

# Check health
curl http://localhost:8000/health
```

### 4. Web Frontend Setup (React)

```bash
# Navigate to web directory
cd ../web

# Install dependencies
npm install

# Create environment file
cp .env.example .env
```

Edit `web/.env`:

```env
# API Configuration
REACT_APP_API_URL=http://localhost:5000/api/v1
REACT_APP_WS_URL=ws://localhost:5000

# Stripe
REACT_APP_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_publishable_key

# Google OAuth
REACT_APP_GOOGLE_CLIENT_ID=your_google_client_id

# Microsoft OAuth
REACT_APP_MICROSOFT_CLIENT_ID=your_microsoft_client_id

# Environment
REACT_APP_ENV=development

# Features
REACT_APP_ENABLE_VOICE=true
REACT_APP_ENABLE_KNOWLEDGE_BASE=true
REACT_APP_ENABLE_AUTOMATIONS=true

# Analytics (optional)
REACT_APP_GA_TRACKING_ID=UA-XXXXXXXXX-X

# Sentry (optional)
REACT_APP_SENTRY_DSN=your_sentry_dsn
```

Start the web app:

```bash
npm start
# Opens at http://localhost:3000
```

### 5. Database Setup

#### PostgreSQL

```bash
# Create database
createdb marco_phoenix

# Or using psql
psql postgres
CREATE DATABASE marco_phoenix;
\q

# Run migrations
cd backend
npm run migrate

# Seed database (optional)
npm run seed
```

#### Redis

```bash
# Start Redis
# macOS with Homebrew
brew services start redis

# Or run manually
redis-server

# Test connection
redis-cli ping
# Should return: PONG
```

#### Pinecone (Vector Database)

1. Go to [Pinecone Console](https://app.pinecone.io/)
2. Create a new index:
   - **Name**: `marco-phoenix`
   - **Dimensions**: `3072` (for text-embedding-3-large)
   - **Metric**: `cosine`
   - **Pod Type**: `s1.x1` (starter) or `p1.x1` (production)
3. Copy your API key to `.env` files

### 6. Mobile App Setup (React Native) - Optional

```bash
# Navigate to mobile directory
cd ../mobile

# Install dependencies
npm install

# Install iOS dependencies (macOS only)
cd ios && pod install && cd ..

# Start Metro bundler
npm start

# Run on iOS (macOS only)
npm run ios

# Run on Android
npm run android
```

---

## 🧪 Running Tests

### Backend Tests

```bash
cd backend
npm test                    # Run all tests
npm run test:unit          # Unit tests only
npm run test:integration   # Integration tests
npm run test:coverage      # With coverage
```

### AI Engine Tests

```bash
cd ai-engine
pytest                     # Run all tests
pytest tests/unit/        # Unit tests only
pytest -v --cov           # With coverage
```

### Frontend Tests

```bash
cd web
npm test                   # Interactive mode
npm run test:coverage      # With coverage
npm run test:e2e          # E2E tests
```

---

## 📝 Development Workflow

### 1. Feature Development

```bash
# Create feature branch
git checkout -b feature/your-feature-name

# Make changes
# Write tests
# Update documentation

# Commit with conventional commits
git commit -m "feat: add conversation memory feature"
```

Commit types:
- `feat:` - New feature
- `fix:` - Bug fix
- `docs:` - Documentation
- `style:` - Formatting
- `refactor:` - Code refactoring
- `test:` - Tests
- `chore:` - Maintenance

### 2. Testing AI Responses

Use the interactive CLI:

```bash
cd ai-engine
python -m src.cli

# Or test specific endpoint
curl -X POST http://localhost:8000/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "message": "What is the capital of France?",
    "conversation_id": "test-123"
  }'
```

### 3. Knowledge Base Testing

```bash
# Upload a document
curl -X POST http://localhost:8000/api/knowledge/upload \
  -F "file=@/path/to/document.pdf" \
  -F "user_id=test-user"

# Query the knowledge base
curl -X POST http://localhost:8000/api/knowledge/query \
  -H "Content-Type: application/json" \
  -d '{
    "query": "What does the document say about AI?",
    "user_id": "test-user"
  }'
```

---

## 🐛 Troubleshooting

### PostgreSQL Connection Issues

```bash
# Check if PostgreSQL is running
# macOS
brew services list

# Test connection
psql postgresql://postgres:password@localhost:5432/marco_phoenix

# Reset database
npm run db:reset
```

### Python Dependencies Issues

```bash
# Clear cache and reinstall
pip cache purge
pip install -r requirements.txt --no-cache-dir

# Or with poetry
poetry cache clear . --all
poetry install
```

### Port Already in Use

```bash
# Find and kill process on port 5000
lsof -ti:5000 | xargs kill -9

# Or change ports in .env files
```

### OpenAI API Errors

- Check API key is valid
- Verify you have credits/billing enabled
- Check rate limits on OpenAI dashboard
- Use fallback model: `OPENAI_MODEL=gpt-3.5-turbo`

### Pinecone Connection Issues

- Verify API key and environment are correct
- Check index name matches
- Ensure dimensions match embedding model
- Create index if it doesn't exist

---

## 📚 Next Steps

1. ✅ Complete installation
2. 📖 Read the [Architecture Documentation](./docs/architecture/README.md)
3. 🤖 Explore [AI Agent Development Guide](./docs/developer/agents.md)
4. 🔌 Review [Integration Guide](./docs/developer/integrations.md)
5. 🎨 Check the [Design System](./docs/user-guides/design-system.md)
6. 💻 Start building!

---

## 📞 Getting Help

- **Documentation**: `/docs` directory
- **GitHub Issues**: [Report bugs](https://github.com/IToolboxPH/marco-phoenix/issues)
- **Email**: dev@itoolbox.ph
- **Community**: [Join Discord](https://discord.gg/marcophenix)

---

## 🔗 Useful Resources

### AI & ML
- [OpenAI Documentation](https://platform.openai.com/docs)
- [LangChain Docs](https://python.langchain.com/)
- [Pinecone Guides](https://docs.pinecone.io/)
- [Hugging Face](https://huggingface.co/)

### Backend
- [FastAPI Tutorial](https://fastapi.tiangolo.com/tutorial/)
- [Express.js Guide](https://expressjs.com/en/guide/routing.html)
- [Socket.io Docs](https://socket.io/docs/v4/)

### Frontend
- [React Documentation](https://react.dev/)
- [React Native Docs](https://reactnative.dev/)
- [Material-UI](https://mui.com/)

---

**Ready to build the future of conversational AI! 🚀🤖**
