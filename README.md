# Pulse Mind - AI-Powered Fitness Platform

> Transform your body with advanced AI technology. Get personalized diet plans and workout routines designed just for you.

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)](https://tailwindcss.com/)

## Features

- 🤖 **AI-Powered Conversations** - Talk to our AI assistant powered by Google Generative AI and Vapi
- 📋 **Personalized Workout Plans** - Custom exercise routines tailored to your fitness goals
- 🥗 **Custom Diet Plans** - Personalized meal plans with calorie tracking
- 👤 **User Profiles** - Manage your fitness programs and track progress
- 🔐 **Secure Authentication** - User authentication powered by Clerk
- 💾 **Real-time Database** - Convex backend for seamless data synchronization
- 🎨 **Modern UI/UX** - Cyberpunk-inspired design with smooth animations
- 📱 **Responsive Design** - Optimized for all devices

## Tech Stack

### Frontend
- **Framework**: Next.js 15.2.4 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **UI Components**: Radix UI primitives (Accordion, Dialog, Tabs, etc.)
- **Icons**: Lucide React

### Backend & Services
- **Database**: Convex (real-time backend)
- **Authentication**: Clerk
- **AI Integration**: 
  - Google Generative AI
  - Vapi AI for voice interactions
- **Webhooks**: Svix

### Development Tools
- **Build Tool**: Turbopack (Next.js)
- **Linting**: ESLint
- **Package Manager**: npm/yarn/pnpm

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 20.x or higher
- npm, yarn, or pnpm
- Git

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nethal17/fitness-ai.git
   cd fitness-ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory with the following variables:
   ```env
   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   
   # Convex
   CONVEX_DEPLOYMENT=your_convex_deployment
   NEXT_PUBLIC_CONVEX_URL=your_convex_url
   
   # Google Generative AI
   GOOGLE_GENERATIVE_AI_API_KEY=your_google_ai_api_key
   
   # Vapi AI
   NEXT_PUBLIC_VAPI_PUBLIC_KEY=your_vapi_public_key
   VAPI_PRIVATE_KEY=your_vapi_private_key
   ```

4. **Set up Convex**
   ```bash
   npx convex dev
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

## Project Structure

```
fitness-ai/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── (auth)/            # Authentication routes
│   │   │   ├── sign-in/
│   │   │   └── sign-up/
│   │   ├── generate-program/  # AI program generation
│   │   ├── profile/           # User profile page
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   └── globals.css        # Global styles
│   ├── components/            # React components
│   │   ├── ui/               # Reusable UI components
│   │   ├── CornerElements.tsx
│   │   ├── Footer.tsx
│   │   ├── Navbar.tsx
│   │   ├── NoFitnessPlan.tsx
│   │   ├── ProfileHeader.tsx
│   │   ├── TerminalOverlay.tsx
│   │   └── UserPrograms.tsx
│   ├── constants/            # App constants
│   ├── lib/                  # Utility functions
│   │   ├── utils.ts
│   │   └── vapi.ts
│   └── providers/            # Context providers
│       └── ConvexClerkProvider.tsx
├── convex/                   # Convex backend
│   ├── schema.ts            # Database schema
│   ├── plans.ts             # Fitness plans logic
│   ├── users.ts             # User management
│   ├── auth.config.ts       # Auth configuration
│   └── http.ts              # HTTP endpoints
├── public/                  # Static assets
└── package.json
```

## Database Schema

### Users
- `name`: User's display name
- `email`: User's email address
- `image`: Profile picture (optional)
- `clerkId`: Clerk authentication ID

### Plans
- `userId`: Reference to user
- `name`: Plan name
- `workoutPlan`: Exercise schedule and routines
- `dietPlan`: Daily calories and meal plans
- `isActive`: Whether the plan is currently active

## Key Features Explained

### AI Program Generation
Users can interact with an AI assistant to generate personalized fitness programs. The system analyzes user input and creates:
- Custom workout schedules with exercises, sets, and reps
- Tailored diet plans with daily calorie targets
- Meal recommendations for breakfast, lunch, and dinner

### User Authentication
Secure authentication flow using Clerk:
- Sign up/Sign in pages
- Protected routes
- Session management

### Profile Management
Users can:
- View their fitness programs
- Track active and archived plans
- Access workout and diet details

## Available Scripts

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

## Configuration

### Tailwind CSS
Configured with custom animations and cyber-themed design tokens. See `tailwind.config.js` for customization options.

### TypeScript
Strict type checking enabled. Configuration in `tsconfig.json`.

### ESLint
Next.js recommended ESLint configuration with custom rules in `eslint.config.mjs`.

## Deployment

### Vercel (Recommended)
The easiest way to deploy your Next.js app:

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com/new)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms
This app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Railway

**Important**: Make sure to set up all environment variables and Convex deployment on your chosen platform.

## Features in Detail

### Homepage
- Hero section with statistics (500+ active users)
- Call-to-action button to generate programs
- Cyberpunk-themed design with scan line animations
- User programs section

### Generate Program Page
- Voice-enabled AI assistant (Vapi integration)
- Real-time conversation with AI
- Automatic program generation

### Profile Page
- Display user information
- List of all fitness programs
- Toggle between active and archived plans
- Detailed workout and diet plan views

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 👨‍💻 Author

**Nethal Fernando**
- GitHub: [@nethal17](https://github.com/nethal17)

## Acknowledgments

- Next.js team for the amazing framework
- Clerk for authentication
- Convex for real-time backend
- Google AI for generative capabilities
- Vapi for voice AI integration
- Radix UI for accessible components

## Support

For support, email your-email@example.com or open an issue in the GitHub repository.

---

Made with ❤️ and AI
