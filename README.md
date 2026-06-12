# Midnight Brew | Premium Coffee Roastery Frontend

Welcome to **Midnight Brew**, a fully responsive, high-end, premium coffee shop single-page landing website. Designed with a luxury dark, coffee-inspired aesthetic, the frontend integrates elegant CSS micro-animations, glassmorphic structures, and smooth, responsive vanilla JavaScript behaviors.

---

##  Visual Preview & Themes

The website uses a curated dark palette reflecting a premium roastery atmosphere:
- **Primary Background**: `#0D0D0D` (Matte black/charcoal canvas)
- **Secondary Background**: `#1A1A1A` (Section/card container gray)
- **Coffee Accent**: `#6F4E37` (Rich coffee brown)
- **Light Accent**: `#A67B5B` (Warm caramel coffee)
- **Cream Highlights**: `#E8DCCB` (Soft cream)
- **Typography**: Heading elements rendered in *Poppins*, body copy styled in *Inter*.

---

##  Key Features

1. **Sticky Glassmorphic Navigation**: Smooth scroll links, active link tracking (via Intersection Observer), responsive mobile slide-out menu drawer, and Call-to-Action button.
2. **Interactive Hero Section**: Features custom buttons, deep dark gradient filters, and float keyframe CSS-animated coffee beans.
3. **Dynamic Menu Cards**: Displays 6 signature coffee offerings. When clicking "Add to Cart", the button updates dynamically to `Added (Count)` with highlighted state transitions, backed by responsive toast alerts.
4. **Animated Stats Counter**: Statistics (`10+ Years`, `5000+ Happy Customers`, `20+ Coffee Varieties`) animate and count up automatically when scrolled into view.
5. **Interactive Grid Gallery**: 8 high-res custom coffee images with responsive zoom filters and a fullscreen lightbox preview modal.
6. **Testimonial Carousel**: Customer feedback carousel with star ratings and custom generated profile photos. Slides transition automatically every 4 seconds.
7. **Special Offer Banner & Reservation Form**: Pulse-animated newsletter promo card and styled glassmorphism validation forms.
8. **Back to Top Trigger**: Fades in smoothly once the user scrolls beyond 600px, enabling swift scroll returns.

---

##  File Structure

```bash
├── assets/                  # Directory containing premium generated assets
│   ├── hero_bg.png          # Café interior backdrop
│   ├── about_story.png      # Pour-over storytelling graphic
│   ├── coffee_espresso.png  # Espresso crema picture
│   ├── coffee_latte.png     # Steamed latte art picture
│   ├── coffee_cold_brew.png # Condensed cold brew glass picture
│   ├── gallery_beans.png    # Roasted Arabica beans closeup
│   ├── gallery_roaster.png  # Coffee roaster machine close up
│   ├── gallery_pouring.png  # Barista pouring detail
│   ├── customer_1.png       # Testimonial avatar 1
│   ├── customer_2.png       # Testimonial avatar 2
│   └── customer_3.png       # Testimonial avatar 3
├── index.html               # Main structural semantic markup & Tailwind configurations
├── script.js                # Vanilla JavaScript interactivity code
└── README.md                # Documentation guide
```

---

##  How to Run Locally

Since the JavaScript relies on local image source calls and Intersection Observers, running the site via a local web server ensures optimal performance:

### Option A: Using Node.js (Recommended)
1. Open a terminal inside the project folder.
2. Launch a temporary server:
   ```bash
   npx http-server -p 3000
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your web browser.

### Option B: Using Python
1. Open a terminal inside the project folder.
2. Run the HTTP module:
   ```bash
   python -m http.server 3000
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your web browser.
