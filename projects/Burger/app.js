// Application Data
const burgerData = {
  "burgers": [
    {
      "id": 1,
      "name": "Classic Beef Burger",
      "price": 12.99,
      "image": "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
      "ingredients": ["Beef Patty", "Lettuce", "Tomato", "Onion", "Pickle", "Ketchup", "Mustard"],
      "rating": 4.8,
      "description": "Our signature beef burger with fresh vegetables and special sauce"
    },
    {
      "id": 2,
      "name": "BBQ Bacon Burger",
      "price": 15.99,
      "image": "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=400&h=300&fit=crop",
      "ingredients": ["Beef Patty", "Bacon", "BBQ Sauce", "Onion Rings", "Cheddar Cheese"],
      "rating": 4.9,
      "description": "Smoky BBQ flavors with crispy bacon and onion rings"
    },
    {
      "id": 3,
      "name": "Chicken Supreme",
      "price": 13.99,
      "image": "https://images.unsplash.com/photo-1606755962773-d324e9a13086?w=400&h=300&fit=crop",
      "ingredients": ["Chicken Breast", "Avocado", "Tomato", "Lettuce", "Mayo"],
      "rating": 4.7,
      "description": "Grilled chicken breast with fresh avocado and crispy lettuce"
    },
    {
      "id": 4,
      "name": "Veggie Delight",
      "price": 11.99,
      "image": "https://images.unsplash.com/photo-1525059696034-4967a729002e?w=400&h=300&fit=crop",
      "ingredients": ["Plant-based Patty", "Lettuce", "Tomato", "Cucumber", "Hummus"],
      "rating": 4.6,
      "description": "Delicious plant-based burger with fresh vegetables"
    },
    {
      "id": 5,
      "name": "Spicy Mexican",
      "price": 14.99,
      "image": "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop",
      "ingredients": ["Beef Patty", "Jalapeños", "Pepper Jack", "Salsa", "Guacamole"],
      "rating": 4.8,
      "description": "Fiery burger with jalapeños and fresh guacamole"
    },
    {
      "id": 6,
      "name": "Double Cheese",
      "price": 16.99,
      "image": "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=400&h=300&fit=crop",
      "ingredients": ["Double Beef Patty", "Cheddar Cheese", "Swiss Cheese", "Lettuce", "Tomato"],
      "rating": 4.9,
      "description": "Double the beef, double the cheese, double the satisfaction"
    }
  ],
  "sides": [
    {
      "id": 7,
      "name": "Crispy French Fries",
      "price": 4.99,
      "image": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop",
      "description": "Golden crispy fries with sea salt"
    },
    {
      "id": 8,
      "name": "Onion Rings",
      "price": 5.99,
      "image": "https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&h=300&fit=crop",
      "description": "Crispy beer-battered onion rings"
    }
  ],
  "drinks": [
    {
      "id": 9,
      "name": "Classic Coke",
      "price": 2.99,
      "image": "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=400&h=300&fit=crop",
      "description": "Refreshing Coca-Cola"
    },
    {
      "id": 10,
      "name": "Fresh Lemonade",
      "price": 3.99,
      "image": "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=400&h=300&fit=crop",
      "description": "Freshly squeezed lemonade"
    }
  ]
};

// Application State
let cart = [];
let currentTestimonial = 0;

// Utility Functions
function formatPrice(price) {
  return price.toFixed(2);
}

function generateStars(rating) {
  const fullStars = Math.floor(rating);
  return '⭐'.repeat(fullStars);
}

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

// Cart Functions
function addToCart(item, quantity = 1) {
  console.log('Adding to cart:', item);
  
  const existingItem = cart.find(cartItem => cartItem.id === item.id);
  
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({ ...item, quantity });
  }
  
  updateCartUI();
  showCartAnimation();
  renderCartItems();
}

function removeFromCart(itemId) {
  cart = cart.filter(item => item.id !== itemId);
  updateCartUI();
  renderCartItems();
}

