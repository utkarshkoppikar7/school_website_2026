# SKVM School Website — Claude Sonnet Prompt (Final)

> Build a **completely new** website for **Sheela Koppikar Vidya Mandir** using **Next.js 15 + Tailwind CSS v4 + shadcn/ui**.
> Split into **Part 1: Design System** and **Part 2: Full Website**.
> All images use **placeholders**. Admission year: **2027-28**.

---

## How to Use

| Step | What to Do |
|------|-----------|
| 1 | Open a **new Claude Sonnet** conversation |
| 2 | Paste **Part 1** → let Claude generate the design system + project setup |
| 3 | In the **same conversation**, paste **Part 2** → Claude builds all 8 pages |
| 4 | If Claude stops mid-output, say **"Continue from where you left off"** |

> [!TIP]
> You can also paste both parts together if using Claude with a large context window. The prompts are self-contained and clearly separated.

---

## Part 1 — Project Setup + Design System

> Copy everything inside the fenced block below.

````
You are building a brand-new, premium school website from scratch. Do NOT reference or copy any existing website design. This should feel fresh, modern, and distinctive.

⚠️ CRITICAL DESIGN PHILOSOPHY: This is a PRIMARY SCHOOL for children aged 3–11. The design must serve TWO audiences simultaneously:
1. **PARENTS** — who need to feel TRUST, professionalism, and confidence that their child is in good hands
2. **CHILDREN** — who should see the website and feel EXCITED, PROUD, and that this school is FUN

The goal is: "A world-class school that kids brag about to their friends." Think Google's playful brand energy meets a prestigious institution's trustworthiness.

=== PROJECT IDENTITY ===

School: Sheela Koppikar Vidya Mandir (SKVM)
Founded: 1986 (formerly "Disneyland School")
Tagline: "Building Leaders With Heart & Soul"
Grades: Nursery to 5th Standard (ages 3–11)
Location: Dharwad, Karnataka, India
Students: 500+

The logo is a bold red emblem with stylized human figures rising from an open book, symbolizing growth, aspiration, and knowledge. The name is in a decorative red serif font.

=== TECH STACK ===

- **Framework**: Next.js 15 (App Router, TypeScript)
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui (copy-paste components via CLI)
- **Fonts**: Google Fonts — **Playfair Display** (section headings, serif elegance for parent-trust) + **Baloo 2** (display/hero headings, rounded & friendly for kid-appeal) + **DM Sans** (body text, clean sans-serif)
- **Icons**: Lucide React (shadcn default)
- **Animations**: Framer Motion
- **Forms**: react-hook-form + zod (via shadcn Form component)
- **Images**: next/image — but use colored placeholder divs for now (explained below)

=== DESIGN DIRECTION — COMPLETELY NEW ===

This is NOT a traditional red-and-white school template. It's also NOT a cold corporate site. Think of it as a **joyful, colorful, modern school experience** that feels premium. Design references: Google Education, Duolingo's playful UI, Montessori school websites from Scandinavia, Apple Education pages, and the best children's museum websites.

**Design Personality — The Dual Identity:**

🎨 **FOR KIDS (Joy & Pride):**
- COLORFUL — use the full vibrant accent palette liberally (not just red). Each section can have its own color personality
- Rounded, bubbly shapes — generous border-radius (rounded-2xl, rounded-3xl), pill-shaped badges, soft blob shapes
- Wavy SVG section dividers instead of straight lines — creates a playful, organic flow
- Hand-drawn style doodle illustrations as decorative elements (stars, squiggles, arrows, underlines) using simple SVG/CSS
- Playful micro-animations — elements that bounce, wiggle, or float gently
- Fun iconography — colorful icons that feel alive, not corporate
- Sections that feel like different "worlds" (each with its own accent color family)
- The hero should make a child say "WOW, that's MY school!"

🏛️ **FOR PARENTS (Trust & Prestige):**
- Clean typography hierarchy with a prestigious serif font for authority
- Generous whitespace — content breathes, nothing feels cluttered
- Layered depth — cards float above backgrounds with refined shadows
- Professional structure — clear information architecture, easy navigation
- Warm neutral base (cream/stone) grounds the colorful elements
- Stats and credentials prominently displayed
- Faculty sections feel professional and trustworthy

**How to balance both:**
- The STRUCTURE and TYPOGRAPHY serve parents (clean, professional, serif headings)
- The COLOR, SHAPE, and ANIMATION serve children (vibrant, rounded, playful)
- Decorative doodles and shapes live in the background/periphery — they add personality without undermining professionalism
- Each program/grade section uses its own accent color — this makes the site feel alive and diverse
- Navigation and footer remain clean and professional
- Content sections (hero, programs, gallery) are where the playfulness shines

**What to AVOID:**
- ❌ Clip-art or cheap cartoon-style graphics
- ❌ A monotone, single-color design — USE THE FULL COLOR PALETTE
- ❌ Sterile, corporate coldness — this is a SCHOOL, it should feel ALIVE
- ❌ Overwhelming busyness — playful ≠ cluttered; every element needs breathing room
- ❌ Cookie-cutter section layouts that repeat the same pattern
- ❌ Ignoring either audience — a fancy design that kids find boring is a failure, and a fun design that parents don't trust is also a failure

=== COLOR PALETTE ===

Derive everything from the logo's red but take it in a more refined direction:

```typescript
const colors = {
  // Brand — a deeper, more refined crimson (not a generic bright red)
  brand: {
    50:  '#FFF5F5',
    100: '#FFE3E3',
    200: '#FFC9C9',
    300: '#FFA8A8',
    400: '#FF8787',
    500: '#E03131',  // PRIMARY — slightly deeper than pure red, feels more premium
    600: '#C92A2A',  // Hover / active
    700: '#A51111',  // Dark emphasis
    800: '#862020',
    900: '#661414',
  },

  // Stone — warm neutral grays (NOT cool blue-grays)
  stone: {
    50:  '#FAFAF9',  // Page background
    100: '#F5F5F4',  // Section alternate bg
    200: '#E7E5E4',  // Borders
    300: '#D6D3D1',  // Muted borders
    400: '#A8A29E',  // Placeholder text
    500: '#78716C',  // Secondary text
    600: '#57534E',  // Body text
    700: '#44403C',  // Strong body text
    800: '#292524',  // Headings
    900: '#1C1917',  // Near-black
  },

  // 🎨 VIBRANT Accent palette — use BOLDLY across sections, not sparingly!
  // Each program grade and section gets its own color to create a rich, diverse experience
  accent: {
    amber:   { DEFAULT: '#F59E0B', light: '#FEF3C7', soft: '#FFFBEB' },  // Awards, stars, KG
    emerald: { DEFAULT: '#10B981', light: '#D1FAE5', soft: '#ECFDF5' },  // Nature, growth, Nursery
    sky:     { DEFAULT: '#0EA5E9', light: '#BAE6FD', soft: '#F0F9FF' },  // Tech, learning, Primary I
    violet:  { DEFAULT: '#8B5CF6', light: '#DDD6FE', soft: '#F5F3FF' },  // Creativity, arts, Primary II
    rose:    { DEFAULT: '#F43F5E', light: '#FECDD3', soft: '#FFF1F2' },  // Highlights, events
    orange:  { DEFAULT: '#F97316', light: '#FED7AA', soft: '#FFF7ED' },  // Energy, sports
    teal:    { DEFAULT: '#14B8A6', light: '#99F6E4', soft: '#F0FDFA' },  // Calm, library, reading
  },

  // Surfaces
  surface: {
    cream:    '#FFFBF5',  // Warm white for cards
    blush:    '#FFF5F5',  // Very subtle red tint
    paper:    '#FAFAF9',  // Base page background
    mint:     '#ECFDF5',  // Fresh green tint (used in Nursery sections)
    lavender: '#F5F3FF',  // Purple tint (used in arts/creativity sections)
    sky:      '#F0F9FF',  // Blue tint (used in technology sections)
    peach:    '#FFF7ED',  // Warm orange tint (used in sports sections)
  }
}
```

