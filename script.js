/* ==========================================
   MOBILE DRAWER MENU
   ========================================== */
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileDrawer = document.getElementById('mobile-drawer');
const mobileMenuIcon = mobileMenuBtn.querySelector('i');

mobileMenuBtn.addEventListener('click', () => {
  mobileDrawer.classList.toggle('translate-x-full');
  // Toggle menu icon state
  if (mobileDrawer.classList.contains('translate-x-full')) {
    mobileMenuIcon.className = 'fa-solid fa-bars-staggered text-2xl';
  } else {
    mobileMenuIcon.className = 'fa-solid fa-xmark text-2xl';
  }
});

// Close mobile menu when a link is clicked
document.querySelectorAll('.mobile-nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileDrawer.classList.add('translate-x-full');
    mobileMenuIcon.className = 'fa-solid fa-bars-staggered text-2xl';
  });
});


/* ==========================================
   STICKY NAVBAR & BACK-TO-TOP BUTTON
   ========================================== */
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('glass-nav', 'shadow-lg');
    navbar.classList.remove('bg-transparent', 'py-5');
    navbar.classList.add('py-3.5');
  } else {
    navbar.classList.remove('glass-nav', 'shadow-lg', 'py-3.5');
    navbar.classList.add('bg-transparent', 'py-5');
  }

  if (window.scrollY > 600) {
    backToTop.classList.remove('opacity-0', 'translate-y-10', 'pointer-events-none');
    backToTop.classList.add('opacity-100', 'translate-y-0', 'pointer-events-auto');
  } else {
    backToTop.classList.add('opacity-0', 'translate-y-10', 'pointer-events-none');
    backToTop.classList.remove('opacity-100', 'translate-y-0', 'pointer-events-auto');
  }
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


/* ==========================================
   SCROLL REVEAL (Intersection Observer)
   ========================================== */
const observerOptions = {
  root: null,
  threshold: 0.12,
  rootMargin: "0px 0px -50px 0px"
};

const revealObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      // Optional: stop observing once elements are revealed
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Track all reveal targets
document.querySelectorAll('.reveal').forEach(el => {
  revealObserver.observe(el);
});


/* ==========================================
   ACTIVE NAVBAR LINKS (Intersection Observer)
   ========================================== */
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

const activeObserverOptions = {
  root: null,
  threshold: 0.35, // Adjust this as needed based on section sizing
  rootMargin: "-20% 0px -40% 0px"
};

const activeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const currentId = entry.target.getAttribute('id');
      navLinks.forEach(link => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active-link');
        }
      });
    }
  });
}, activeObserverOptions);

sections.forEach(section => {
  activeObserver.observe(section);
});


/* ==========================================
   ANIMATED STATS COUNTER
   ========================================== */
const counters = document.querySelectorAll('.stat-counter');
const counterSection = document.getElementById('counter-section');
let countersAnimated = false;

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !countersAnimated) {
      animateCounters();
      countersAnimated = true;
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

if (counterSection) {
  counterObserver.observe(counterSection);
}

function animateCounters() {
  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'), 10);
    const duration = 2000; // 2 seconds total animation time
    const stepTime = Math.max(Math.floor(duration / target), 15);
    let start = 0;

    const timer = setInterval(() => {
      if (target > 1000) {
        // Speed up counting for very large numbers
        start += Math.ceil(target / 100);
        if (start >= target) {
          counter.innerText = target.toLocaleString();
          clearInterval(timer);
        } else {
          counter.innerText = start.toLocaleString();
        }
      } else {
        start += 1;
        if (start >= target) {
          counter.innerText = target;
          clearInterval(timer);
        } else {
          counter.innerText = start;
        }
      }
    }, stepTime);
  });
}


/* ==========================================
   TESTIMONIAL CAROUSEL
   ========================================== */
let currentSlide = 0;
const track = document.getElementById('carousel-track');
const slides = track.children;
const dots = document.querySelectorAll('.carousel-dot');
const totalSlides = slides.length;
let autoSlideInterval;

function updateCarousel() {
  // Shift the container by the currentSlide percentage
  track.style.transform = `translateX(-${currentSlide * 100}%)`;
  // Update dots active colors
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add('bg-lightCoffee');
      dot.classList.remove('bg-lightCoffee/35');
    } else {
      dot.classList.remove('bg-lightCoffee');
      dot.classList.add('bg-lightCoffee/35');
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateCarousel();
}

function goToSlide(index) {
  currentSlide = index;
  updateCarousel();
  resetAutoSlide();
}

function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 4000);
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

// Initialize carousel states
updateCarousel();
startAutoSlide();


/* ==========================================
   GALLERY LIGHTBOX MODAL
   ========================================== */
const lightboxModal = document.getElementById('lightbox-modal');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');

