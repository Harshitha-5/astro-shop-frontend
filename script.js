// E-commerce Website JavaScript

// Global Variables
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentPage = 'home';

// Sample Products Data
const products = [
    {
        id: 1,
        name: "Casual Cotton Shirt",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
        rating: 4.5,
        category: "shirts"
    },
    {
        id: 2,
        name: "Formal Business Shirt",
        price: 45.99,
        image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?w=300&h=300&fit=crop",
        rating: 4.8,
        category: "formal"
    },
    {
        id: 3,
        name: "Vintage Denim Shirt",
        price: 39.99,
        image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&h=300&fit=crop",
        rating: 4.3,
        category: "casual"
    },
    {
        id: 4,
        name: "Premium Polo Shirt",
        price: 35.99,
        image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=300&h=300&fit=crop",
        rating: 4.6,
        category: "casual"
    },
    {
        id: 5,
        name: "Classic White Shirt",
        price: 32.99,
        image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=300&h=300&fit=crop",
        rating: 4.7,
        category: "formal"
    },
    {
        id: 6,
        name: "Striped Cotton Shirt",
        price: 28.99,
        image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=300&h=300&fit=crop",
        rating: 4.4,
        category: "shirts"
    },
    {
        id: 7,
        name: "Linen Summer Shirt",
        price: 42.99,
        image: "https://images.unsplash.com/photo-1622445275576-721325763afe?w=300&h=300&fit=crop",
        rating: 4.5,
        category: "casual"
    },
    {
        id: 8,
        name: "Designer Dress Shirt",
        price: 55.99,
        image: "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=300&h=300&fit=crop",
        rating: 4.9,
        category: "formal"
    }
];

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
    updateCartBadge();
    loadFeaturedProducts();
    loadAllProducts();
    loadCartItems();
    
    // Add event listeners for forms
    setupFormListeners();
});

function initializeApp() {
    // Set active page
    showPage('home');
    
    // Update cart badge
    updateCartBadge();
    
    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Page Navigation
function showPage(pageName) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const targetPage = document.getElementById(pageName + '-page');
    if (targetPage) {
        targetPage.classList.add('active');
        targetPage.classList.add('fade-in');
    }
    
    // Update navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Find and activate current nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        if (link.textContent.toLowerCase() === pageName) {
            link.classList.add('active');
        }
    });
    
    currentPage = pageName;
    
    // Collapse mobile menu if open
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Product Functions
function loadFeaturedProducts() {
    const featuredProducts = products.slice(0, 4);
    const container = document.getElementById('featured-products');
    
    if (container) {
        container.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
    }
}

function loadAllProducts() {
    const container = document.getElementById('all-products');
    
    if (container) {
        container.innerHTML = products.map(product => createProductCard(product)).join('');
    }
}

function createProductCard(product) {
    return `
        <div class="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-info">
                    <h6 class="product-title">${product.name}</h6>
                    <div class="product-rating">
                        ${generateStarRating(product.rating)}
                    </div>
                    <div class="product-price">$${product.price}</div>
                    <button class="btn-add-cart" onclick="addToCart(${product.id})">
                        <i class="fas fa-shopping-cart me-2"></i>Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `;
}

function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// Cart Functions
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCart();
    showToast(`${product.name} added to cart!`, 'success');
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    loadCartItems();
    showToast('Item removed from cart!', 'error');
}

function updateQuantity(productId, newQuantity) {
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        updateCart();
        loadCartItems();
    }
}

function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    updateCartSummary();
}

function updateCartBadge() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const badge = document.querySelector('.cart-badge');
    if (badge) {
        badge.textContent = totalItems;
        badge.style.display = totalItems > 0 ? 'inline' : 'none';
    }
}

