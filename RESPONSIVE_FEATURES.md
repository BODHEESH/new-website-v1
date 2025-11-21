# Responsive Design Features

This landing page is fully responsive and optimized for all screen sizes.

## Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (sm to lg)
- **Desktop**: > 1024px (lg+)

## Responsive Features by Section

### Header
- Mobile: Hamburger menu with dropdown
- Desktop: Full horizontal navigation
- Sticky positioning on all devices

### Hero Section
- Mobile: Stacked layout (image on top, text below)
- Desktop: Side-by-side layout
- Responsive typography (text-4xl to text-6xl)
- Flexible button layout (column on mobile, row on desktop)

### Features Section
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 4 columns
- Icons scale appropriately
- Cards have hover effects

### Stats Section
- Mobile: 2 columns
- Desktop: 4 columns
- Cards with shadow effects
- Responsive font sizes

### Gallery
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns
- Hover zoom effects
- Responsive image loading with Next.js Image

### Testimonials
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns
- Responsive card padding

### Pricing
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns
- Scale effect on hover
- Responsive feature lists

### Partners
- Mobile: 2 columns
- Tablet: 3 columns
- Desktop: 5 columns
- Responsive grid gaps

### Footer
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 4 columns
- Stacked social icons on mobile

## Performance Optimizations

1. **Next.js Image Component**: Automatic image optimization and lazy loading
2. **Tailwind CSS**: Purged unused styles for minimal CSS bundle
3. **Responsive Images**: Multiple image sizes served based on device
4. **Smooth Transitions**: CSS transitions for better UX
5. **Mobile-First Approach**: Base styles for mobile, enhanced for larger screens

## Testing Recommendations

Test the site on:
- iPhone (375px, 390px, 414px)
- iPad (768px, 1024px)
- Desktop (1280px, 1440px, 1920px)

Use browser DevTools to test responsive behavior.