=== TYPOGRAPHY ===

```
Three-font system for maximum personality:

Display Font: "Baloo 2", cursive
  → Rounded, bubbly, joyful — this is the KID-FACING font
  → Used for: Hero headings, fun callout text, CTA banners, program titles
  → Makes children feel this school is FUN and modern
  → Weights: 500 (medium), 700 (bold), 800 (extrabold)

Heading Font: "Playfair Display", Georgia, serif
  → Classical, prestigious, editorial — this is the PARENT-FACING font
  → Used for: Section headings (h2), blockquotes, leadership messages, formal sections
  → Makes parents feel this school is TRUSTWORTHY and established
  → Weights: 400 (regular), 700 (bold)

Body Font: "DM Sans", system-ui, sans-serif
  → Modern, highly legible, clean — the NEUTRAL workhorse
  → Used for: body text, buttons, navigation, labels, form inputs, descriptions
  → Weights: 400, 500, 600, 700

Font Usage Rules:
  - Hero headline on homepage → Baloo 2 (fun, big, kids love it)
  - Inner page hero headings → Baloo 2 (consistent fun feel)
  - Section headings (h2) on content pages → Playfair Display (trust)
  - Program/grade card titles → Baloo 2 (kids relate to it)
  - Faculty names, quotes, formal text → Playfair Display (prestige)
  - Everything else → DM Sans

Scale (fluid with clamp):
  display:  clamp(3rem, 6vw, 5rem)      → Hero headline (Baloo 2)
  h1:       clamp(2.25rem, 4vw, 3.5rem)  → Page titles (Baloo 2)
  h2:       clamp(1.75rem, 3vw, 2.5rem)  → Section headings (Playfair Display)
  h3:       clamp(1.25rem, 2vw, 1.75rem) → Card titles (Baloo 2 or DM Sans)
  h4:       clamp(1.1rem, 1.5vw, 1.25rem)→ Small headings (DM Sans)
  body-lg:  1.125rem                      → Lead paragraphs
  body:     1rem                          → Default
  sm:       0.875rem                      → Captions
  xs:       0.75rem                       → Labels, badges
```

=== IMAGE PLACEHOLDERS ===

Since we don't have real photos yet, create a reusable `<Placeholder />` component:

```tsx
// src/components/ui/placeholder.tsx
interface PlaceholderProps {
  label: string               // e.g., "School Building", "Principal Photo"
  aspectRatio?: string        // e.g., "16/9", "1/1", "4/3"
  className?: string
  icon?: React.ReactNode      // optional Lucide icon
  colorScheme?: 'red' | 'emerald' | 'sky' | 'violet' | 'amber' | 'orange' | 'teal'
}

// Renders a rounded div with:
// - Background: uses the colorScheme's soft/light color (e.g., emerald-soft for green tint)
//   Default colorScheme is 'red' → brand-100 background
// - A centered Lucide icon (default: ImageIcon) in the colorScheme's DEFAULT color
// - The label text below the icon in the matching muted color, text-sm
// - The aspectRatio applied via Tailwind's aspect-ratio utility
// - Rounded corners: rounded-2xl (generous, kid-friendly)
// - A subtle dashed border in the colorScheme's light color (gives a "fill me in" feel)
// - Gentle CSS animation: the icon has a slow float/bob animation (makes placeholders feel alive)
```

Use this `<Placeholder />` everywhere an image would go. The label should describe what the real image will be (e.g., "Hero: Children Learning", "Principal Portrait", "Science Lab"). Vary the colorScheme across the site to keep things colorful.

=== SHADCN/UI COMPONENTS TO INSTALL ===

Install these shadcn components — they map directly to website features:

```bash
npx shadcn@latest init
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add badge
npx shadcn@latest add accordion
npx shadcn@latest add tabs
npx shadcn@latest add dialog
npx shadcn@latest add sheet
npx shadcn@latest add form
npx shadcn@latest add input
npx shadcn@latest add textarea
npx shadcn@latest add select
npx shadcn@latest add separator
npx shadcn@latest add navigation-menu
npx shadcn@latest add carousel
npx shadcn@latest add avatar
npx shadcn@latest add tooltip
npx shadcn@latest add skeleton
```

**Component → Feature mapping:**

| shadcn Component | Used For |
|-----------------|----------|
| `Button` | All CTAs, form submits, navigation actions |
| `Card` | Program cards, facility cards, value cards, stat cards, faculty cards |
| `Badge` | Age range tags, grade labels, category filters |
| `Accordion` | Admissions FAQ, expandable content |
| `Tabs` | Gallery category filters, academics grade-wise view |
| `Dialog` | Gallery lightbox, image preview |
| `Sheet` | Mobile navigation drawer |
| `Form + Input + Textarea + Select` | Admission inquiry form, contact form |
| `Separator` | Visual dividers between content |
| `NavigationMenu` | Desktop navigation with dropdowns |
| `Carousel` | Hero image slider, testimonial slider, gallery featured row |
| `Avatar` | Faculty profile photos |
| `Tooltip` | Icon tooltips, info hints |
| `Skeleton` | Loading states for images and content |

=== CUSTOM COMPONENTS TO BUILD (on top of shadcn) ===

These are NOT in shadcn — build them as custom components using shadcn primitives + Tailwind:

**a) `SectionWrapper`** — Wraps every page section
```
Props: className, background ('default' | 'alternate' | 'dark' | 'brand'), contained (boolean), id
- default bg: surface-paper
- alternate: stone-100
- dark: stone-900 (with white text)
- brand: brand-500 (with white text)
- contained: adds max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
- Applies consistent vertical padding: py-20 lg:py-28
```

**b) `SectionHeader`** — Title + subtitle for sections
```
Props: eyebrow (small red uppercase text above title), title, subtitle, alignment ('left' | 'center')
- Eyebrow: text-xs uppercase tracking-[0.2em] font-semibold text-brand-500, DM Sans
- Title: Playfair Display, text-h2 size, stone-900
- Subtitle: DM Sans, text-body-lg, stone-500, max-w-2xl
- If center-aligned, subtitle gets mx-auto
- Red decorative bar: 48px wide, 3px tall, rounded-full, brand-500, between eyebrow and title
```

