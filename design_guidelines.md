# Comilla University Website Design Guidelines

## Design Approach
**Reference-Based Design**: Following modern university web aesthetics with inspiration from established educational institutions, adapted for Comilla University's identity and the provided reference image specifications.

## Core Design Principles
1. **Professional Academic Identity**: Clean, trustworthy design that conveys educational excellence
2. **Information Hierarchy**: Clear visual hierarchy guiding users from hero content through key sections
3. **Accessibility First**: High contrast, readable typography, intuitive navigation
4. **Bengali Educational Context**: Design respects local academic traditions while maintaining modern standards

## Typography System
- **Primary Font**: Inter or Roboto (clean sans-serif via Google Fonts CDN)
- **Heading Hierarchy**:
  - H1: text-4xl to text-6xl, font-bold (Hero headlines)
  - H2: text-3xl to text-4xl, font-bold (Section headings)
  - H3: text-xl to text-2xl, font-semibold (Card titles)
  - Body: text-base to text-lg, font-normal (Content)
  - Small: text-sm (Dates, metadata)

## Layout System
**Tailwind Spacing Units**: Consistently use 4, 8, 12, 16, 20, 24, 32 for padding/margins (p-4, p-8, p-12, py-20, etc.)

**Section Structure**:
- Hero: Full viewport height (min-h-screen)
- Content sections: py-16 to py-24 (desktop), py-12 (mobile)
- Container: max-w-7xl mx-auto px-4
- Cards/Grid gaps: gap-6 to gap-8

## Component Library

### Navigation
- **Sticky Header**: Fixed top, backdrop-blur, subtle shadow on scroll
- **Desktop Menu**: Horizontal links with hover underline effects
- **Mobile**: Hamburger menu (slide-in drawer from right)
- **Search Icon**: Top-right corner with modal expansion

### Hero Section
- **Layout**: Full-width with gradient overlay (blue to transparent)
- **Image**: Campus building/aerial view
- **Content**: Centered text with h1 + subtitle + CTA button
- **Auto-Slider**: 5-second rotation with smooth fade transitions
- **CTA Button**: Rounded (rounded-lg), blurred background for overlay visibility

### Vice Chancellor Quote Section
- **Background**: Navy blue solid
- **Layout**: Two-column (text left, photo right on desktop; stacked mobile)
- **Typography**: Larger quote text (text-xl to text-2xl)
- **Button**: "Read More" with outline style

### Announcement Cards
- **Grid**: 2x2 on desktop, single column mobile (grid-cols-1 md:grid-cols-2)
- **Date Badge**: Circular or rounded-full, positioned top-left
- **Cards**: Rounded corners (rounded-xl), subtle shadow, hover lift effect
- **Filter Buttons**: Toggle style, active state with filled background

### Mission Section
- **Layout**: Two-column with images flanking center text
- **Images**: Square or 4:3 ratio, rounded corners
- **Text**: Max-width prose for readability
- **Spacing**: Generous between columns (gap-12 to gap-16)

### Navigation Cards Grid
- **Grid**: 3 columns desktop, 2 tablet, 1 mobile (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)
- **Cards**: Image background with dark overlay (gradient from transparent to dark)
- **Text**: White, positioned bottom-left with padding
- **Height**: aspect-[4/3] or min-h-[300px]

### News Section
- **Layout**: Asymmetric - featured article (2/3 width) + 3 smaller items (1/3 width stacked)
- **Featured**: Large image, headline, excerpt, date badge
- **Smaller Items**: Thumbnail + title + date
- **Typography**: Bold headlines, lighter body text

### Statistics Section
- **Layout**: 3-column grid (grid-cols-1 md:grid-cols-3)
- **Numbers**: Extra large (text-5xl to text-6xl), font-bold
- **Labels**: Below numbers, text-lg
- **Spacing**: Centered alignment, py-20

### Residential Semester Section
- **Layout**: Full-width image with text overlay
- **Overlay**: Gradient from bottom (dark to transparent)
- **Content**: Positioned bottom-left with ample padding
- **Button**: Blurred background, rounded

### Footer
- **Layout**: 4-column grid desktop, stacked mobile
- **Columns**: Contact, Quick Links (2 columns), Social/Map
- **Social Icons**: Circular buttons, brand colors on hover
- **Map**: Embedded Google Maps iframe, rounded corners
- **Copyright**: Center-aligned, border-top, py-6

## Interactive Elements
- **Buttons**: rounded-lg, px-6 py-3, transition-all duration-300
  - Primary: Filled with navy blue
  - Secondary: Outline with navy border
  - Overlay: Backdrop-blur with semi-transparent background
- **Cards**: hover:shadow-xl hover:-translate-y-1 transition
- **Links**: Underline on hover with smooth transition
- **Smooth Scroll**: scroll-behavior: smooth for anchor links

## Images
**Hero Section**: Full-width campus aerial or landmark building image
**Vice Chancellor**: Professional portrait photo
**Mission Section**: Student celebration (graduation) + campus activity images
**Navigation Cards**: Campus buildings, library, students, facilities (7 unique images)
**News Section**: Event photos, campus activities
**Residential Semester**: Campus residence hall exterior
**Footer Map**: Embedded Google Maps showing university location

## Responsive Breakpoints
- Mobile: Base (< 768px) - single column, stacked layouts
- Tablet: md (768px+) - 2 columns where appropriate
- Desktop: lg (1024px+) - Full multi-column layouts
- Wide: xl (1280px+) - Max container width

## Accessibility Standards
- ARIA labels for navigation, buttons, and interactive elements
- Alt text for all images
- Focus states on all interactive elements (ring-2 ring-offset-2)
- Sufficient contrast ratios (navy on white, white on navy)
- Keyboard navigation support