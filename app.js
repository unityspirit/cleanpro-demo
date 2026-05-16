const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => { navbar.classList.toggle('scrolled', window.scrollY > 50); });
const container = document.getElementById('particles');
for (let i = 0; i < 25; i++) {
  const p = document.createElement('div'); p.classList.add('particle');
  const size = Math.random() * 4 + 2;
  p.style.cssText = `width:${size}px;height:${size}px;left:${Math.random()*100}%;animation-duration:${Math.random()*15+10}s;animation-delay:${Math.random()*10}s;`;
  container.appendChild(p);
}
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.style.opacity='1'; e.target.style.transform='translateY(0)'; } });
}, {threshold:0.1});
document.querySelectorAll('.service-card,.step,.price-card,.review-card,.ba-card').forEach(el => {
  el.style.opacity='0'; el.style.transform='translateY(30px)';
  el.style.transition='opacity 0.6s ease,transform 0.6s ease';
  observer.observe(el);
});
function handleSubmit(e) {
  e.preventDefault();
  const toast = document.getElementById('success-toast');
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 4000);
  e.target.reset();
}