**c) `StatCard`** — For numbers/achievements
```
Props: icon (Lucide), value (string), label (string)
- Centered layout
- Icon in a circular brand-100 background, brand-500 color
- Value: Playfair Display, text-3xl, font-bold, stone-900
- Label: DM Sans, text-sm, stone-500
- Hover: subtle lift (translateY -4px) + shadow increase
- Use shadcn Card as base
```

**d) `FeatureCard`** — For "Why Choose Us" type content
```
Props: icon (Lucide), title, description, accentColor (optional)
- Icon in a rounded-lg square (48x48), accent background at 10% opacity, icon in full accent color
- Title: DM Sans, font-semibold, stone-800
- Description: DM Sans, text-sm, stone-500
- Hover: border-left becomes 3px solid accent color
- Use shadcn Card as base
```

**e) `TimelineItem`** — For admission process steps
```
Props: step (number), title, description, icon (Lucide), isLast (boolean)
- Vertical timeline with a colored dot connected by a line
- Dot: 40px circle, brand-500 bg, white step number or icon inside
- Line: 2px brand-200, connects to next step (hidden if isLast)
- Content: title in font-semibold, description in stone-500
```

**f) `HeroSection`** — Shared hero for inner pages
```
Props: title, subtitle, breadcrumbs (array of {label, href})
- Background: stone-900 with subtle radial gradient (brand-900 at 20% opacity)
- Full width, py-24 lg:py-32
- White text
- Breadcrumbs use "/" separator, last item is current page (white), others are stone-400 with links
- Title: Playfair Display, display size, font-bold, white
- Subtitle: DM Sans, text-body-lg, stone-300
```

=== ANIMATION SYSTEM ===

Create `src/lib/motion.ts`:

```typescript
// Framer Motion variants — use with <motion.div variants={...}>

// --- PROFESSIONAL animations (parent-facing sections) ---

export const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

export const fadeInDown = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

export const fadeInLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}

export const fadeInRight = {
  hidden: { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } }
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 }
  }
}

// --- PLAYFUL animations (kid-facing sections like hero, programs, gallery) ---

export const bounceIn = {
  hidden: { opacity: 0, scale: 0.3 },
  visible: {
    opacity: 1, scale: 1,
    transition: { type: 'spring', stiffness: 260, damping: 20, duration: 0.6 }
  }
}

export const wiggle = {
  animate: {
    rotate: [0, -3, 3, -3, 0],
    transition: { duration: 0.5, ease: 'easeInOut' }
  }
}

export const float = {
  animate: {
    y: [0, -8, 0],
    transition: { duration: 3, ease: 'easeInOut', repeat: Infinity }
  }
}

export const gentlePulse = {
  animate: {
    scale: [1, 1.03, 1],
    transition: { duration: 2, ease: 'easeInOut', repeat: Infinity }
  }
}

export const colorfulStagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 }  // slightly slower stagger for more drama
  }
}

export const popIn = {
  hidden: { opacity: 0, scale: 0.5, rotate: -10 },
  visible: {
    opacity: 1, scale: 1, rotate: 0,
    transition: { type: 'spring', stiffness: 200, damping: 15 }
  }
}

// Use with whileInView on sections:
// <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
//
// Use playful animations (bounceIn, popIn) for: hero elements, program cards, gallery items, CTA buttons
// Use professional animations (fadeInUp, scaleIn) for: faculty sections, leadership, forms, contact
```

=== LAYOUT PATTERNS ===

**Bento Grid** — Use for "Why Choose Us", facilities, etc:
```
A grid where items have varying spans:
- Item 1: col-span-2 row-span-2 (large featured item)
- Items 2-3: col-span-1 (regular items)
- Item 4: col-span-2 (wide item)
This creates visual interest and breaks the monotony of uniform grids.
```

**Split Editorial** — Use for Vision/Mission, About sections:
```
Two-column layout where:
- One column is 55% width (text), the other 45% (image placeholder)
- The image placeholder overlaps the section boundary slightly (negative margin)
- OR the text column has generous padding-left creating an asymmetric feel
Alternate the image side (left/right) between sections.
```

**Card Stack** — Use for faculty, testimonials:
```
Cards arranged with slight overlap or offset:
- Each card rotated -1deg to 1deg
- Or stacked with increasing translateX
- Creates a physical, tangible feel
```

=== DECORATIVE ELEMENTS SYSTEM ===

Create `src/components/ui/decorations.tsx` — a set of playful decorative elements:

**a) `WaveDivider`** — Replaces straight-line section breaks
```
Props: color (hex), flip (boolean), className
- An SVG wave shape that spans full width
- About 60-80px tall
- The wave color matches the NEXT section's background
- flip=true rotates it 180deg (for bottom-of-section use)
- Creates organic, playful transitions between sections instead of harsh lines
- Use at least 3 different wave shapes (variations) to avoid repetition
```

**b) `DoodleDecoration`** — Hand-drawn style SVG accents
```
Props: type ('star' | 'squiggle' | 'circle' | 'arrow' | 'underline' | 'dots' | 'sparkle' | 'heart' | 'book'), color, size, className
- Simple SVG illustrations in a hand-drawn style (use stroke, not fill, with stroke-linecap: round)
- Positioned absolutely in section backgrounds or near headings
- Low opacity (0.15-0.3) so they don't compete with content
- Gently animated (float or slow rotate)
- Example uses:
  - Stars scattered in the hero background
  - A squiggle underline below the hero tagline (instead of a plain line)
  - Dots pattern behind program cards
  - A pencil doodle near the academics heading
  - Hearts near the values section
  - Book doodle near the library facility card
```

**c) `FloatingShape`** — Abstract geometric shapes for backgrounds
```
Props: shape ('circle' | 'blob' | 'ring' | 'triangle'), color, size, className
- Absolute-positioned decorative shapes
- Very low opacity (0.05-0.1) — they add color without distraction
- Animated with the 'float' variant (gentle bobbing)
- Different accent colors per section
- These make sections feel ALIVE and colorful without being busy
- Place 2-3 per section in different corners/positions
```

**d) `ColorfulBadge`** — Enhanced badge for program grades
```
Props: text, color, variant ('solid' | 'soft' | 'outline')
- Pill-shaped (rounded-full), slightly larger than shadcn Badge
- 'solid': colored bg + white text
- 'soft': light color bg + dark color text
- 'outline': transparent bg + colored border + colored text
- Used for: age ranges, grade levels, category tags
- These make filtering and categorization feel fun and colorful
```

=== FILE STRUCTURE ===

```
src/
├── app/
│   ├── layout.tsx                 # Root layout (fonts, metadata, navbar, footer)
│   ├── page.tsx                   # Home
│   ├── about/page.tsx
│   ├── vision-mission/page.tsx
│   ├── academics/page.tsx
│   ├── faculty/page.tsx
│   ├── gallery/page.tsx
│   ├── admissions/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── ui/                        # shadcn components (auto-generated)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── ... (all shadcn components)
│   │   ├── placeholder.tsx        # Custom image placeholder
│   │   ├── decorations.tsx        # WaveDivider, DoodleDecoration, FloatingShape
│   │   └── colorful-badge.tsx     # Enhanced colorful badge
│   ├── layout/
│   │   ├── navbar.tsx             # Site navigation
│   │   ├── footer.tsx             # Site footer
│   │   └── back-to-top.tsx        # Floating scroll-to-top button
│   └── sections/                  # Page-specific section components
│       ├── home/
│       │   ├── hero.tsx
│       │   ├── stats-bar.tsx
│       │   ├── welcome.tsx
│       │   ├── programs.tsx
│       │   ├── why-choose-us.tsx
│       │   ├── gallery-preview.tsx
│       │   ├── cta-banner.tsx
│       │   └── contact-preview.tsx
│       ├── about/
│       ├── academics/
│       ├── admissions/
│       ├── faculty/
│       ├── gallery/
│       └── contact/
├── lib/
│   ├── data.ts                    # All school data (single source of truth)
│   ├── motion.ts                  # Framer Motion variants
│   └── utils.ts                   # Utility functions (cn helper from shadcn)
└── styles/
    └── globals.css                # Tailwind directives, font imports, custom CSS
```

