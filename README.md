# Placer Protection Group — Marketing Website

Production-ready marketing website for Placer Protection Group, a private security company based in Roseville, CA.

## Tech Stack

- **Next.js 14** with App Router and TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for subtle animations
- **Lucide React** for icons

## Getting Started

```bash
# Install dependencies
npm install

# Start development server (port 3001)
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3001](http://localhost:3001) in your browser.

## Site Structure

```
/                       → Home page
/services               → Services index (all services)
/services/[slug]        → Individual service page (10 service pages)
/about                  → About, mission, team, careers
/contact                → Contact form + details
/locations              → Service areas (Roseville + surrounding)
/insights               → Blog/insights index
/insights/[slug]        → Single blog post (6 articles)
```

## Content Files (Easy to Edit)

All placeholder content lives in `src/data/`:

| File | What it controls |
|------|-----------------|
| `src/data/services.ts` | All 10 service pages — titles, summaries, FAQs, benefits |
| `src/data/locations.ts` | 8 service area cards — Roseville + surrounding cities |
| `src/data/testimonials.ts` | 4 client testimonials |
| `src/data/blog.ts` | 6 blog posts with full content |
| `src/data/team.ts` | 4 leadership team members |

## Updating Content

### Change Contact Info
Search for `(916) 555-0100` and `info@placerprotectiongroup.com` across the codebase and replace with real details.

### Add a New Service
Add an entry to `src/data/services.ts` following the `Service` interface. The dynamic route at `/services/[slug]/page.tsx` will automatically render it. Also add it to `generateStaticParams()`.

### Add a Blog Post
Add an entry to `src/data/blog.ts` following the `BlogPost` interface. It will appear on the index page and its own route automatically.

### Add a Location
Add an entry to `src/data/locations.ts` following the `Location` interface.

### Update Navigation
Edit `src/components/layout/Header.tsx` — the `servicesDropdown` and `navItems` arrays control the navigation links.

## Replacing Placeholder Phone/Email
The placeholder contact info is:
- **Phone:** `(916) 555-0100`
- **Email:** `info@placerprotectiongroup.com`
- **Address:** `Roseville, CA 95661`

Search and replace all instances when real information is available.

## Hero Images
Hero sections currently use CSS gradient backgrounds. To add real photography:
1. Add images to the `public/` directory or configure `next.config.ts` for remote images
2. Add a Next.js `<Image>` component inside the hero section
3. Use `object-cover` and absolute positioning over the gradient background

## SEO
- Each page exports a `metadata` object using Next.js 14's Metadata API
- Structured data (JSON-LD) is included on service pages, contact page, and blog posts
- FAQ schema is auto-generated from the `faqs` array in each service
- LocalBusiness schema is on the contact page

## Design System

**Colors:**
- Dark backgrounds: `#0d1b2a` (navy), `#0a1520` (footer)
- Accent: `amber-600` (#d97706) for CTAs and highlights
- Light sections: `white`, `slate-50`
- Text: `slate-900` (headings), `slate-600` (body)

**Typography:** Inter (loaded via `next/font/google`)

**Components:**
- All reusable components are in `src/components/`
- Section components in `src/components/sections/` handle full-width page sections
- UI components in `src/components/ui/` are card-level building blocks
- Forms in `src/components/forms/`

## Config Note

The Next.js config file is `next.config.mjs` (ESM format required by this Next.js version).

## Deployment

This is a standard Next.js application. Deploy to:
- **Vercel** (recommended): Connect GitHub repo, automatic deploys
- **Netlify**: Next.js runtime supported
- **Self-hosted**: `npm run build && npm start`

For production, set the `metadataBase` URL in `src/app/layout.tsx` to your actual domain.
