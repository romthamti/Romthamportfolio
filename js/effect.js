
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
},{ threshold: 0.2 });

document.querySelectorAll('header, section').forEach(el => {
  el.classList.add('hidden');
  observer.observe(el);
});

const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(sec => {
    if (scrollY >= sec.offsetTop - 120) {
      current = sec.id;
    }
  });

  document.querySelectorAll('nav a').forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + current) {
      a.classList.add('active');
    }
  });
});
