/* ============================================================
   Import AutoCare – scripts.js
   ============================================================ */

(function () {
  'use strict';

  /* ── Mobile nav toggle ─────────────────────────────────── */
  const hamburger = document.getElementById('hamburger');
  const mainNav   = document.getElementById('mainNav');

  if (hamburger && mainNav) {
    hamburger.addEventListener('click', function () {
      const isOpen = mainNav.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close nav when a link is clicked
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ── Years experience counter ──────────────────────────── */
  const foundedYear   = 1996;
  const currentYear   = new Date().getFullYear();
  const yearsTotal    = currentYear - foundedYear;
  const yearsEl       = document.getElementById('yearsCount');

  if (yearsEl) {
    // Animate up when scrolled into view
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          animateCount(yearsEl, 0, yearsTotal, 1500);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    observer.observe(yearsEl);
  }

  function animateCount(el, from, to, duration) {
    const start = performance.now();
    function tick(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased    = 1 - Math.pow(1 - progress, 3);
      el.textContent = Math.round(from + (to - from) * eased);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  /* ── Sticky header shadow on scroll ───────────────────── */
  const siteHeader = document.querySelector('.site-header');
  if (siteHeader) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 10) {
        siteHeader.style.boxShadow = '0 4px 20px rgba(0,0,0,.2)';
      } else {
        siteHeader.style.boxShadow = '0 2px 10px rgba(0,0,0,.12)';
      }
    });
  }

  /* ── Smooth scroll for anchor links ───────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── Fade-in sections on scroll ───────────────────────── */
  const fadeTargets = document.querySelectorAll(
    '.hero-card, .review-card, .service-item, .brand-item, .cta-card'
  );

  if ('IntersectionObserver' in window) {
    const fadeObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    fadeTargets.forEach(function (el) {
      el.classList.add('fade-in-ready');
      fadeObserver.observe(el);
    });
  }

})();