function loadCartItems() {
    const container = document.getElementById('cart-items');
    if (!container) return;
    
    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <h4>Your cart is empty</h4>
                <p>Add some products to get started!</p>
                <button class="btn btn-primary" onclick="showPage('shop')">Start Shopping</button>
            </div>
        `;
        return;
    }
    
    container.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-info">
                <h6 class="cart-item-title">${item.name}</h6>
                <div class="cart-item-price">$${item.price}</div>
                <div class="quantity-controls">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity - 1})">
                        <i class="fas fa-minus"></i>
                    </button>
                    <input type="number" class="quantity-input" value="${item.quantity}" 
                           onchange="updateQuantity(${item.id}, parseInt(this.value))" min="1">
                    <button class="quantity-btn" onclick="updateQuantity(${item.id}, ${item.quantity + 1})">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');
    
    updateCartSummary();
}

function updateCartSummary() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const shipping = subtotal > 0 ? 10 : 0;
    const total = subtotal + shipping;
    
    const subtotalElement = document.getElementById('cart-subtotal');
    const totalElement = document.getElementById('cart-total');
    
    if (subtotalElement) subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
    if (totalElement) totalElement.textContent = `$${total.toFixed(2)}`;
}

function checkout() {
    if (cart.length === 0) {
        showToast('Your cart is empty!', 'error');
        return;
    }
    
    // Simulate checkout process
    showToast('Checkout successful! Thank you for your order!', 'success');
    cart = [];
    updateCart();
    loadCartItems();
    
    // Redirect to home after a delay
    setTimeout(() => {
        showPage('home');
    }, 2000);
}

// Form Functions
function setupFormListeners() {
    // Contact form
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const name = this.querySelector('input[type="text"]').value;
            const email = this.querySelector('input[type="email"]').value;
            const message = this.querySelector('textarea').value;
            
            if (name && email && message) {
                showToast('Message sent successfully! We\'ll get back to you soon.', 'success');
                this.reset();
            } else {
                showToast('Please fill in all fields.', 'error');
            }
        });
    }
}

function subscribeNewsletter() {
    const emailInput = document.getElementById('newsletter-email');
    const email = emailInput.value.trim();
    
    if (!email) {
        showToast('Please enter your email address.', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showToast('Please enter a valid email address.', 'error');
        return;
    }
    
    showToast('Successfully subscribed to newsletter!', 'success');
    emailInput.value = '';
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Filter Functions (for shop page)
function filterProducts() {
    const checkboxes = document.querySelectorAll('.filter-sidebar input[type="checkbox"]:checked');
    const selectedCategories = Array.from(checkboxes).map(cb => cb.value);
    
    let filteredProducts = products;
    
    if (selectedCategories.length > 0) {
        filteredProducts = products.filter(product => 
            selectedCategories.includes(product.category)
        );
    }
    
    const container = document.getElementById('all-products');
    if (container) {
        container.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
    }
}

// Add event listeners for filter checkboxes
document.addEventListener('DOMContentLoaded', function() {
    const filterCheckboxes = document.querySelectorAll('.filter-sidebar input[type="checkbox"]');
    filterCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', filterProducts);
    });
});

// Utility Functions
function showToast(message, type = 'success') {
    // Remove existing toast
    const existingToast = document.querySelector('.toast-notification');
    if (existingToast) {
        existingToast.remove();
    }
    
    // Create new toast
    const toast = document.createElement('div');
    toast.className = `toast-notification ${type}`;
    toast.innerHTML = `
        <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'} me-2"></i>
        ${message}
    `;
    
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}

// Search Functionality (can be added later)
function searchProducts(query) {
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
    );
    
    const container = document.getElementById('all-products');
    if (container) {
        container.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
    }
}

// Mobile Menu Functions
function toggleMobileMenu() {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    navbarCollapse.classList.toggle('show');
}

// Wishlist Functions (bonus feature)
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

function addToWishlist(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    if (!wishlist.find(item => item.id === productId)) {
        wishlist.push(product);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        showToast(`${product.name} added to wishlist!`, 'success');
    } else {
        showToast('Item already in wishlist!', 'error');
    }
}

// Performance optimization: Lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading when DOM is loaded
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Smooth scroll to top functionality
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Show/hide scroll to top button
window.addEventListener('scroll', function() {
    const scrollButton = document.querySelector('.scroll-to-top');
    if (scrollButton) {
        if (window.pageYOffset > 300) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    }
});

// Local Storage Management
function clearCart() {
    cart = [];
    updateCart();
    loadCartItems();
    showToast('Cart cleared!', 'success');
}

function saveForLater(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        addToWishlist(productId);
        removeFromCart(productId);
        showToast('Item saved for later!', 'success');
    }
}

// Analytics and tracking (placeholder functions)
function trackEvent(eventName, eventData) {
    // This would typically send data to analytics service
    console.log('Event tracked:', eventName, eventData);
}

function trackPageView(pageName) {
    trackEvent('page_view', { page: pageName });
}

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    showToast('Something went wrong. Please try again.', 'error');
});

// Service Worker registration (for PWA functionality)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}