=== GENERATE THE FOLLOWING FILES ===

1. `package.json` with all dependencies
2. `tailwind.config.ts` with full custom theme (colors, fonts, spacing)
3. `src/styles/globals.css` — Tailwind directives + Google Fonts import + any custom CSS
4. `src/app/layout.tsx` — Root layout with fonts loaded, metadata, Navbar, Footer
5. `src/lib/data.ts` — Complete school data object (copy from the data below)
6. `src/lib/motion.ts` — All Framer Motion variants
7. `src/components/ui/placeholder.tsx` — Image placeholder component (with color schemes)
8. `src/components/ui/decorations.tsx` — WaveDivider, DoodleDecoration, FloatingShape
9. `src/components/ui/colorful-badge.tsx` — Enhanced colorful badges
10. `src/components/layout/navbar.tsx` — Full responsive navbar using shadcn NavigationMenu + Sheet
11. `src/components/layout/footer.tsx` — Full footer
12. `src/components/layout/back-to-top.tsx`
13. All custom section components listed in the file structure
14. Reusable components: SectionWrapper, SectionHeader, StatCard, FeatureCard, TimelineItem, HeroSection

=== SCHOOL DATA (for src/lib/data.ts) ===

```typescript
export const schoolData = {
  name: "Sheela Koppikar Vidya Mandir",
  shortName: "SKVM",
  tagline: "Building Leaders With Heart & Soul",
  formerName: "formerly Disneyland School",
  description: "A premier educational institution with 37 years of excellence, committed to nurturing young minds through innovative teaching methodologies, comprehensive curricula, and holistic development programs.",
  founded: 1986,
  yearsOfExcellence: "39+",
  studentCount: "500+",
  grades: "Nursery to 5th Standard",
  medium: "English Medium",
  curriculum: "Curriculum with focus on Education while having fun",

  principal: {
    name: "Mrs. Neeta Koppikar",
    title: "Principal",
    message: "We at SKVM provide a conducive and loving atmosphere to bring out the best in every child. Each child is unique to us.",
  },

  chiefAcademicOfficer: {
    name: "Mrs. Unnati Palankar",
    title: "Chief Academic Officer",
    message: "This school has played a significant role in shaping who I am today. More than anything, I aspire to provide students with the same nurturing upbringing that I experienced here.",
  },

  vision: "To be a leading institution in providing quality education and fostering an environment of intellectual, emotional, and social growth, preparing students to be responsible global citizens.",

  mission: "To provide a stimulating learning environment with a technological orientation, which maximizes individual potential and ensures that students of all ability levels are well-equipped to meet the challenges of education, work, and life.",

  facilities: [
    { name: "Computer Lab", description: "Equipped with the latest technology for digital learning", icon: "Monitor" },
    { name: "Library", description: "Well-stocked library fostering a love for reading", icon: "BookOpen" },
    { name: "Sports Ground", description: "Spacious playground for physical development", icon: "Trophy" },
    { name: "Art & Music Rooms", description: "Dedicated spaces for creative expression", icon: "Palette" },
    { name: "Transportation", description: "Safe and reliable bus service across Dharwad", icon: "Bus" },
  ],

  programs: [
    {
      title: "Nursery & KG",
      grades: "Nursery, LKG, UKG",
      ages: "3–5 years",
      description: "Play-based learning through sensory activities, storytelling, music, and guided exploration. Building the foundation for curiosity.",
      accent: "emerald",
      icon: "Sprout",
    },
    {
      title: "Primary I",
      grades: "1st & 2nd Standard",
      ages: "6–7 years",
      description: "Foundational literacy and numeracy with creative arts integration. Children learn to read, write, and think critically.",
      accent: "sky",
      icon: "BookOpen",
    },
    {
      title: "Primary II",
      grades: "3rd & 4th Standard",
      ages: "8–9 years",
      description: "Inquiry-based learning with deeper science exploration, environmental studies, and collaborative projects.",
      accent: "violet",
      icon: "Microscope",
    },
    {
      title: "Primary III",
      grades: "5th Standard",
      ages: "10–11 years",
      description: "Leadership development, project-based learning, and preparation for the transition to middle school.",
      accent: "amber",
      icon: "Rocket",
    },
  ],

  admissions: {
    year: "2027-28",
    process: "Online application followed by interaction session",
    documents: [
      "Birth Certificate",
      "Previous School Transfer Certificate (if applicable)",
      "Passport Size Photographs (4 copies)",
      "Aadhar Card Copy (Child & Parent)",
    ],
    dates: {
      applicationStart: "January 1, 2027",
      applicationDeadline: "May 1, 2027",
      interactionDates: "May 15, 2027",
    },
    steps: [
      { title: "Inquiry", description: "Visit the school or contact us to learn more" },
      { title: "Application", description: "Fill out the admission inquiry form online" },
      { title: "Interaction", description: "Parent & child meet with our faculty team" },
      { title: "Confirmation", description: "Receive admission confirmation and complete fee payment" },
      { title: "Welcome", description: "Attend orientation and receive your welcome kit" },
    ],
    faq: [
      { q: "What is the minimum age for Nursery admission?", a: "Children must be 3 years old by June 1st of the admission year." },
      { q: "Is there an entrance test?", a: "There is no formal test. We conduct a friendly interaction session with the child and parents." },
      { q: "What are the school timings?", a: "School operates from 8:30 AM to 3:00 PM, Monday to Saturday." },
      { q: "Does the school provide transportation?", a: "Yes, we have a fleet of buses covering all major areas of Dharwad." },
      { q: "What is the teacher-student ratio?", a: "We maintain a healthy ratio to ensure individual attention for every student." },
      { q: "Can I visit the school before applying?", a: "Absolutely! We encourage parents to schedule a campus visit. Contact us to book a tour." },
    ],
  },

  contact: {
    phone: "+91 9448915287",
    email: "principaldisneylandschool@gmail.com",
    address: {
      line1: "SKVM School, Hubli Dharwad Main Road",
      line2: "Near Ganapati Temple, Near NTTD",
      city: "Dharwad",
      state: "Karnataka",
      pincode: "580001",
      country: "India",
    },
    fullAddress: "SKVM School, Hubli Dharwad Main Road, near Ganapati Temple, Dharwad, Karnataka 580001",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3845.721494842876!2d75.0109059!3d15.4510803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8d2e5e5d4f5b1%3A0x4b3e5e5d4f5b1!2sSheela%20Koppikar%20Vidya%20Mandir!5e0!3m2!1sen!2sin!4v1678886400000!5m2!1sen!2sin",
    googleMapsUrl: "https://maps.app.goo.gl/AW7j9bGUPaNnTxJv6",
    social: {
      instagram: { url: "https://www.instagram.com/skvm_dharwad/", handle: "@skvm_dharwad" },
      youtube: { url: "https://www.youtube.com/@SheelaKoppikarVidyaMandira", handle: "@SheelaKoppikarVidyaMandira" },
    },
  },

  seo: {
    title: "Sheela Koppikar Vidya Mandir (SKVM) — Premier School in Dharwad",
    description: "SKVM offers 39+ years of excellence in education with modern facilities, experienced faculty, and holistic development. Admissions open for 2027-28.",
    keywords: "SKVM, Sheela Koppikar Vidya Mandir, school Dharwad, best primary school Karnataka, admissions 2027, English medium school Dharwad",
  },

  whyChooseUs: [
    { title: "Experienced & Caring Teachers", description: "Our faculty brings decades of combined experience with a nurturing approach", icon: "Heart" },
    { title: "Activity-Based Curriculum", description: "Learning through play, experiments, art, and hands-on exploration", icon: "Lightbulb" },
    { title: "Safe & Green Campus", description: "CCTV-monitored, child-safe environment with open green spaces", icon: "ShieldCheck" },
    { title: "Smart Classrooms", description: "Technology-integrated learning with modern teaching aids", icon: "Monitor" },
    { title: "Holistic Development", description: "Dance, music, art, sports — nurturing the whole child", icon: "Sparkles" },
    { title: "Parent Partnership", description: "Regular communication, PTMs, and an open-door policy", icon: "Users" },
  ],

  values: [
    { title: "Heart", description: "Compassion and empathy in everything we do", icon: "Heart" },
    { title: "Soul", description: "Deep commitment to holistic, values-based education", icon: "Flame" },
    { title: "Excellence", description: "Striving for the best in academics and character", icon: "Award" },
    { title: "Community", description: "Building bonds between students, parents, and teachers", icon: "Users" },
  ],
} as const
```

