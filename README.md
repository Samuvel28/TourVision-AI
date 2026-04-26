# YatrAI - Smart Temple Pilgrim Platform

A complete full-stack web application for AI-powered darshan booking, crowd predictions, and travel planning for Tamil Nadu temples.

## Overview

YatrAI combines machine learning predictions with a modern booking platform to help pilgrims plan stress-free temple visits. The platform provides:

- **AI Crowd Predictions**: 21-day advance footfall forecasts using LSTM + XGBoost
- **Darshan Slot Booking**: Real-time reservation system with crowd-aware scheduling
- **Hotel Booking**: Integrated accommodation management near temples
- **User Dashboard**: Manage all bookings and travel history
- **Admin Dashboard**: Temple staff resource planning and crowd management
- **Real-Time Alerts**: Crowd level notifications and recommendations

## Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - Modern UI components with latest features
- **Tailwind CSS v4** - Utility-first styling
- **shadcn/ui** - Accessible component library

### Backend
- **Next.js API Routes** - Serverless backend
- **Supabase** - PostgreSQL database + Auth + Real-time
- **TypeScript** - Type-safe development

### Deployment
- **Vercel** - Optimized Next.js deployment
- **Supabase** - Database and authentication

## Project Structure

```
├── app/
│   ├── page.tsx                 # Landing page
│   ├── auth/
│   │   ├── signup/page.tsx      # User registration
│   │   └── login/page.tsx       # User login
│   ├── temples/
│   │   ├── page.tsx             # Browse temples
│   │   └── [id]/page.tsx        # Temple details & booking
│   ├── hotels/page.tsx          # Hotel browsing & booking
│   ├── predictions/page.tsx     # Crowd predictions display
│   ├── dashboard/page.tsx       # User dashboard
│   ├── admin/page.tsx           # Admin/staff dashboard
│   ├── setup/page.tsx           # Database initialization
│   ├── api/
│   │   ├── temples/route.ts     # Temple API
│   │   ├── darshan-slots/route.ts
│   │   ├── bookings/route.ts    # Darshan bookings
│   │   ├── predictions/route.ts # Crowd predictions
│   │   ├── hotel-bookings/route.ts
│   │   └── seed/route.ts        # Database seeding
│   ├── layout.tsx               # Root layout
│   └── globals.css              # Global styles
├── components/
│   ├── header.tsx               # Navigation header
│   ├── footer.tsx               # Footer
│   ├── booking-confirmation.tsx # Booking modal
│   ├── notifications.tsx        # Toast notifications
│   └── prediction-chart.tsx     # Prediction visualization
├── lib/
│   ├── supabase.ts              # Supabase client
│   ├── auth.ts                  # Authentication helpers
│   ├── api-client.ts            # Client API functions
│   └── seed.ts                  # Database seeding
└── scripts/
    ├── setup_database.sql       # Initial schema
    ├── schema.sql               # Full database schema
    └── init-db.ts               # Database initialization script
```

## Quick Start

### Prerequisites
- Node.js 18+
- pnpm (or npm/yarn)
- Supabase account

### Installation

1. **Clone and install dependencies**:
   ```bash
   cd /vercel/share/v0-project
   pnpm install
   ```

2. **Set up environment variables**:
   Create `.env.local`:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
   ```

3. **Initialize database**:
   ```bash
   pnpm run dev
   ```
   Then visit `http://localhost:3000/setup` to seed the database.

4. **Start development server**:
   ```bash
   pnpm dev
   ```
   Visit `http://localhost:3000`

## Database Schema

### Tables
- **users**: User profiles and authentication
- **temples**: Temple information and details
- **darshan_slots**: Available booking time slots
- **darshan_bookings**: User darshan reservations
- **hotels**: Hotel listings
- **hotel_bookings**: Hotel reservations
- **crowd_predictions**: AI-generated crowd forecasts
- **admin_resources**: Staff and resource planning data

## Features

### For Pilgrims
✓ Browse temples with crowd information
✓ Book darshan slots in advance
✓ View AI crowd predictions (21 days ahead)
✓ Reserve nearby hotels
✓ Manage all bookings in personal dashboard
✓ Receive crowd alerts and recommendations
✓ Plan multi-temple itineraries

