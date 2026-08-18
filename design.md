# KaiSol Romance Resort - Design System

## Brand Identity

- **Name:** KaiSol Romance Resort
- **Location:** Sahl Hasheesh, Egypt
- **Type:** Luxury romance resort hotel
- **Tagline:** "A refined hospitality experience where comfort, elegance, and unforgettable moments come together."

---

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-cream` | `#F5F2ED` | Default page background |
| `--color-warm-beige` | `#EDE8E0` | Alternating section backgrounds |
| `--color-white` | `#FFFFFF` | Card backgrounds, hero overlays |
| `--color-dark-brown` | `#3C3630` | Primary text, headings |
| `--color-body-gray` | `#6B6560` | Body text, descriptions |
| `--color-olive` | `#8B8B6F` | Accent color, buttons, overlines |
| `--color-olive-hover` | `#7A7A60` | Button hover state |
| `--color-dark-bar` | `#1A1816` | Footer bottom bar |
| `--color-light-border` | `#E5E0D8` | Subtle borders, dividers |
| `--color-nav-text` | `#4A4440` | Navigation links |

---

## Typography

### Font Families

| Role | Font | Weight | CSS Variable |
|------|------|--------|-------------|
| Headings (serif) | Cormorant Garamond | 300 (Light), 400 (Regular), 600 (SemiBold) | `--font-heading` |
| Body (sans-serif) | DM Sans | 400 (Regular), 500 (Medium), 600 (SemiBold) | `--font-body` |

### Type Scale

| Element | Font | Size | Weight | Line Height |
|---------|------|------|--------|-------------|
| Page Title (hero) | Cormorant Garamond | 3rem (48px) | 300 | 1.2 |
| Section Heading (large) | Cormorant Garamond | 2.5rem (40px) | 300 | 1.3 |
| Section Heading (medium) | Cormorant Garamond | 2rem (32px) | 300 | 1.3 |
| Card Title | Cormorant Garamond | 1.5rem (24px) | 400 | 1.3 |
| Overline/Eyebrow | DM Sans | 0.875rem | 500 | 1.5 |
| Body Text | DM Sans | 1rem | 400 | 1.7 |
| Navigation | DM Sans | 0.875rem | 500 | 1 |
| Button Text | DM Sans | 0.8125rem | 600 | 1 |

### Font Styles

- Light/thin weight (300) for all major headings
- Italic serif for mission/founding statements
- Uppercase for buttons, overlines, and footer headings

---

## Layout & Spacing

- **Max content width:** 1200px (centered)
- **Section padding:** 80px top/bottom (desktop), 48px (mobile)
- **Grid gutter:** 24px
- **Two-column layout:** 50/50 or 40/60 split

---

## Components

### Header/Navbar
- Sticky top, white/cream background with subtle shadow
- Logo left, nav links center, language switcher + Reserve button right
- Nav links: Home, About Us, Suites & Rooms, Dining, Wellness, Gallery, Accommodation, Exclusive Offers, Events

### Buttons
- **Primary:** Olive/sage bg, white text, rounded-sm, uppercase, tracking-wider
- **Secondary:** Same style with arrow icon

### Cards
- Image on top, text below
- Card title in Cormorant Garamond, description in DM Sans
- Hover: subtle shadow

### Footer
- Three sections: top (logo + newsletter), middle (link columns), bottom (copyright bar)
- Newsletter: email input + Subscribe button
- Link columns: 5 columns with headings and links
- Social icons: Facebook, Instagram, TikTok, LinkedIn
- Bottom bar: dark background, centered copyright text

---

## Site Pages

1. **Home** - Hero with booking widget, dining section, wellness section, gallery preview
2. **About Us** - Hero, founding story, mission statement
3. **Suites & Rooms** - (to be designed)
4. **Dining** - Restaurant listings with horizontal scroll
5. **Wellness** - Spa/wellness experiences with horizontal scroll
6. **Gallery** - Grid/single view toggle, masonry layout
7. **Accommodation** - (to be designed)
8. **Exclusive Offers** - Offer cards with horizontal scroll
9. **Events** - Venue types, event categories

---

## i18n

- **Languages:** English (en), Arabic (ar)
- **Routing:** Sub-path (`/en/...`, `/ar/...`)
- **RTL:** Arabic requires right-to-left layout
- **Default locale:** English
