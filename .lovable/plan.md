

## Madula — Medical/Healthcare Website

A complete, production-ready single-page medical website with 12 sections, rich animations (Framer Motion + GSAP), and fully responsive design.

### Libraries to Install
- framer-motion, gsap, @gsap/react
- react-countup, react-intersection-observer
- embla-carousel-react
- clsx, tailwind-merge
- @radix-ui/react-dialog

### Setup & Configuration
- Import Plus Jakarta Sans + Inter from Google Fonts in index.html
- Update index.css with custom color tokens, smooth scroll, marquee keyframes, rotating badge animation, custom cursor styles
- Update tailwind.config.ts with the Madula color palette and custom animations

### Components to Build (12 sections + 4 UI utilities)

1. **Navbar** — Fixed blur navbar with logo, nav links (dropdowns for Research/Page), search icon, "Book Appointment" button opening a Radix Dialog booking form. Scroll-aware shadow + height shrink. Mobile hamburger drawer.

2. **Hero** — Two-column layout with staggered text entrance, animated stat counters (react-countup), doctor image with floating decorative elements, GSAP parallax on scroll, gradient blob background.

3. **Services** — 4 service cards in grid (embla carousel on mobile) with colored icon circles, hover lift animation.

4. **About** — Two overlapping images with indigo accent shape, rotating circular text badge (GSAP), bullet list with CheckCircle2 icons, circular SVG progress indicators (85%/60%) animated on scroll.

5. **MarqueeBanner** — Two infinite-scroll marquee rows (indigo + dark bg) with Lucide icons, pure CSS animation.

6. **Portfolio** — 4-column image grid with dark gradient overlays, hover scale effect, ArrowUpRight buttons.

7. **WhyChooseUs** — Image with tilted frame + rotating badge, two feature rows with icons.

8. **Pricing** — 3 pricing cards on lavender background. Featured card (indigo bg), stagger entrance, hover scale.

9. **Testimonials** — Embla carousel with star ratings, quote cards, navigation arrows. Partner logos row below.

10. **Blog** — 3-column blog cards with date badges, metadata, hover effects.

11. **Newsletter** — Full-width gradient card with email input + subscribe button, slide-up animation.

12. **Footer** — 4-column grid with logo, links, services, contact info. Copyright bar + scroll-to-top button.

### UI Utilities
- **AnimatedCounter** — CountUp wrapper triggered by intersection observer
- **CircularProgress** — SVG ring with animated stroke-dashoffset
- **CarouselArrows** — Reusable embla navigation arrows
- **CustomCursor** — 12px indigo circle following mouse, mix-blend-mode: difference

### Global Animations & Interactions
- Page load fade-in via AnimatePresence
- All sections: scroll-triggered fade-up reveals (Framer Motion viewport)
- GSAP ScrollTrigger parallax on hero image + background shapes
- Hover micro-interactions on all interactive elements
- prefers-reduced-motion respected throughout
- Smooth scroll behavior

### Responsive Design
- Mobile-first with Tailwind breakpoints
- All sections stack appropriately on mobile
- max-w-7xl container with responsive padding

### Accessibility
- Focus ring utilities on all interactive elements
- Proper alt text on all images
- loading="lazy" on all images except hero

