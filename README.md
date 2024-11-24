## Getting Started

### Prerequisites

1. Node.js 18.17 or later
2. A Supabase account (free tier works fine)

### Supabase Setup

1. Create a new project on [Supabase](https://supabase.com)
2. Once your project is ready, go to Project Settings > API to find your:
   - Project URL
   - Project API Key (anon/public)
3. Copy the `.env.example` file to `.env.local` and update with your Supabase credentials:
```bash
NEXT_PUBLIC_SUPABASE_URL=your-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
```
4. Set up Email Authentication:
   - Go to Authentication > Providers
   - Enable Email provider
   - Enable "Confirm email"
   - Enable "Secure email change"
   - Customize email templates if needed

5. Create the profiles table by running this query in the SQL editor:
```sql
CREATE TABLE profiles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id UUID REFERENCES auth.users(id),
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255),
    username VARCHAR(255),
    university VARCHAR(255),
    role VARCHAR(50),
    profile_image_url TEXT,
    connections_count INTEGER DEFAULT 0,
    research_interests TEXT,
    expertise TEXT,
    ongoing_projects TEXT,
    previous_projects TEXT,
    publications TEXT,
    awards TEXT,
    preferred_communication TEXT[],
    available_meetings TEXT,
    latest_activities TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    brief_description TEXT,
    CONSTRAINT username_unique UNIQUE (username)
);
```

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.
