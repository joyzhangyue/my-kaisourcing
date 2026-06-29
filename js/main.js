// Navigation scroll effect
const nav = document.querySelector('.nav');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// Scroll reveal animations
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

revealElements.forEach(el => revealObserver.observe(el));

// FAQ accordion
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');
  question.addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    faqItems.forEach(i => i.classList.remove('active'));
    if (!isActive) item.classList.add('active');
  });
});

// Contact form
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  contactForm.style.display = 'none';
  formSuccess.classList.add('show');
});

// Counter animation for stats
function animateCounters() {
  const stats = document.querySelectorAll('.hero-stat-value');
  stats.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-target'));
    if (!target) return;
    let current = 0;
    const increment = Math.ceil(target / 60);
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      stat.textContent = current + (stat.getAttribute('data-suffix') || '');
    }, 25);
  });
}

// Trigger counter when hero is visible
const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
  const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
        heroObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  heroObserver.observe(heroStats);
}

// Trust strip counter animation
function animateTrustCounters() {
  const stats = document.querySelectorAll('.trust-item-value');
  stats.forEach(stat => {
    const target = parseInt(stat.getAttribute('data-target'));
    if (!target) return;
    let current = 0;
    const increment = Math.ceil(target / 60);
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      stat.textContent = current + '+';
    }, 25);
  });
}

const trustStrip = document.querySelector('.trust-strip');
if (trustStrip) {
  const trustObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateTrustCounters();
        trustObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });
  trustObserver.observe(trustStrip);
}

// Page transition - scroll to top on load
window.addEventListener('pageshow', function() {
  setTimeout(() => { window.scrollTo(0, 0); }, 0);
});
