# Guide: Adding New Pages

This guide explains how to add new pages to the Ahana website.

## Quick Start

### Adding a New Service Page

1. **Create the folder and file:**
   ```bash
   mkdir app/services/your-service-name
   # Create page.js inside
   ```

2. **Create the page component:**
   ```javascript
   // app/services/your-service-name/page.js
   import Header from '../../components/layout/Header'
   import Footer from '../../components/layout/Footer'

   export const metadata = {
     title: 'Your Service - Ahana',
     description: 'Your service description',
   }

   export default function YourServicePage() {
     return (
       <>
         <Header />
         <main className="min-h-screen">
           {/* Your content here */}
         </main>
         <Footer />
       </>
     )
   }
   ```

3. **Update constants:**
   ```javascript
   // app/utils/constants.js
   export const SERVICES = [
     // ... existing services
     {
       id: 'your-service',
       name: 'Your Service Name',
       slug: 'your-service-name',
       description: 'Brief description',
     },
   ]
   ```

4. **Update navigation (if needed):**
   ```javascript
   // app/utils/constants.js
   export const NAVIGATION = {
     main: [
       {
         name: 'Services',
         href: '/services',
         dropdown: [
           // ... existing items
           { name: 'Your Service', href: '/services/your-service-name' },
         ],
       },
     ],
   }
   ```

### Adding a New Industry Page

Follow the same pattern as services:

1. Create: `app/industries/your-industry/page.js`
2. Update `INDUSTRIES` array in `utils/constants.js`
3. Update navigation dropdown if needed

### Adding a New Top-Level Page

1. **Create the folder:**
   ```bash
   mkdir app/your-page-name
   ```

2. **Create page.js:**
   ```javascript
   // app/your-page-name/page.js
   import Header from '../components/layout/Header'
   import Footer from '../components/layout/Footer'

   export const metadata = {
     title: 'Your Page - Ahana',
     description: 'Page description',
   }

   export default function YourPage() {
     return (
       <>
         <Header />
         <main className="min-h-screen">
           {/* Content */}
         </main>
         <Footer />
       </>
     )
   }
   ```

3. **Add to navigation:**
   ```javascript
   // app/utils/constants.js
   export const NAVIGATION = {
     main: [
       // ... existing items
       { name: 'Your Page', href: '/your-page-name' },
     ],
   }
   ```

## Page Templates

### Standard Page Template
```javascript
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import Section from '../components/shared/Section'
import Container from '../components/shared/Container'

export const metadata = {
  title: 'Page Title - Ahana',
  description: 'Page description for SEO',
}

export default function PageName() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <Section background="gradient" padding="normal">
          <Container>
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Page Title
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Page description
              </p>
            </div>
          </Container>
        </Section>

        {/* Content Section */}
        <Section background="white">
          <Container>
            {/* Your content here */}
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  )
}
```

### Service/Product Page Template
```javascript
import Header from '../../components/layout/Header'
import Footer from '../../components/layout/Footer'
import Image from 'next/image'
import { IMAGES } from '../../utils/constants'

export const metadata = {
  title: 'Service Name - Ahana',
  description: 'Service description',
}

export default function ServicePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero with Image */}
        <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  Service Name
                </h1>
                <p className="text-xl text-blue-100 mb-8">
                  Service description
                </p>
                <button className="bg-white text-blue-900 px-8 py-3 rounded-md hover:bg-gray-100 transition font-semibold">
                  Get Started
                </button>
              </div>
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={IMAGES.hero}
                  alt="Service"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Key Features
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Feature cards */}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
```

## Using Shared Components

### Button Component
```javascript
import Button from '../components/shared/Button'

<Button variant="primary" size="md" onClick={handleClick}>
  Click Me
</Button>

// Variants: primary, secondary, outline, ghost
// Sizes: sm, md, lg
```

### Card Component
```javascript
import Card from '../components/shared/Card'

<Card hover={true}>
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>
```

### Section Component
```javascript
import Section from '../components/shared/Section'

<Section background="gradient" padding="normal">
  {/* Content */}
</Section>

// Backgrounds: white, gray, gradient, dark
// Padding: none, small, normal, large
```

### Container Component
```javascript
import Container from '../components/shared/Container'

<Container size="default">
  {/* Content */}
</Container>

// Sizes: small, default, large, full
```

## Best Practices

1. **Always include metadata** for SEO
2. **Use shared components** for consistency
3. **Follow naming conventions**: kebab-case for folders
4. **Update constants.js** for navigation items
5. **Test responsiveness** on mobile, tablet, and desktop
6. **Optimize images** using Next.js Image component
7. **Keep components small** and focused
8. **Use semantic HTML** for accessibility

## File Naming Conventions

- **Folders**: `kebab-case` (e.g., `cloud-infrastructure`)
- **Components**: `PascalCase` (e.g., `Button.js`)
- **Pages**: Always `page.js` (Next.js convention)
- **Utilities**: `camelCase` (e.g., `constants.js`)

## Testing Your New Page

1. Start the dev server: `npm run dev`
2. Navigate to your new page
3. Check:
   - Page loads correctly
   - Navigation works
   - Responsive design
   - Images load
   - Links work
   - SEO metadata is correct

## Common Issues

### Page not found (404)
- Check folder structure matches URL
- Ensure `page.js` exists in the folder
- Restart dev server

### Navigation not updating
- Check `constants.js` is updated
- Verify import path in Header component
- Clear browser cache

### Styles not applying
- Ensure Tailwind classes are correct
- Check for typos in className
- Verify component imports

## Need Help?

Refer to:
- [ARCHITECTURE.md](./ARCHITECTURE.md) - Full architecture documentation
- [Next.js Docs](https://nextjs.org/docs) - Official Next.js documentation
- [Tailwind CSS Docs](https://tailwindcss.com/docs) - Tailwind CSS documentation
