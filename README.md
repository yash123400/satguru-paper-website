# Khemka Papers — B2B Paper Trading Website

A production-ready business website for **Khemka Papers**, a B2B paper trading company based in Ludhiana, Punjab, India. Built to modernize a 15-year-old family business with a premium digital presence.

## Tech Stack

| Layer | Tech |
|-------|------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS + CSS Variables |
| Animations | Framer Motion |
| Icons | Lucide React |
| Fonts | Cormorant Garamond + DM Sans (Google Fonts via next/font) |
| Deployment | Vercel |

## Features

- Single-page scrolling website with smooth anchor navigation
- Sticky navbar with scroll-triggered blur backdrop
- Hero with staggered text animation and animated stat counters
- 4-product grid with scroll-triggered card reveal
- 6-feature "Why Us" grid
- 4-step animated process timeline
- About section with CSS paper stack art
- Testimonials section (placeholder — replace with real data)
- Contact form with client + server-side validation
- Mobile hamburger drawer with staggered animations
- Fully responsive (375px → 1920px)
- Semantic HTML, aria labels, keyboard navigation
- API route ready for Resend/Nodemailer email integration

## Local Setup

```bash
# 1. Clone the repo
git clone https://github.com/yash123400/khemka-papers-website.git
cd khemka-papers-website

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Edit .env.local with your actual values

# 4. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | API key from [Resend](https://resend.com) for email notifications |
| `CONTACT_EMAIL` | Email address to receive enquiry notifications |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number in international format (e.g. `919876543210`) |

> The contact form currently logs to console. To enable email delivery, uncomment the Resend block in `src/app/api/contact/route.ts` and install the Resend SDK: `npm install resend`

## Deployment (Vercel)

```bash
# Install Vercel CLI if needed
npm i -g vercel

# Login
vercel login

# Deploy to production
vercel --prod
```

Or connect the GitHub repo to Vercel via the dashboard for automatic deployments on push.

### Environment Variables on Vercel

Add in Vercel Dashboard → Project Settings → Environment Variables:
- `RESEND_API_KEY`
- `CONTACT_EMAIL`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`

## Customization

- **Company details**: Update phone, email, address in `src/components/sections/Contact.tsx` and `src/components/layout/Footer.tsx`
- **Testimonials**: Replace placeholder data in `src/components/sections/Testimonials.tsx`
- **WhatsApp number**: Set `NEXT_PUBLIC_WHATSAPP_NUMBER` in `.env.local`
- **Colors**: Edit CSS variables in `src/app/globals.css`
- **Fonts**: Change imports in `src/app/layout.tsx`

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Main page (assembles all sections)
│   ├── globals.css         # Design system, CSS variables
│   └── api/contact/
│       └── route.ts        # Contact form API endpoint
└── components/
    ├── layout/
    │   ├── Navbar.tsx
    │   └── Footer.tsx
    ├── sections/
    │   ├── Hero.tsx
    │   ├── Products.tsx
    │   ├── WhyUs.tsx
    │   ├── HowItWorks.tsx
    │   ├── About.tsx
    │   ├── Testimonials.tsx
    │   └── Contact.tsx
    └── ui/
        ├── Button.tsx
        ├── StatCounter.tsx
        ├── ProductCard.tsx
        ├── FeatureBlock.tsx
        └── TimelineStep.tsx
```

---

Built with care in Ludhiana, Punjab. 🇮🇳
