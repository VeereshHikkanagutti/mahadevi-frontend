# Copilot Instructions for Mahadevi Frontend

## Project Overview
**Mahadevi Frontend** is a React + Vite e-commerce product catalog for industrial supplies (bearings, valves, gaskets, etc.). It's deployed on Vercel with dark mode support and client-side routing.

**Stack**: React 18, React Router v6, Vite, TailwindCSS, Framer Motion, EmailJS, React Hook Form

---

## Architecture Essentials

### Component Structure
- **`src/components/`**: Reusable UI components (Navbar, Footer, ProductCard, DarkModeToggle, etc.)
- **`src/module/`**: Page-level components tied to routes (Home, Products, Contact, QuoteForm, etc.)
- **`src/data/`**: Product catalog data
  - `productCategories.jsx`: Array of 11 categories (valves, bearings, gears, fasteners, gaskets, flanges, instruments, lifting, pipes, safety, tools)
  - `productList/*.jsx`: Individual product arrays with ES6 image imports (e.g., `bearingProducts`, `valveProducts`)

### Critical Patterns

#### 1. **Image Import Strategy** ⚠️
**Problem Solved (Recent)**: Direct image path strings fail in production. Solution: **Always use ES6 imports for images**.

```jsx
// ✅ CORRECT - Used in all product list files
import dgbb from '../../images/products/bearings/dgbb.jpg';
const bearingProducts = [{ id: 'bearing-001', name: '6205 Deep Groove Ball Bearing', image: dgbb }]

// ❌ AVOID - Direct paths don't work in production
image: '/images/products/bearings/dgbb.jpg'  // This breaks in Vite build
```

#### 2. **Product Data Flow**
- Categories stored in `productCategories.jsx` with id, name, and filter link
- Products listed in `src/data/productList/{category}.jsx` with structure: `{ id, name, image, desc? }`
- `Products.jsx` dynamically imports all category product lists and filters by URL query param (`?category=bearings`)
- `ProductCard.jsx` displays product with hover animations and gear icon overlay

#### 3. **Form Handling with EmailJS**
EmailJS credentials are hardcoded in components (credentials visible in Contact.jsx & QuoteForm.jsx):
- Service ID: `service_tvs2kve`
- Contact template ID: `template_3i1utnc`
- Quote template ID: `template_8ftjuot`
- Public key: `n92rcp2adr_GDZLRu`

`QuoteForm.jsx` uses `react-hook-form` with URL params for prefill (`?product=bearing-001`). `Contact.jsx` uses manual state.

#### 4. **Routing Structure**
```
/ → Home
/aboutUs → AboutUs
/products → Products (shows all, filter by ?category=X)
/products/:productId → SubProducts (detail page)
/request-quote → QuoteForm
/our-brands → OurBrands
/success-stories → SuccessStories
/contact → Contact
```

#### 5. **Styling Conventions**
- **Color Palette**: Primary blue `#1F3A5F`, accent orange `#F08000`, light bg `#E6EEF8`
- **TailwindCSS**: Full utility-first (no custom CSS classes except App.css)
- **Dark Mode**: Enabled via `class` strategy in `tailwind.config.js`, toggled in DarkModeToggle, persisted to localStorage
- **Animations**: Framer Motion for complex animations, Tailwind `transition-*` for simple hover/state changes

#### 6. **Custom Hook Pattern**
`useCountUp.js`: Animates numbers using `requestAnimationFrame`. Used in stats sections.

```javascript
const count = useCountUp(1000, 2000); // animates to 1000 over 2 seconds
```

---

## Developer Workflows

### Build & Run
```bash
npm run dev       # Start Vite dev server (HMR enabled)
npm run build     # Build to dist/ for production
npm run preview   # Preview production build locally
npm run lint      # ESLint check
```

### Vercel Deployment
- **Build command**: `echo 'build skipped'` (Vercel auto-runs `npm run build`)
- **Output dir**: `dist/`
- **SPA config**: `vercel.json` sets rewrite rule for client-side routing (all routes → /index.html)

### Adding New Products
1. Create `src/data/productList/newcategory.jsx` with ES6 image imports
2. Add category to `productCategories.jsx`
3. Import in `Products.jsx` and add to category product map
4. Place images in `src/images/products/newcategory/`

---

## Code Quality & Patterns

### ESLint Config
- Uses React plugin with hooks rules (`eslint-plugin-react-hooks`)
- React Refresh plugin enabled

### State Management
- Local component state via `useState` (no Redux/Context in current codebase)
- URL params for filtering (Products page reads `?category=X` from location)
- localStorage for theme persistence (DarkModeToggle)

### Naming Conventions
- Components: PascalCase (`ProductCard.jsx`)
- Files: PascalCase (components, modules) / camelCase (hooks, data)
- Product IDs: kebab-case with category prefix (`bearing-001`)
- Image imports: camelCase (`dgbb`, `ballBearings`)

---

## Gotchas & Important Notes

1. **Don't use relative asset paths** - Import images as modules. Relative paths break in production Vite builds.
2. **Product category IDs** match filenames exactly (bearings → bearingProducts imported from `productList/bearings.jsx`)
3. **EmailJS is NOT secure** - Keys exposed in frontend code. For production, move to backend API.
4. **Dark mode uses class strategy** - Check `tailwind.config.js` and apply `dark:` classes for dark mode support.
5. **`vercel.json` overwrites build command** - Always commit changes to both `package.json` scripts AND `vercel.json`

---

## Key Files Reference
- [package.json](package.json) - Dependencies & scripts
- [src/App.jsx](src/App.jsx) - Route definitions
- [src/data/productCategories.jsx](src/data/productCategories.jsx) - Category list
- [src/components/ProductCard.jsx](src/components/ProductCard.jsx) - Product display template
- [src/module/Products.jsx](src/module/Products.jsx) - Category filter & product rendering (434 lines - complex logic)
- [tailwind.config.js](tailwind.config.js) - Color & dark mode config
