// ========================================
// Navigation & Scroll Effects
// ========================================

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger icon
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(7px, 7px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking nav links
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ========================================
// Smooth Scrolling
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// Contact Form Handling
// ========================================

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        company: document.getElementById('company').value,
        interest: document.getElementById('interest').value,
        message: document.getElementById('message').value,
        timestamp: new Date().toISOString()
    };
    
    // Store in localStorage for now (will implement backend later)
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    submissions.push(formData);
    localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
    
    // Track analytics
    trackEvent('form_submission', {
        interest: formData.interest
    });
    
    // Show success message
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    contactForm.reset();
    
    // TODO: Implement actual form submission to backend
    // Example:
    // try {
    //     const response = await fetch('/api/contact', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(formData)
    //     });
    //     
    //     if (response.ok) {
    //         alert('Message sent successfully!');
    //         contactForm.reset();
    //     } else {
    //         alert('Error sending message. Please try again.');
    //     }
    // } catch (error) {
    //     console.error('Error:', error);
    //     alert('Error sending message. Please try again.');
    // }
});

// ========================================
// Analytics Tracking
// ========================================

// Initialize analytics data storage
if (!localStorage.getItem('pageViews')) {
    localStorage.setItem('pageViews', JSON.stringify([]));
}

if (!localStorage.getItem('events')) {
    localStorage.setItem('events', JSON.stringify([]));
}

// Track page view
function trackPageView() {
    const pageView = {
        url: window.location.href,
        referrer: document.referrer,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        screenSize: `${window.innerWidth}x${window.innerHeight}`
    };
    
    const pageViews = JSON.parse(localStorage.getItem('pageViews') || '[]');
    pageViews.push(pageView);
    localStorage.setItem('pageViews', JSON.stringify(pageViews));
    
    // Log to console (for development)
    console.log('Page view tracked:', pageView);
}

// Track custom events
function trackEvent(eventName, eventData = {}) {
    const event = {
        name: eventName,
        data: eventData,
        timestamp: new Date().toISOString(),
        url: window.location.href
    };
    
    const events = JSON.parse(localStorage.getItem('events') || '[]');
    events.push(event);
    localStorage.setItem('events', JSON.stringify(events));
    
    // Log to console (for development)
    console.log('Event tracked:', event);
}

// Track page view on load
trackPageView();

// Track product card clicks
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
        const productName = card.querySelector('h3').textContent;
        trackEvent('product_card_click', { product: productName });
    });
});

// Track CTA button clicks
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonText = button.textContent.trim();
        const buttonHref = button.getAttribute('href');
        trackEvent('cta_click', { 
            text: buttonText,
            href: buttonHref 
        });
    });
});

// Track social link clicks
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        const platform = link.querySelector('i').className;
        trackEvent('social_click', { platform });
    });
});

// Track time on page
let pageStartTime = Date.now();

window.addEventListener('beforeunload', () => {
    const timeOnPage = Math.round((Date.now() - pageStartTime) / 1000);
    trackEvent('page_exit', { 
        timeOnPage: timeOnPage,
        scrollDepth: getScrollDepth()
    });
});

// Get scroll depth percentage
function getScrollDepth() {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollDepth = (scrollTop / (documentHeight - windowHeight)) * 100;
    return Math.round(scrollDepth);
}

// Track scroll depth at intervals
let maxScrollDepth = 0;
window.addEventListener('scroll', () => {
    const currentScrollDepth = getScrollDepth();
    if (currentScrollDepth > maxScrollDepth) {
        maxScrollDepth = currentScrollDepth;
        
        // Track milestone scroll depths
        if (maxScrollDepth >= 25 && maxScrollDepth < 30) {
            trackEvent('scroll_depth', { depth: '25%' });
        } else if (maxScrollDepth >= 50 && maxScrollDepth < 55) {
            trackEvent('scroll_depth', { depth: '50%' });
        } else if (maxScrollDepth >= 75 && maxScrollDepth < 80) {
            trackEvent('scroll_depth', { depth: '75%' });
        } else if (maxScrollDepth >= 95) {
            trackEvent('scroll_depth', { depth: '100%' });
        }
    }
});

// ========================================
// Intersection Observer for Animations
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.product-card, .value-item, .tech-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ========================================
// Utility Functions
// ========================================

// Get analytics summary (for admin dashboard)
function getAnalyticsSummary() {
    const pageViews = JSON.parse(localStorage.getItem('pageViews') || '[]');
    const events = JSON.parse(localStorage.getItem('events') || '[]');
    const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
    
    return {
        totalPageViews: pageViews.length,
        totalEvents: events.length,
        totalSubmissions: submissions.length,
        pageViews: pageViews,
        events: events,
        submissions: submissions
    };
}

// Clear analytics data (for testing)
function clearAnalytics() {
    localStorage.removeItem('pageViews');
    localStorage.removeItem('events');
    localStorage.removeItem('contactSubmissions');
    console.log('Analytics data cleared');
}

// Export analytics summary as JSON
function exportAnalytics() {
    const summary = getAnalyticsSummary();
    const dataStr = JSON.stringify(summary, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `itoolbox-analytics-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
    URL.revokeObjectURL(url);
}

// Make utility functions available in console for testing
window.getAnalyticsSummary = getAnalyticsSummary;
window.clearAnalytics = clearAnalytics;
window.exportAnalytics = exportAnalytics;

console.log('Landing-Page-v2 Loaded');
console.log('Available commands: getAnalyticsSummary(), clearAnalytics(), exportAnalytics()');
