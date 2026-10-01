const links=[...document.querySelectorAll('.nav-links a')];
const sections=links.map(a=>document.querySelector(a.getAttribute('href'))).filter(Boolean);
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){links.forEach(l=>l.classList.remove('active'));const a=links.find(l=>l.getAttribute('href')==='#'+entry.target.id);if(a)a.classList.add('active')}})},{rootMargin:'-35% 0px -55% 0px'});sections.forEach(s=>observer.observe(s));