### For Temple Staff
✓ View real-time crowd predictions
✓ Get AI-powered resource recommendations
✓ Track darshan bookings and attendance
✓ Access historical crowd data
✓ Plan staff and food supplies
✓ Manage barriers and crowd control
✓ Export reports and analytics

## Key Pages

| Route | Purpose |
|-------|---------|
| `/` | Landing page with features |
| `/auth/signup` | User registration |
| `/auth/login` | User login |
| `/temples` | Browse all temples |
| `/temples/[id]` | Temple details & darshan booking |
| `/hotels` | Hotel search & booking |
| `/predictions` | AI crowd forecasts |
| `/dashboard` | User bookings & profile |
| `/admin` | Temple staff dashboard |
| `/setup` | Initialize database |

## API Endpoints

```
POST   /api/seed                      # Initialize database with seed data
GET    /api/temples                   # List all temples
POST   /api/temples                   # Create new temple (admin)
GET    /api/darshan-slots             # Get available slots
POST   /api/darshan-slots             # Create new slot (admin)
GET    /api/bookings                  # Get user bookings
POST   /api/bookings                  # Create darshan booking
GET    /api/predictions               # Get crowd predictions
POST   /api/predictions               # Create prediction (admin)
GET    /api/hotel-bookings            # Get hotel bookings
POST   /api/hotel-bookings            # Create hotel booking
```

## Environment Variables

Required environment variables in `.env.local`:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

# Optional
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## Design System

### Colors
- **Primary**: #8b5a3c (Temple Brown)
- **Accent**: #d4a574 (Gold)
- **Secondary**: #f5f1ed (Light Beige)
- **Muted**: #e8dcc8 (Warm Gray)

### Typography
- **Sans**: Geist (headings & body)
- **Mono**: Geist Mono (code)

## Deployment

### Deploy to Vercel

1. **Push to GitHub**
2. **Connect to Vercel**
3. **Add environment variables** in Vercel Settings
4. **Deploy**

```bash
vercel deploy --prod
```

### Post-Deployment
1. Visit `/setup` to initialize database
2. Create test accounts
3. Verify booking flows
4. Check admin dashboard

## Testing

### Test User Accounts
- Email: `user@example.com`
- Password: `password123`

### Test Temples
The system comes pre-loaded with 6 major Tamil Nadu temples:
- Meenakshi Amman Temple (Madurai)
- Chidambaram Nataraja
- Tirupati Venkateswara
- Kanyakumari Devi
- Rameswaram Ramanathaswamy
- Thanjavur Brihadeshwara

## Performance Features

- ✓ Server-side rendering (SSR) for SEO
- ✓ Static site generation (SSG) where applicable
- ✓ Image optimization with Next.js Image
- ✓ CSS-in-JS with Tailwind (minimal bundle)
- ✓ API route caching strategies
- ✓ Database query optimization with indexes
- ✓ Real-time updates via Supabase subscriptions

## Security

- ✓ Supabase Row Level Security (RLS)
- ✓ SQL injection prevention (parameterized queries)
- ✓ Authentication via Supabase Auth
- ✓ HTTPS/TLS encryption
- ✓ Environment variable protection
- ✓ API rate limiting ready
- ✓ CORS configuration

## Future Enhancements

- [ ] Mobile app (React Native/Flutter)
- [ ] WhatsApp integration for alerts
- [ ] Payment gateway integration
- [ ] Multi-language support
- [ ] Accessibility improvements (WCAG 2.1)
- [ ] Real Google Trends API integration
- [ ] Advanced ML predictions
- [ ] Live crowdfunding for temple services
- [ ] Federated learning for privacy
- [ ] Voice-based booking interface

## Support & Documentation

- **Official Docs**: https://docs.yatrAI.com
- **GitHub Issues**: Report bugs and request features
- **Email**: support@yatrAI.com

## License

MIT License - feel free to use this project for personal or commercial purposes.

## Contributors

YatrAI was built by a team passionate about improving temple experiences and enabling seamless pilgrimages.

---

**Made with ❤️ for Tamil Nadu Temples**
