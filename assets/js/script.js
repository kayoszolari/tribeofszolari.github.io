// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');

if (toggle) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.style.display === 'flex';
    nav.style.display = isOpen ? 'none' : 'flex';
  });
}

// Optional: smooth scroll offset for sticky header (simple approach)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const targetId = a.getAttribute('href').slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.pageYOffset - 60;
      window.scrollTo({ top: y, behavior: 'smooth' });
      if (window.innerWidth < 768) nav.style.display = 'none';
    }
  });
});
