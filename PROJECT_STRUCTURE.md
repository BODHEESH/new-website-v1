# Project Structure

```
ahana-new-website/
├── app/
│   ├── (routes)/                    # Route groups
│   │   ├── (main)/                  # Main public pages
│   │   │   ├── page.js              # Home page
│   │   │   ├── about-us/
│   │   │   │   └── page.js
│   │   │   └── careers/
│   │   │       └── page.js
│   │   ├── services/
│   │   │   ├── page.js              # Services overview
│   │   │   ├── cloud-infrastructure/
│   │   │   │   └── page.js
│   │   │   ├── intelligent-automation/
│   │   │   │   └── page.js
│   │   │   ├── modern-workplace/
│   │   │   │   └── page.js
│   │   │   ├── enterprise-integration/
│   │   │   │   └── page.js
│   │   │   ├── application-development/
│   │   │   │   └── page.js
│   │   │   └── ahana-ai/
│   │   │       └── page.js
│   │   ├── industries/
│   │   │   ├── page.js              # Industries overview
│   │   │   ├── banking-finance/
│   │   │   │   └── page.js
│   │   │   ├── insurance/
│   │   │   │   └── page.js
│   │   │   ├── manufacturing/
│   │   │   │   └── page.js
│   │   │   ├── logistics/
│   │   │   │   └── page.js
│   │   │   └── automobile/
│   │   │       └── page.js
│   │   └── insights/
│   │       ├── page.js              # Insights overview
│   │       ├── case-studies/
│   │       │   └── page.js
│   │       ├── blogs/
│   │       │   └── page.js
│   │       └── news-events/
│   │           └── page.js
│   ├── components/
│   │   ├── layout/                  # Layout components
│   │   │   ├── Header.js
│   │   │   ├── Footer.js
│   │   │   └── Navigation.js
│   │   ├── home/                    # Home page specific
│   │   │   ├── Hero.js
│   │   │   ├── Features.js
│   │   │   ├── Stats.js
│   │   │   ├── Gallery.js
│   │   │   ├── Testimonials.js
│   │   │   ├── Pricing.js
│   │   │   └── Partners.js
│   │   ├── shared/                  # Reusable components
│   │   │   ├── Button.js
│   │   │   ├── Card.js
│   │   │   ├── Section.js
│   │   │   └── Container.js
│   │   └── ui/                      # UI elements
│   │       ├── Dropdown.js
│   │       └── Modal.js
│   ├── styles/
│   │   └── globals.css
│   ├── utils/                       # Utility functions
│   │   ├── constants.js
│   │   └── helpers.js
│   ├── layout.js                    # Root layout
│   └── not-found.js                 # 404 page
├── public/
│   ├── images/
│   ├── icons/
│   └── fonts/
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## Architecture Principles

1. **Route Groups**: Using Next.js 13+ App Router with route groups for better organization
2. **Component Organization**: Components organized by purpose (layout, home, shared, ui)
3. **Scalability**: Easy to add new pages and services
4. **Reusability**: Shared components for common UI patterns
5. **Separation of Concerns**: Clear separation between routes, components, and utilities