Now generate:
1. Complete project setup (package.json, tailwind.config.ts, globals.css, root layout)
2. The data file and motion variants file
3. The Placeholder component
4. Navbar (using shadcn NavigationMenu for desktop + Sheet for mobile hamburger menu)
5. Footer
6. Back-to-top button
7. All reusable custom components (SectionWrapper, SectionHeader, StatCard, FeatureCard, TimelineItem, HeroSection)

Ensure the shadcn theme is customized to use our brand colors and fonts (modify the CSS variables in globals.css that shadcn generates). The shadcn "default" style with our custom colors works best.

In globals.css, also add:
- CSS keyframes for a gentle `float` animation (translateY bob, 3s infinite)
- CSS keyframes for a `wiggle` animation (rotate -3deg to 3deg, used on hover for icons)
- A hand-drawn squiggle underline as an SVG background-image utility class for decorative underlines
- Custom wave SVG clip-paths for the WaveDivider component (at least 3 variations)
- Smooth blob shapes as CSS clip-paths for FloatingShape

The overall feel when ALL these components render together should be: "This is clearly a school for young children, but it's designed with incredible taste and professionalism." Think: if a top design agency was hired by the best primary school in India.
````

---

## Part 2 — All Pages

> Paste this into the **same** Claude conversation after Part 1 is generated.

````
Now build ALL 8 pages for the SKVM website using the design system, shadcn components, and custom components from Part 1. Use the schoolData from src/lib/data.ts for ALL content. Use the <Placeholder /> component for ALL images.

