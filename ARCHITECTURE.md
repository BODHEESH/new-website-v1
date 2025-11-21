# Project Architecture

## Overview
This is a professional Next.js 14 application built with the App Router, designed for scalability and maintainability.

## Folder Structure

```
ahana-new-website/
├── app/
│   ├── components/
│   │   ├── layout/              # Layout components (Header, Footer)
│   │   ├── home/                # Home page specific components
│   │   └── shared/              # Reusable components (Button, Card, etc.)
│   ├── utils/                   # Utility functions and constants
│   ├── services/                # Services pages
│   │   ├── page.js              # Services overview
│   │   ├── cloud-infrastructure/
│   │   ├── intelligent-automation/
│   │   └── [other services]/
│   ├── industries/              # Industries pages
│   │   ├── page.js              # Industries overview
│   │   └── [industry pages]/
│   ├── insights/                # Insights pages
│   │   ├── page.js              # Insights overview
│   │   ├── case-studies/
│   │   ├── blogs/
│   │   └── news-events/
│   ├── about-us/                # About page
│   ├── careers/                 # Careers page
│   ├── layout.js                # Root layout
│   ├── page.js                  # Home page
│   └── globals.css              # Global styles
├── public/                      # Static assets
├── next.config.js               # Next.js configuration
├── tailwind.config.js           # Tailwind CSS configuration
└── package.json                 # Dependencies

```

## Component Organization

### Layout Components (`app/components/layout/`)
- **Header.js**: Main navigation with dropdown menus
- **Footer.js**: Site footer with links and social media

### Home Components (`app/components/home/`)
- **Hero.js**: Hero section with CTA
- **Features.js**: Features showcase
- **Stats.js**: Statistics display
- **Gallery.js**: Image gallery
- **Testimonials.js**: Customer testimonials
- **Pricing.js**: Pricing plans
- **Partners.js**: Partner logos

### Shared Components (`app/components/shared/`)
- **Button.js**: Reusable button with variants
- **Card.js**: Reusable card component
- **Section.js**: Section wrapper with backgrounds
- **Container.js**: Content container with max-width

## Routing Structure

### Main Routes
- `/` - Home page
- `/services` - Services overview
- `/industries` - Industries overview
- `/insights` - Insights overview
- `/about-us` - About page
- `/careers` - Careers page

### Service Routes
- `/services/cloud-infrastructure`
- `/services/intelligent-automation`
- `/services/modern-workplace`
- `/services/enterprise-integration`
- `/services/application-development`
- `/services/ahana-ai`

### Industry Routes
- `/industries/banking-finance`
- `/industries/insurance`
- `/industries/manufacturing`
- `/industries/logistics`
- `/industries/automobile`

### Insight Routes
- `/insights/case-studies`
- `/insights/blogs`
- `/insights/news-events`

## Navigation System

The navigation is centralized in `app/utils/constants.js` with the `NAVIGATION` object. This makes it easy to:
- Add new menu items
- Update links
- Manage dropdown menus
- Maintain consistency

## Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Responsive Design**: Mobile-first approach
- **Custom Colors**: Defined in `tailwind.config.js`
- **Animations**: Smooth transitions and hover effects

## Best Practices

1. **Component Reusability**: Use shared components for common UI patterns
2. **Constants Management**: Store navigation and data in `utils/constants.js`
3. **Metadata**: Each page has proper SEO metadata
4. **Image Optimization**: Use Next.js Image component
5. **Code Organization**: Group related components together

## Adding New Pages

### To add a new service:
1. Create folder: `app/services/[service-name]/`
2. Add `page.js` inside the folder
3. Update `SERVICES` array in `utils/constants.js`
4. Navigation will automatically update

### To add a new industry:
1. Create folder: `app/industries/[industry-name]/`
2. Add `page.js` inside the folder
3. Update `INDUSTRIES` array in `utils/constants.js`
4. Navigation will automatically update

## Performance Optimizations

- Server Components by default (faster initial load)
- Client Components only when needed ('use client' directive)
- Image optimization with Next.js Image
- Code splitting per route
- CSS purging with Tailwind

## Development Workflow

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Future Enhancements

- [ ] Add search functionality
- [ ] Implement blog CMS integration
- [ ] Add contact form
- [ ] Implement analytics
- [ ] Add internationalization (i18n)
- [ ] Create admin dashboard