function updateItemQuantity(itemId, quantity) {
  const item = cart.find(cartItem => cartItem.id === itemId);
  if (item) {
    if (quantity <= 0) {
      removeFromCart(itemId);
    } else {
      item.quantity = quantity;
      updateCartUI();
      renderCartItems();
    }
  }
}

function updateCartUI() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  const cartCount = document.getElementById('cart-count');
  const cartTotal = document.getElementById('cart-total');
  const checkoutTotal = document.getElementById('checkout-total');
  const checkoutBtn = document.getElementById('checkout-btn');
  
  if (cartCount) cartCount.textContent = totalItems;
  if (cartTotal) cartTotal.textContent = formatPrice(totalPrice);
  if (checkoutTotal) checkoutTotal.textContent = formatPrice(totalPrice);
  if (checkoutBtn) checkoutBtn.disabled = cart.length === 0;
}

function showCartAnimation() {
  const cartIcon = document.getElementById('cart-icon');
  if (cartIcon) {
    cartIcon.classList.add('cart-bounce');
    setTimeout(() => {
      cartIcon.classList.remove('cart-bounce');
    }, 600);
  }
}

function renderCartItems() {
  const cartContent = document.getElementById('cart-content');
  if (!cartContent) return;
  
  if (cart.length === 0) {
    cartContent.innerHTML = '<p class="cart-empty">Your cart is empty</p>';
    return;
  }
  
  cartContent.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.image}" alt="${item.name}" class="cart-item__image" onerror="this.style.display='none'">
      <div class="cart-item__details">
        <div class="cart-item__name">${item.name}</div>
        <div class="cart-item__price">$${formatPrice(item.price)}</div>
        <div class="cart-item__quantity">
          <button class="quantity-btn" onclick="updateItemQuantity(${item.id}, ${item.quantity - 1})">-</button>
          <span>${item.quantity}</span>
          <button class="quantity-btn" onclick="updateItemQuantity(${item.id}, ${item.quantity + 1})">+</button>
          <button class="btn btn--secondary" style="margin-left: auto; padding: 4px 8px; font-size: 12px;" onclick="removeFromCart(${item.id})">Remove</button>
        </div>
      </div>
    </div>
  `).join('');
}

// Modal Functions
function showModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
  }
}

function hideModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.remove('show');
    document.body.style.overflow = '';
  }
}

function showBurgerModal(burger) {
  const modalBody = document.getElementById('modal-body');
  if (!modalBody) return;
  
  const modalContent = `
    <div class="burger-modal__content">
      <img src="${burger.image}" alt="${burger.name}" class="burger-modal__image" onerror="this.style.display='none'">
      <h2 class="burger-modal__name">${burger.name}</h2>
      <p class="burger-modal__description">${burger.description}</p>
      <div class="burger-modal__rating">${generateStars(burger.rating)} (${burger.rating})</div>
      <div class="burger-modal__ingredients">
        <h4>Ingredients:</h4>
        <div class="ingredient-list">
          ${burger.ingredients.map(ingredient => `<span class="ingredient-tag">${ingredient}</span>`).join('')}
        </div>
      </div>
      <div class="burger-modal__footer">
        <div class="burger-modal__price">$${formatPrice(burger.price)}</div>
        <button class="btn btn--primary" onclick="addToCartFromModal(${burger.id}); hideModal('burger-modal')">
          Add to Cart
        </button>
      </div>
    </div>
  `;
  
  modalBody.innerHTML = modalContent;
  showModal('burger-modal');
}

function addToCartFromModal(burgerId) {
  const burger = burgerData.burgers.find(b => b.id === burgerId);
  if (burger) {
    addToCart(burger);
  }
}

// Render Functions
function renderFeaturedBurgers() {
  const featuredGrid = document.getElementById('featured-grid');
  if (!featuredGrid) return;
  
  featuredGrid.innerHTML = burgerData.burgers.map(burger => `
    <div class="burger-card" onclick="openBurgerModal(${burger.id})">
      <div class="burger-card__image">
        <img src="${burger.image}" alt="${burger.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x300/FF8C00/FFFFFF?text=${encodeURIComponent(burger.name)}'">
        ${burger.rating >= 4.8 ? '<div class="burger-card__badge">Popular</div>' : ''}
      </div>
      <div class="burger-card__content">
        <h3 class="burger-card__name">${burger.name}</h3>
        <p class="burger-card__description">${burger.description}</p>
        <div class="burger-card__footer">
          <div class="burger-card__price">$${formatPrice(burger.price)}</div>
          <div class="burger-card__rating">${generateStars(burger.rating)}</div>
        </div>
        <button class="btn btn--accent burger-card__add" onclick="event.stopPropagation(); addToCartQuick(${burger.id})">
          Quick Add
        </button>
      </div>
    </div>
  `).join('');
}

function renderMenuCategory(category) {
  const menuContent = document.getElementById('menu-content');
  if (!menuContent) return;
  
  const items = burgerData[category] || [];
  
  menuContent.innerHTML = items.map(item => `
    <div class="burger-card" ${category === 'burgers' ? `onclick="openBurgerModal(${item.id})"` : ''}>
      <div class="burger-card__image">
        <img src="${item.image}" alt="${item.name}" loading="lazy" onerror="this.src='https://via.placeholder.com/400x300/FF8C00/FFFFFF?text=${encodeURIComponent(item.name)}'">
      </div>
      <div class="burger-card__content">
        <h3 class="burger-card__name">${item.name}</h3>
        <p class="burger-card__description">${item.description}</p>
        <div class="burger-card__footer">
          <div class="burger-card__price">$${formatPrice(item.price)}</div>
          ${item.rating ? `<div class="burger-card__rating">${generateStars(item.rating)}</div>` : ''}
        </div>
        <button class="btn btn--accent burger-card__add" onclick="event.stopPropagation(); addToCartById(${item.id}, '${category}')">
          Add to Cart
        </button>
      </div>
    </div>
  `).join('');
}

function openBurgerModal(burgerId) {
  const burger = burgerData.burgers.find(b => b.id === burgerId);
  if (burger) {
    showBurgerModal(burger);
  }
}

function addToCartQuick(burgerId) {
  const burger = burgerData.burgers.find(b => b.id === burgerId);
  if (burger) {
    addToCart(burger);
  }
}

function addToCartById(itemId, category) {
  const items = burgerData[category] || [];
  const item = items.find(i => i.id === itemId);
  if (item) {
    addToCart(item);
  }
}

// Testimonial Functions
function rotateTestimonials() {
  const testimonials = document.querySelectorAll('.testimonial');
  if (testimonials.length === 0) return;
  
  testimonials.forEach(testimonial => testimonial.classList.remove('active'));
  
  currentTestimonial = (currentTestimonial + 1) % testimonials.length;
  if (testimonials[currentTestimonial]) {
    testimonials[currentTestimonial].classList.add('active');
  }
}

// Event Handler Functions
function handleHeaderScroll() {
  const header = document.getElementById('header');
  if (header) {
    const scrollY = window.scrollY;
    if (scrollY > 100) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }
}

function handleScrollAnimations() {
  const elements = document.querySelectorAll('.feature, .burger-card, .section__title');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
}

function createRipple(event, button) {
  const ripple = document.createElement('span');
  ripple.classList.add('btn__ripple');
  
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  const x = event.clientX - rect.left - size / 2;
  const y = event.clientY - rect.top - size / 2;
  
  ripple.style.width = ripple.style.height = size + 'px';
  ripple.style.left = x + 'px';
  ripple.style.top = y + 'px';
  
  button.appendChild(ripple);
  
  setTimeout(() => {
    ripple.remove();
  }, 600);
}

// Initialize Functions
function setupEventListeners() {
  // Scroll Events
  window.addEventListener('scroll', () => {
    handleHeaderScroll();
    handleScrollAnimations();
  });
  
  // Cart Events
  const cartIcon = document.getElementById('cart-icon');
  const cartClose = document.getElementById('cart-close');
  const cartSidebar = document.getElementById('cart-sidebar');
  
  if (cartIcon && cartSidebar) {
    cartIcon.addEventListener('click', () => {
      cartSidebar.classList.add('open');
    });
  }
  
  if (cartClose && cartSidebar) {
    cartClose.addEventListener('click', () => {
      cartSidebar.classList.remove('open');
    });
  }
  
  // Modal Events
  const modalOverlay = document.getElementById('modal-overlay');
  const modalClose = document.getElementById('modal-close');
  const checkoutOverlay = document.getElementById('checkout-overlay');
  const checkoutModalClose = document.getElementById('checkout-modal-close');
  
  if (modalOverlay) {
    modalOverlay.addEventListener('click', () => {
      hideModal('burger-modal');
    });
  }
  
  if (modalClose) {
    modalClose.addEventListener('click', () => {
      hideModal('burger-modal');
    });
  }
  
  if (checkoutOverlay) {
    checkoutOverlay.addEventListener('click', () => {
      hideModal('checkout-modal');
    });
  }
  
  if (checkoutModalClose) {
    checkoutModalClose.addEventListener('click', () => {
      hideModal('checkout-modal');
    });
  }
  
  // Checkout Events
  const checkoutBtn = document.getElementById('checkout-btn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      if (cartSidebar) cartSidebar.classList.remove('open');
      showModal('checkout-modal');
    });
  }
  
  // Menu Tab Events
  document.querySelectorAll('.menu__tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.menu__tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      
      const category = tab.getAttribute('data-category');
      renderMenuCategory(category);
    });
  });
  
  // Form Events
  const checkoutForm = document.getElementById('checkout-form');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const loadingOverlay = document.getElementById('loading-overlay');
      if (loadingOverlay) loadingOverlay.classList.add('show');
      
      setTimeout(() => {
        if (loadingOverlay) loadingOverlay.classList.remove('show');
        hideModal('checkout-modal');
        cart = [];
        updateCartUI();
        renderCartItems();
        alert('Order placed successfully! You will receive a confirmation email shortly.');
      }, 2000);
    });
  }
  
  const newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const loadingOverlay = document.getElementById('loading-overlay');
      if (loadingOverlay) loadingOverlay.classList.add('show');
      
      setTimeout(() => {
        if (loadingOverlay) loadingOverlay.classList.remove('show');
        alert('Thank you for subscribing! Check your email for your 10% off coupon.');
        e.target.reset();
      }, 1000);
    });
  }
  
  // Button Ripple Events
  document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn')) {
      createRipple(e, e.target);
    }
  });
  
  // Navigation Events
  document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        scrollToSection(href.substring(1));
      }
    });
  });
  
  // Hero CTA Event
  const heroCTA = document.querySelector('.hero__cta');
  if (heroCTA) {
    heroCTA.addEventListener('click', () => {
      scrollToSection('menu');
    });
  }
  
  // Close modals with Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      hideModal('burger-modal');
      hideModal('checkout-modal');
      const cartSidebar = document.getElementById('cart-sidebar');
      if (cartSidebar) cartSidebar.classList.remove('open');
    }
  });
}

// Initialize Application
function init() {
  console.log('Initializing BurgerCraft App...');
  
  // Initial render
  renderFeaturedBurgers();
  renderMenuCategory('burgers');
  updateCartUI();
  
  // Setup event listeners
  setupEventListeners();
  
  // Start testimonial rotation
  setInterval(rotateTestimonials, 5000);
  
  // Initialize scroll animations
  setTimeout(handleScrollAnimations, 100);
  
  // Add initial animation classes
  document.querySelectorAll('.feature, .burger-card').forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'all 0.6s ease-out';
  });
  
  console.log('BurgerCraft App initialized successfully!');
}

// Global Functions (accessible from HTML)
window.scrollToSection = scrollToSection;
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.updateItemQuantity = updateItemQuantity;
window.showBurgerModal = showBurgerModal;
window.hideModal = hideModal;
window.openBurgerModal = openBurgerModal;
window.addToCartQuick = addToCartQuick;
window.addToCartById = addToCartById;
window.addToCartFromModal = addToCartFromModal;

// Start the application when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}