Every page MUST:
- Have proper Next.js metadata export (title, description, Open Graph)
- Use Framer Motion scroll-triggered animations (whileInView, once: true)
- Be fully responsive (mobile-first)
- Use semantic HTML
- Feel visually different from every other page (vary layouts, color accents, grid patterns)
- Use `<WaveDivider />` between sections instead of hard edges (vary the wave shape)
- Include 2-3 `<FloatingShape />` elements per section for colorful background energy
- Use `<DoodleDecoration />` near headings or as section accents (stars, squiggles, etc.)
- Use the playful animations (bounceIn, popIn) for kid-facing sections (hero, programs, gallery, CTA)
- Use the professional animations (fadeInUp, scaleIn) for parent-facing sections (faculty, leadership, contact, forms)
- Vary `<Placeholder />` colorScheme per section (don't use 'red' for everything!)
- Use `<ColorfulBadge />` instead of plain shadcn Badge for age ranges and grade labels

=============================================================
PAGE 1: HOME (src/app/page.tsx)
=============================================================

The homepage makes or breaks parent trust, but it must ALSO make kids excited. This page sets the tone for the entire site.

### Section 1: Hero
- FULL viewport height, edge-to-edge
- Background: a warm gradient from surface-cream to surface-blush, NOT plain white
- **Decorative background elements:**
  - 3-4 `<FloatingShape />` in different accent colors (emerald circle top-right, violet blob bottom-left, amber ring center-right) — very low opacity, gently floating
  - 2-3 `<DoodleDecoration />` — a star near top-left, sparkles near the CTA button, a small book doodle near the bottom
- Layout: Asymmetric. NOT a simple 50/50 split.
  - Left (55%): Content block with generous padding-left (pl-8 lg:pl-16)
    1. Small eyebrow text: "Est. 1986 • Dharwad, Karnataka" — DM Sans, text-xs, uppercase, tracking-widest, stone-400
    2. School name: "Sheela Koppikar Vidya Mandir" — **Baloo 2** (NOT Playfair!), display size, stone-900, font-extrabold. Each word on its own line for dramatic effect. This should feel FUN and BOLD, not stuffy.
    3. Tagline: "Building Leaders With Heart & Soul" — DM Sans, text-xl, brand-500, font-medium, mt-4
    4. Instead of a plain line, use a `<DoodleDecoration type="squiggle" />` underline in brand-500 (hand-drawn feel!)
    5. Description paragraph — DM Sans, text-body-lg, stone-500, max-w-lg
    6. Two buttons using shadcn Button:
       - "Admissions Open 2027-28" — variant="default" (uses brand-500 as bg) — size="lg" — add a subtle `gentlePulse` animation to draw attention
       - "Explore Our School" — variant="outline" — size="lg"
    7. Social row: Instagram + YouTube icons as icon buttons, each in their brand color
  - Right (45%): A tall image placeholder (aspect-ratio 3/4, **colorScheme="emerald"**) labeled "Happy children in classroom". Give it rounded-3xl (extra round!) and a very subtle rotation (rotate-2deg). Add a shadow-2xl. Behind it, TWO decorative offset rectangles in different accent colors (brand-100 + sky-light) slightly offset — creates a colorful, layered "Polaroid" effect.
- Mobile: Stack vertically, center-align text, placeholder becomes aspect-16/9
- Animate: use `colorfulStagger` for left content (each item bounces in with `popIn`), `bounceIn` for the image placeholder
- **WaveDivider** at the bottom of hero (wave color = white, to transition into stats bar)

### Section 2: Stats Bar
- Background: white, with top and bottom border (stone-200)
- A flex row of 4 stat items separated by shadcn Separator (vertical orientation)
- Stats (each stat icon should be in a DIFFERENT accent color):
  1. 🎓 "Nursery – 5th Std" / "Grades Offered" — icon bg: emerald-soft
  2. 📅 "Est. 1986" / "Year Founded" — icon bg: sky-soft
  3. 👨‍👩‍👧 "500+" / "Happy Students" — icon bg: amber-soft
  4. 🏅 "39+" / "Years of Excellence" — icon bg: violet-soft
- Each stat: value in **Baloo 2** text-2xl font-bold stone-900, label in DM Sans text-sm stone-500
- Mobile: 2×2 grid, no separators
- Animate: bounceIn with stagger (playful!)
- **WaveDivider** at bottom (wave color = stone-50, to transition into Welcome)

### Section 3: Welcome
- Background: stone-50
- Layout: Two columns — Text left (60%), Placeholder right (40%)
- Eyebrow: "WELCOME" in red
- Title: "A Legacy of Nurturing Young Minds" — Playfair Display
- Description: Use school description from data
- Below: A shadcn Card with the principal's info:
  - shadcn Avatar placeholder (circular), name, title
  - Blockquote with principal's message
  - Subtle brand-50 background, brand-500 left border (4px)
- Link: "More About Our Story →" (text link with arrow, brand-500 color, hover underline)
- The image placeholder on the right should be rounded-2xl, aspect-4/3, labeled "Children in classroom"

### Section 4: Programs
- Background: white
- Eyebrow: "ACADEMICS" in red
- Title: "Programs Tailored for Every Age" — use **Baloo 2** for this title (it's kid-facing!)
- `<DoodleDecoration type="dots" />` pattern in the background of this section, very faint
- Grid: 4 shadcn Cards in a responsive grid (1-col mobile, 2-col tablet, 4-col desktop)
- Each Card (use a DIFFERENT accent color per card — emerald, sky, violet, amber):
  - Top: colored accent stripe (4px, using each program's accent color)
  - The entire card has a faint tinted background matching its accent (accent-soft color)
  - Lucide icon inside a small rounded-xl square with accent-light bg and accent-DEFAULT icon color
  - **ColorfulBadge** with age range (using the program's accent color, variant="soft")
  - Title in **Baloo 2**, font-bold, stone-800
  - Grade info (text-sm, stone-500)
  - Description paragraph
  - Hover: lift (-4px translateY) + shadow-lg transition + the accent stripe grows to 6px
- Animate: `colorfulStagger` wrapping all 4 cards, each card uses `popIn` — this section should feel ALIVE when you scroll to it
- **WaveDivider** at bottom (wave color = stone-100 for next section)

### Section 5: Why Choose SKVM
- Background: stone-100
- Eyebrow: "WHY SKVM"
- Title: "Why Families Trust Us"
- **Bento Grid layout** (NOT a uniform grid):
  - Desktop: 3 columns
    - Item 1: col-span-2 (wide card, larger icon, more padding) — "Experienced & Caring Teachers"
    - Items 2-3: col-span-1 each
    - Item 4: col-span-1
    - Item 5: col-span-2 (wide) — "Holistic Development"
    - Item 6: col-span-1
  - Tablet: 2 columns
  - Mobile: 1 column (all full-width)
- Each item: use FeatureCard component (shadcn Card base)
- Animate: staggerContainer

### Section 6: Gallery Preview
- Background: white
- Eyebrow: "CAMPUS LIFE"
- Title: "Life at SKVM"
- A row of 6 Placeholder image cards in a responsive grid (2-col mobile, 3-col tablet, 6-col desktop... or better: a horizontal scrolling carousel using shadcn Carousel on mobile, grid on desktop)
- Each placeholder: rounded-xl, aspect-square, with hover zoom effect (scale 1.03 with overflow-hidden on parent)
- Click behavior: Opens a shadcn Dialog showing the placeholder larger (simulate lightbox)
- CTA: shadcn Button variant="outline" → "View Full Gallery" linking to /gallery

### Section 7: CTA Banner
- Background: Full-width, a playful DIAGONAL gradient — brand-500 (top-left) to brand-600 (bottom-right), but also add subtle splashes of accent colors (a faint violet blob top-right, faint amber glow bottom-left at 5-10% opacity)
- White text:
  - Title: "Ready to Give Your Child the Best Start?" — **Baloo 2**, text-h1, white, font-extrabold
  - Subtitle: "Admissions for 2027-28 are now open." — DM Sans, text-body-lg, white/80
  - shadcn Button: "Apply Now →" — white bg, brand-500 text — size="lg" — add `gentlePulse` animation
- **Decorative sparkle elements:** scatter 4-5 `<DoodleDecoration type="sparkle" />` and `<DoodleDecoration type="star" />` across the banner in white at 10-15% opacity — makes it feel celebratory
- Animate: fadeInUp for text, bounceIn for the button

### Section 8: Contact Preview
- Background: stone-50
- Two columns:
  - Left: Eyebrow "GET IN TOUCH", Title "We'd Love to Hear From You", then 3 contact info items (phone, email, address) using the ContactInfoItem pattern — each with a Lucide icon in a small stone-100 circle
  - Right: Google Maps embed (iframe) with rounded-xl, shadow-md, and styled border
- CTA: "Contact Us →" link to /contact page

=============================================================
PAGE 2: ABOUT (src/app/about/page.tsx)
=============================================================

### Hero
- Use the shared HeroSection component
- Title: "About SKVM"
- Subtitle: "39 years of building futures, one child at a time"
- Breadcrumbs: Home > About

### Section 1: Our Story
- Editorial split layout (text-heavy)
- Eyebrow: "OUR STORY"
- Title: "From Disneyland School to SKVM"
- Tell the narrative arc: Founded in 1986 as Disneyland School, the institution was born from the vision of creating a school that feels like a second home. Over nearly four decades, it has grown into Sheela Koppikar Vidya Mandir — a name synonymous with excellence in primary education in Dharwad. Today, with 500+ students and a dedicated faculty, SKVM continues to build leaders with heart and soul.
- Right side: tall Placeholder (aspect-3/4) labeled "School Building Exterior"
- Below the text: a horizontal timeline (3 items) using TimelineItem component:
  1. "1986 — Founded as Disneyland School"
  2. "2000s — Growth and curriculum expansion"
  3. "Today — 500+ students, trusted by Dharwad families"

### Section 2: Leadership
- Background: stone-100
- Eyebrow: "LEADERSHIP"
- Title: "The Faces Behind Our Mission"
- Two large shadcn Cards side by side (stack on mobile):
  - **Card 1 — Principal:**
    - Placeholder Avatar (large, 120px), Name, Title
    - Full message as a styled blockquote (Playfair Display italic, with brand-500 left border)
    - Card background: white, rounded-2xl, shadow-lg
  - **Card 2 — Chief Academic Officer:**
    - Same layout as Card 1
- Animate: fadeInLeft for card 1, fadeInRight for card 2

### Section 3: Our Values
- Background: white
- Eyebrow: "OUR VALUES"
- Title: "What We Stand For"
- 4 value cards in a 2×2 grid (use the values from data)
- Each card: large Lucide icon at top (48px, brand-500), title (Playfair Display, h3), description (DM Sans, stone-600)
- Cards should feel like magazine-spread elements — generous padding, clean

### Section 4: CTA
- Reuse the CTA Banner from homepage (brand-500 bg, admissions link)

=============================================================
PAGE 3: VISION & MISSION (src/app/vision-mission/page.tsx)
=============================================================

### Hero
- Title: "Vision & Mission"
- Subtitle: "Guiding principles that shape every decision"

### Section 1: Vision
- Editorial split: Large Placeholder left (aspect-4/3, labeled "Students in assembly"), text right
- Eyebrow: "OUR VISION"
- A large decorative quote mark icon (brand-200, absolute positioned)
- Vision text in Playfair Display, text-h3, stone-800, leading-relaxed — make it feel like a statement
- Background: white

### Section 2: Mission
- REVERSE split: text left, Placeholder right (labeled "Classroom Activity")
- Eyebrow: "OUR MISSION"
- Same decorative treatment as Vision
- Background: stone-50

### Section 3: Core Values
- Background: stone-900 (DARK section for dramatic contrast)
- White text throughout
- Eyebrow: "CORE VALUES" (brand-400 color on dark)
- Title: "The Pillars of Our Philosophy" — white
- 6 cards in a 3×2 grid: Integrity, Excellence, Compassion, Innovation, Respect, Growth
- Cards: stone-800 background, white text, brand-500 icon, rounded-xl, border stone-700
- This section should feel dramatic and different from the rest of the page

### Section 4: Our Approach
- Background: white
- Three columns showing approach pillars:
  1. 📚 Academic Excellence — rigorous yet enjoyable curriculum
  2. 💪 Character Building — values, discipline, empathy
  3. 🌍 Life Skills — practical skills for the 21st century
- Each in a shadcn Card with distinctive icon treatment

=============================================================
PAGE 4: ACADEMICS (src/app/academics/page.tsx)
=============================================================

### Hero
- Title: "Academics"
- Subtitle: "Comprehensive education for holistic development"

### Section 1: Philosophy
- Full-width text section (no columns)
- Eyebrow: "OUR APPROACH"
- Title: "Learning Should Be Fun"
- A prominent paragraph explaining the school's teaching philosophy — activity-based, child-centered, fun
- Background: stone-50

### Section 2: Programs (Grade-Wise)
- Use shadcn Tabs component for switching between grade levels:
  - Tab 1: "Nursery & KG" — detailed content for this grade
  - Tab 2: "Primary I (1st–2nd)"
  - Tab 3: "Primary II (3rd–4th)"
  - Tab 4: "Primary III (5th)"
- Each tab's content panel: a split layout with program details on one side and a Placeholder on the other
- Include: subjects taught, key activities, learning outcomes for each grade

### Section 3: Subjects Grid
- Eyebrow: "WHAT WE TEACH"
- Title: "Our Curriculum"
- Responsive grid of subject cards (3-col desktop, 2-col tablet, 1-col mobile):
  English, Hindi, Mathematics, EVS, General Knowledge, Computer Science, Art & Craft, Physical Education, Music & Dance
- Each: Lucide icon, subject name, one-line description in a shadcn Card

### Section 4: Facilities
- Background: stone-100
- Eyebrow: "FACILITIES"
- Title: "World-Class Infrastructure"
- Use the facilities data. Display as large cards with icons, names, descriptions, and a Placeholder for each facility.
- Consider a bento grid or alternating large/small cards

### Section 5: Methodology
- Background: white
- Eyebrow: "HOW WE TEACH"
- Title: "Our Teaching Methodology"
- 4 methodology cards:
  1. 🎮 Learning Through Play — Concepts taught through games and activities
  2. 🔬 Hands-on Exploration — Lab experiments and real-world observation
  3. 🎨 Creative Expression — Art, music, and drama as learning tools
  4. 📊 Continuous Assessment — Regular evaluation without exam pressure
- Each card has a distinct accent color from the accent palette

=============================================================
PAGE 5: FACULTY (src/app/faculty/page.tsx)
=============================================================

### Hero
- Title: "Our Faculty"
- Subtitle: "Experienced educators committed to your child's growth"

### Section 1: Leadership Team
- Featured section with two large editorial-style cards
- Principal and CAO — each with:
  - Large Avatar placeholder
  - Name and title
  - Full message in an elegant blockquote style (Playfair Display italic)
  - Card has generous padding, rounded-2xl, shadow-lg
- These should feel like magazine profile cards — large, premium, editorial

### Section 2: Teaching Philosophy
- Background: stone-100
- Eyebrow: "OUR PHILOSOPHY"
- Title: "Every Child Is Unique"
- A large centered quote: "We at SKVM provide a conducive and loving atmosphere to bring out the best in every child."
- Attributed to Mrs. Neeta Koppikar, Principal
- Below: 3 pillars of the teaching philosophy in cards:
  1. Individualized Attention
  2. Nurturing Environment
  3. Holistic Growth

### Section 3: By the Numbers
- Stats section showing faculty-related numbers:
  - "25+" dedicated teachers
  - "15:1" student-teacher ratio
  - "39+" years of educational legacy
  - "100%" commitment to every child
- Use StatCard components in a 4-col grid

=============================================================
PAGE 6: GALLERY (src/app/gallery/page.tsx)
=============================================================

### Hero
- Title: "Gallery"
- Subtitle: "Moments that define the SKVM experience"

### Section 1: Photo Gallery
- shadcn Tabs for category filtering:
  - Tabs: All, Academics, Sports, Cultural Events, Campus
- Below tabs: Responsive grid of Placeholder image cards (3-col desktop, 2-col tablet, 1-col mobile)
- Each Placeholder: aspect-square or aspect-4/3 (mix for visual interest), rounded-xl
- Hover: show an overlay with a zoom icon (scale transition on the placeholder bg)
- Click: Opens shadcn Dialog as a lightbox — shows the placeholder larger with a label, plus prev/next buttons
- Show 12 placeholders labeled: "Annual Day Performance", "Science Activity", "Sports Day", "Art Class", "Library Reading Time", "Playground Fun", "Computer Lab", "Music Class", "Cultural Festival", "Independence Day", "Teacher's Day", "Classroom Learning"
- Animate: staggered fadeInUp

### Section 2: Video Tour
- Background: stone-900 (dark)
- Eyebrow: "VIRTUAL TOUR" in brand-400 on dark bg
- Title: "See Our Campus in Action" — white
- A large 16:9 Placeholder labeled "School Tour Video (YouTube Embed)" in the center
- Below: shadcn Button linking to the YouTube channel — "Watch More on YouTube →"

### Section 3: Instagram Feed
- Background: stone-50
- Eyebrow: "FOLLOW US"
- Title: "SKVM on Instagram"
- A 3×3 grid of square Placeholders simulating Instagram posts
- Each placeholder on hover: shows Instagram icon overlay
- Link to Instagram profile with a styled button

=============================================================
PAGE 7: ADMISSIONS (src/app/admissions/page.tsx)
=============================================================

### Hero
- Title: "Admissions"
- Subtitle: "Admissions Open for Academic Year 2027-28"
- CTA Button in hero: "Start Application ↓" (scrolls to form section)

### Section 1: Process Timeline
- Background: white
- Eyebrow: "HOW TO APPLY"
- Title: "Admission Process"
- Use the TimelineItem component to show the 5-step process from data
- On desktop: vertical timeline with alternating left/right content
- On mobile: all content on the right of the timeline line
- Each step has a numbered brand-500 circle, icon, title, description
- Animate: staggered fadeInUp

### Section 2: Important Dates & Eligibility
- Background: stone-50
- Two columns:
  - Left: "Eligibility" — a clean table or list showing age requirements per class
    | Class | Age by June 1 |
    |-------|--------------|
    | Nursery | 3 years |
    | LKG | 4 years |
    | UKG | 5 years |
    | 1st Std | 6 years |
    | 2nd–5th | Age appropriate |
  - Right: "Important Dates" — 3 shadcn Cards with calendar icons:
    1. Application Opens: January 1, 2027
    2. Application Deadline: May 1, 2027
    3. Interaction Sessions: May 15, 2027

### Section 3: Documents Required
- Background: white
- Eyebrow: "DOCUMENTS"
- Title: "What You'll Need"
- Clean checklist using Lucide CheckCircle icons in brand-500
- Each document as a list item with icon + text

### Section 4: Inquiry Form
- Background: stone-50
- Eyebrow: "APPLY NOW"
- Title: "Start Your Application"
- id="apply" (for the hero button to scroll to)
- Use shadcn Form + react-hook-form + zod validation:
  - Fields (2-col grid on desktop, 1-col mobile):
    - Child's Full Name (Input)
    - Date of Birth (Input type="date")
    - Class Applying For (Select dropdown: Nursery, LKG, UKG, 1st–5th)
    - Parent/Guardian Name (Input)
    - Phone Number (Input with "+91" prefix)
    - Email Address (Input type="email")
  - Full-width fields:
    - Address (Textarea, 2 rows)
    - Message / Questions (Textarea, 3 rows)
  - Submit: shadcn Button "Submit Inquiry" — full-width on mobile, auto-width on desktop
  - Validation: required fields, email format, phone format
  - On submit: show a success message (simulated — no backend)
- Style: clean card with shadow, generous padding, clear labels

### Section 5: FAQ
- Background: white
- Eyebrow: "QUESTIONS?"
- Title: "Frequently Asked Questions"
- Use shadcn Accordion (type="single", collapsible)
- All 6 FAQ items from the data
- Each item: question as trigger (DM Sans, font-semibold), answer as content (DM Sans, stone-600)
- Animate: fadeInUp

=============================================================
PAGE 8: CONTACT (src/app/contact/page.tsx)
=============================================================

### Hero
- Title: "Contact Us"
- Subtitle: "We're here to help. Reach out anytime."

### Section 1: Contact Cards
- Background: white
- 3 cards in a row (shadcn Card):
  1. 📞 Phone — "+91 9448915287" (tel: link) — Click to call
  2. 📧 Email — clickable mailto: link
  3. 📍 Address — full address, links to Google Maps
- Each card: Lucide icon in a brand-100 circle (48px), title, value as clickable link, description (e.g., "Mon–Sat, 8:30 AM – 3:00 PM")
- Hover: lift + shadow increase

### Section 2: Map
- Background: stone-50
- Full-width Google Maps iframe embed (from data.contact.mapEmbedUrl)
- Rounded-xl, shadow-lg, border
- Below map: "Get Directions →" button linking to googleMapsUrl

### Section 3: Contact Form
- Background: white
- Eyebrow: "SEND US A MESSAGE"
- Title: "We'd Love to Hear From You"
- shadcn Form with:
  - Name (Input)
  - Email (Input)
  - Phone (Input)
  - Subject (Select: "General Inquiry", "Admissions", "Feedback", "Other")
  - Message (Textarea, 4 rows)
  - Submit: "Send Message" button
- Same zod validation approach as admissions form
- Show success message on submit

### Section 4: Follow Us
- Background: stone-900 (dark)
- Eyebrow: "CONNECT" — brand-400 on dark
- Title: "Follow Us on Social Media" — white
- Two large cards side by side:
  1. **Instagram** — pink/purple gradient accent border, Instagram icon, handle "@skvm_dharwad", "Follow" button
  2. **YouTube** — red accent border, YouTube icon, channel name, "Subscribe" button
- Each card: stone-800 bg, white text, rounded-2xl, hover glow effect

=============================================================
GLOBAL ELEMENTS (apply to all pages)
=============================================================

### Navbar (src/components/layout/navbar.tsx)
- Sticky, backdrop-blur-md, white/95% opacity bg, border-bottom stone-200
- Left: School logo Placeholder (40px circle) + "SKVM" text (Playfair Display, font-bold, stone-900)
- Center: shadcn NavigationMenu with links — Home, About, Vision & Mission, Academics, Faculty, Gallery, Admissions, Contact
  - Active link: brand-500 color + 2px bottom border
  - Hover: brand-500 color transition
- Right: shadcn Button "Apply Now" — variant="default" (brand-500 bg), size="sm"
- Mobile:
  - Show only logo + "SKVM" + hamburger icon
  - Hamburger opens shadcn Sheet from the right
  - Sheet contains: all nav links vertically, social icons, "Apply Now" button at bottom
  - Sheet background: white
- On scroll past 50px: add shadow-md
- Transition: all 0.3s ease

### Footer (src/components/layout/footer.tsx)
- Background: stone-900
- Text: stone-300 for body, white for headings, brand-400 for links
- 4-column grid (stack on mobile):
  1. **About**: Logo Placeholder (small) + "Sheela Koppikar Vidya Mandir" + tagline + short description
  2. **Quick Links**: Home, About, Academics, Gallery, Admissions, Contact — as simple text links
  3. **Contact**: Phone, Email, Address (compact format)
  4. **Follow Us**: Instagram and YouTube icon links, with subtle hover effects
- Separator line (stone-800) below columns
- Bottom bar: "© 2026 Sheela Koppikar Vidya Mandir. All rights reserved." — centered, text-sm, stone-500
- The footer should feel like a magazine footer — spacious, clean, editorial

### Back to Top (src/components/layout/back-to-top.tsx)
- Floating button, bottom-right corner (bottom-8 right-8)
- Appears after scrolling 400px (hidden otherwise, with fade transition)
- shadcn Button with Lucide ArrowUp icon
- Brand-500 bg, white icon, rounded-full, shadow-lg
- Hover: brand-600 bg + lift

=============================================================
DO NOT do these things:
=============================================================

1. Do NOT use Lorem ipsum — ALL text comes from the schoolData object
2. Do NOT use real image URLs or external placeholder services (use the <Placeholder /> component)
3. Do NOT create a generic template look — every page should have unique layout variations
4. Do NOT overuse red — it's an ACCENT, not a background
5. Do NOT skip animations — every section should animate on scroll entry
6. Do NOT forget mobile design — test mental model for 375px width
7. Do NOT use default shadcn fonts — override with Playfair Display + DM Sans

Generate the COMPLETE code for all 8 pages, with each page as a separate file in the app router structure. Make this website feel like it was designed by a premium design agency.
````
