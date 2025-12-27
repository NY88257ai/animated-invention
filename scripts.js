/* ========================================
   ANDREA'S SALUMERIA - MAIN JAVASCRIPT
   ======================================== */

// ========== LOGO SWITCHER (LIGHT/DARK PREFERENCE) ==========
function setLogoForTheme() {
  const logo = document.getElementById("site-logo");
  if (!logo) return;
  
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  logo.src = prefersDark
    ? "photos/logo/andreas-header-dark.png"
    : "photos/logo/andreas-header-light.png";
}

// Set logo on load
setLogoForTheme();

// Listen for theme changes
window.matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", setLogoForTheme);

// ========== MOBILE NAVIGATION TOGGLE ==========
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

if (navToggle && mainNav) {
  // Toggle menu open/close
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen);
  });

  // Close menu when clicking a nav link
  const navLinks = mainNav.querySelectorAll("a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!mainNav.contains(e.target) && !navToggle.contains(e.target)) {
      mainNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// ========== HERO SLIDESHOW ==========
const heroSlides = document.querySelectorAll(".hero-slide");
let currentHeroIndex = 0;
const heroIntervalMs = 6500; // 6.5 seconds per slide

function showHeroSlide(index) {
  if (heroSlides.length === 0) return;
  
  heroSlides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
  });
}

function nextHeroSlide() {
  if (heroSlides.length === 0) return;
  
  currentHeroIndex = (currentHeroIndex + 1) % heroSlides.length;
  showHeroSlide(currentHeroIndex);
}

// Start slideshow if there are slides
if (heroSlides.length > 0) {
  showHeroSlide(currentHeroIndex);
  
  // Only auto-rotate if there's more than one slide
  if (heroSlides.length > 1) {
    setInterval(nextHeroSlide, heroIntervalMs);
  }
}

// ========== GALLERY ==========
// All gallery images from photos/gallery/ folder
const galleryImages = [
  { src: "photos/gallery/footerhero1.jpg", alt: "Andrea's Salumeria - Italian deli display" },
  { src: "photos/gallery/footerhero2.jpg", alt: "Andrea's Salumeria - Fresh sandwich preparation" },
  { src: "photos/gallery/homemadepestopasta.jpg", alt: "Andrea's Salumeria - Homemade pesto pasta" },
  { src: "photos/gallery/saladtray1.jpg", alt: "Andrea's Salumeria - Fresh salad tray" },
  { src: "photos/gallery/tray1.jpg", alt: "Andrea's Salumeria - Assorted Italian meats and cheeses" },
  { src: "photos/gallery/tray2.jpg", alt: "Andrea's Salumeria - Gourmet sandwich tray" },
  { src: "photos/gallery/tray3.jpg", alt: "Andrea's Salumeria - Italian specialty platter" },
  { src: "photos/gallery/tray4.jpg", alt: "Andrea's Salumeria - Catering display" },
  { src: "photos/gallery/tray5.jpg", alt: "Andrea's Salumeria - Fresh deli selections" }
];

const galleryGrid = document.getElementById("gallery-grid");

if (galleryGrid && galleryImages.length > 0) {
  galleryImages.forEach((imgData, index) => {
    // Create gallery item
    const item = document.createElement("figure");
    item.className = "gallery-item";
    
    // Create image element
    const img = document.createElement("img");
    img.src = imgData.src;
    img.alt = imgData.alt;
    img.className = "gallery-photo";
    img.loading = "lazy"; // Native lazy loading for better performance
    
    // Error handling for images that fail to load
    img.onerror = function() {
      console.warn(`Failed to load gallery image: ${imgData.src}`);
      item.style.display = "none"; // Hide broken images
    };
    
    // Append image to item
    item.appendChild(img);
    
    // Append item to grid
    galleryGrid.appendChild(item);
  });
}

// ========== GOOGLE REVIEW BUTTON ==========
function openGoogleReview() {
  // Direct link to Google Maps listing
  const googleMapsUrl = "https://www.google.com/maps/place/Andrea+Salumeria/@40.748652,-74.051889,15z";
  window.open(googleMapsUrl, "_blank", "noopener,noreferrer");
}

// ========== FOOTER YEAR ==========
const yearElement = document.getElementById("year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// ========== SMOOTH SCROLL POLYFILL ==========
// For browsers that don't support smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    
    // Skip if it's just "#"
    if (href === "#") {
      e.preventDefault();
      return;
    }
    
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      
      // Use smooth scroll if supported, otherwise use regular scroll
      if ("scrollBehavior" in document.documentElement.style) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      } else {
        target.scrollIntoView();
      }
    }
  });
});

// ========== PERFORMANCE OPTIMIZATION ==========
// Preload hero images for smoother transitions
if (heroSlides.length > 1) {
  heroSlides.forEach(slide => {
    const bgImage = slide.style.backgroundImage;
    if (bgImage) {
      const imageUrl = bgImage.slice(5, -2); // Extract URL from url("...")
      const img = new Image();
      img.src = imageUrl;
    }
  });
}

// ========== ACCESSIBILITY IMPROVEMENTS ==========
// Add keyboard navigation for gallery
if (galleryGrid) {
  const galleryItems = galleryGrid.querySelectorAll(".gallery-item");
  galleryItems.forEach((item, index) => {
    item.setAttribute("tabindex", "0");
    item.setAttribute("role", "img");
    
    // Add keyboard interaction
    item.addEventListener("keypress", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        // Could open lightbox here in future
        console.log(`Gallery item ${index + 1} selected`);
      }
    });
  });
}

// ========== CONSOLE INFO ==========
console.log("%cAndrea's Salumeria", "font-size: 24px; font-weight: bold; color: #7b1b1b;");
console.log("%cFine Italian Deli & Grocer Since 1975", "font-size: 14px; color: #4b5a2a;");
console.log("Website loaded successfully!");
