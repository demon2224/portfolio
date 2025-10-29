// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle?.addEventListener('click', () => navLinks.classList.toggle('open'));

// Year
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal on scroll
const reveals = [...document.querySelectorAll('.reveal')];
const onScroll = () => {
  const trigger = window.innerHeight * 0.85;
  reveals.forEach(el => {
    const rect = el.getBoundingClientRect();
    if(rect.top < trigger) el.classList.add('visible');
  });
};
document.addEventListener('scroll', onScroll);
onScroll();
