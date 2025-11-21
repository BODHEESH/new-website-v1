# Color System & Animation Guide

## 🎨 Quick Reference for Developers

### Primary Gradient Combinations

#### Hero Section Gradients
```jsx
// Text gradients
className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400"

// Button gradients
className="bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600"

// Hover overlay
className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500"
```

#### Background Gradients
```jsx
// Soft backgrounds
className="bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30"

// Bold backgrounds
className="bg-gradient-to-br from-primary-900 via-secondary-900 to-primary-800"

// Animated orbs
className="bg-gradient-to-br from-cyan-200/20 to-blue-300/20 rounded-full blur-3xl"
```

---

## ✨ Animation Classes

### Entrance Animations
```jsx
// Fade in
className="animate-fade-in"

// Fade in with upward motion
className="animate-fade-in-up"

// Fade in with downward motion
className="animate-fade-in-down"

// Slide from left
className="animate-slide-in-left"

// Slide from right
className="animate-slide-in-right"

// Scale in
className="animate-scale-in"
```

### Continuous Animations
```jsx
// Floating effect
className="animate-float"

// Slow pulse
className="animate-pulse-slow"

// Glow effect
className="animate-glow"
```

### Staggered Animations
```jsx
// Use inline styles for delays
style={{animationDelay: '0.1s'}}
style={{animationDelay: '0.2s'}}
style={{animationDelay: '0.3s'}}
```

---

## 🎯 Common Patterns

### Glassmorphism Card
```jsx
<div className="bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-100 hover:border-cyan-200">
  {/* Content */}
</div>
```

### Gradient Button
```jsx
<button className="group relative bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white px-10 py-4 rounded-full hover:shadow-glow-lg transition-all duration-500 overflow-hidden">
  <span className="relative z-10">Button Text</span>
  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
</button>
```

### Hover Card Effect
```jsx
<div className="group hover:-translate-y-3 hover:shadow-glow-lg transition-all duration-500">
  {/* Content */}
</div>
```

### Gradient Text
```jsx
<h2 className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
  Gradient Heading
</h2>
```

---

## 🌈 Shadow System

### Glow Shadows
```jsx
// Small glow
className="shadow-glow-sm"

// Medium glow
className="shadow-glow-md"

// Large glow
className="shadow-glow-lg"

// Cyan glow
className="shadow-glow-cyan"

// Purple glow
className="shadow-glow-purple"
```

---

## 🎨 Color Usage Guidelines

### When to Use Each Color

#### Cyan (#06b6d4)
- Primary CTAs
- Active states
- Progress indicators
- Technology-focused elements

#### Blue (#0ea5e9)
- Secondary CTAs
- Links
- Information elements
- Trust indicators

#### Purple (#a855f7)
- Premium features
- Innovation highlights
- Creative elements
- Accent details

#### Pink (#ec4899)
- Hover states
- Special offers
- Attention grabbers
- Decorative accents

#### Orange (#f97316)
- Warnings
- Energy elements
- Call-to-action accents
- Limited use highlights

---

## 📐 Spacing & Sizing

### Section Padding
```jsx
// Standard section
className="py-20 md:py-28"

// Compact section
className="py-16 md:py-24"
```

### Container Widths
```jsx
// Standard container
className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"

// Narrow container
className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
```

### Gap Spacing
```jsx
// Small gap
className="gap-6 md:gap-8"

// Medium gap
className="gap-8 md:gap-10"

// Large gap
className="gap-12 lg:gap-20"
```

---

## 🎭 Hover Effects

### Scale & Translate
```jsx
// Lift effect
className="hover:-translate-y-3 hover:scale-105"

// Subtle lift
className="hover:-translate-y-2"

// Scale only
className="hover:scale-110"
```

### Opacity Transitions
```jsx
// Fade in on hover
className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"

// Fade out on hover
className="opacity-100 group-hover:opacity-0 transition-opacity duration-300"
```

---

## 🔄 Transition Durations

### Standard Durations
- **Fast**: 300ms - Quick interactions
- **Medium**: 500ms - Standard transitions
- **Slow**: 700ms - Smooth, noticeable changes
- **Very Slow**: 1000ms+ - Dramatic effects

### Usage
```jsx
// Fast
className="transition-all duration-300"

// Medium
className="transition-all duration-500"

// Slow
className="transition-all duration-700"
```

---

## 🎪 Decorative Elements

### Accent Lines
```jsx
<div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mb-6 rounded-full" />
```

### Floating Orbs
```jsx
<div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-200/20 to-blue-300/20 rounded-full blur-3xl animate-pulse-slow" />
```

### Corner Decorations
```jsx
<div className="absolute bottom-6 right-6 w-16 h-16 border-r-2 border-b-2 border-cyan-400/50 rounded-br-3xl" />
```

---

## 📱 Responsive Utilities

### Typography Scale
```jsx
// Headings
className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl"

// Body text
className="text-base md:text-lg lg:text-xl"

// Small text
className="text-sm md:text-base"
```

### Padding Scale
```jsx
// Horizontal padding
className="px-4 sm:px-6 lg:px-8"

// Vertical padding
className="py-3 md:py-4 lg:py-5"
```

---

## 🎯 Best Practices

### DO ✅
- Use gradient combinations consistently
- Apply animations with purpose
- Maintain proper contrast ratios
- Test on multiple devices
- Use semantic HTML
- Keep animations smooth (60fps)

### DON'T ❌
- Overuse animations
- Mix too many gradient directions
- Ignore accessibility
- Use animations on critical content
- Forget mobile optimization
- Neglect performance

---

## 🔧 Customization

### Adding New Gradients
Edit `tailwind.config.js`:
```js
backgroundImage: {
  'gradient-custom': 'linear-gradient(135deg, #color1 0%, #color2 100%)',
}
```

### Adding New Animations
Edit `tailwind.config.js`:
```js
animation: {
  'custom-animation': 'keyframeName 2s ease-in-out infinite',
},
keyframes: {
  keyframeName: {
    '0%': { /* styles */ },
    '100%': { /* styles */ },
  },
}
```

---

## 📚 Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [CSS Gradient Generator](https://cssgradient.io/)
- [Color Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Animation Performance Guide](https://web.dev/animations-guide/)

---

**Quick Tip**: Use browser DevTools to test animations and adjust timing for the best user experience!