function openLightbox(imgSrc, captionText) {
  lightboxImg.src = imgSrc;
  lightboxCaption.innerText = captionText;
  lightboxModal.classList.remove('hidden');
  lightboxModal.classList.add('flex');
  
  // Delay opacity transition for smooth zoom in
  setTimeout(() => {
    lightboxModal.classList.remove('opacity-0');
  }, 20);
}

function closeLightbox() {
  lightboxModal.classList.add('opacity-0');
  // Hide section after transition ends
  setTimeout(() => {
    lightboxModal.classList.add('hidden');
    lightboxModal.classList.remove('flex');
    lightboxImg.src = ""; // Clear src to avoid flicker on next open
  }, 300);
}

// Close lightbox on clicking backdrop
lightboxModal.addEventListener('click', (e) => {
  if (e.target === lightboxModal) {
    closeLightbox();
  }
});


/* ==========================================
   SPECIAL OFFER MODAL
   ========================================== */
const offerModal = document.getElementById('offer-modal');

function openOfferModal() {
  offerModal.classList.remove('hidden');
  offerModal.classList.add('flex');
  setTimeout(() => {
    offerModal.classList.remove('opacity-0');
  }, 20);
}

function closeOfferModal() {
  offerModal.classList.add('opacity-0');
  setTimeout(() => {
    offerModal.classList.add('hidden');
    offerModal.classList.remove('flex');
  }, 300);
}

// Close offer modal on clicking backdrop
offerModal.addEventListener('click', (e) => {
  if (e.target === offerModal) {
    closeOfferModal();
  }
});


/* ==========================================
   CUSTOM TOAST NOTIFICATION SYSTEM
   ========================================== */
const toastContainer = document.getElementById('toast-container');

function showToast(message, type = 'success') {
  // Create toast element
  const toast = document.createElement('div');
  toast.className = `glass-card flex items-center space-x-3 px-5 py-4 rounded-xl text-xs font-poppins border border-white/10 shadow-lg text-white pointer-events-auto transform translate-y-4 opacity-0 transition-all duration-300`;
  
  // Choose icon depending on type
  let icon = '<i class="fa-solid fa-circle-check text-lightCoffee text-base"></i>';
  if (type === 'error') {
    icon = '<i class="fa-solid fa-circle-xmark text-red-500 text-base"></i>';
  } else if (type === 'info') {
    icon = '<i class="fa-solid fa-circle-info text-creamAccent text-base"></i>';
  }
  
  toast.innerHTML = `
    ${icon}
    <span class="font-medium tracking-wide">${message}</span>
  `;
  
  toastContainer.appendChild(toast);
  
  // Animate In
  setTimeout(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  }, 50);
  
  // Animate Out & Destroy
  setTimeout(() => {
    toast.classList.add('translate-y-[-12px]', 'opacity-0');
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3500);
}


/* ==========================================
   CART & INTERACTIVE FORM SUBMISSIONS
   ========================================== */
let cartItemCount = 0;
const cart = {};

function addToCart(button, itemName, price) {
  cartItemCount += 1;
  cart[itemName] = (cart[itemName] || 0) + 1;
  showToast(`Added ${itemName} to your order. Subtotal: $${price.toFixed(2)}`);
  
  // Update the clicked button text
  const span = button.querySelector('span');
  if (span) {
    span.innerText = `Added (${cart[itemName]})`;
  }
  
  // Visual feedback style on clicked button
  button.classList.add('bg-coffeeBrown', 'text-white', 'border-coffeeBrown');
  button.classList.remove('bg-secondaryBg', 'text-creamAccent');
}

function handleContactSubmit(event) {
  event.preventDefault();
  
  const name = document.getElementById('form-name').value;
  const email = document.getElementById('form-email').value;
  const phone = document.getElementById('form-phone').value;
  const message = document.getElementById('form-message').value;

  // Simulate API submit latency
  const submitBtn = event.target.querySelector('button[type="submit"]');
  const origText = submitBtn.innerHTML;
  submitBtn.innerHTML = '<i class="fa-solid fa-circle-notch animate-spin mr-1"></i> Sending...';
  submitBtn.disabled = true;

  setTimeout(() => {
    showToast(`Thank you, ${name}! Your inquiry has been sent successfully.`);
    // Reset form
    event.target.reset();
    submitBtn.innerHTML = origText;
    submitBtn.disabled = false;
  }, 1500);
}

function handleSubscribe() {
  const emailInput = document.getElementById('club-email');
  const email = emailInput.value.trim();
  
  if (!email || !email.includes('@')) {
    showToast('Please enter a valid email address.', 'error');
    return;
  }
  
  showToast(`Welcome! You are now subscribed to the Midnight Club.`);
  emailInput.value = '';
}
