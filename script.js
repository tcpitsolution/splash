const header=document.querySelector('#header'), menuBtn=document.querySelector('.menu-btn'), mobileMenu=document.querySelector('.mobile-menu');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>40),{passive:true});
menuBtn?.addEventListener('click',()=>{const open=mobileMenu.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open);});
mobileMenu?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{mobileMenu.classList.remove('open');menuBtn.setAttribute('aria-expanded','false')}));
window.addEventListener('load',()=>setTimeout(()=>document.querySelector('.loader').classList.add('hide'),500));

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const reviews=[...document.querySelectorAll('.review')], index=document.querySelector('#reviewIndex');let current=0;
function showReview(i){current=(i+reviews.length)%reviews.length;reviews.forEach((r,n)=>r.classList.toggle('active',n===current));index.textContent=`0${current+1} / 0${reviews.length}`}
document.querySelector('#next')?.addEventListener('click',()=>showReview(current+1));
document.querySelector('#prev')?.addEventListener('click',()=>showReview(current-1));
setInterval(()=>showReview(current+1),6500);

document.querySelector('#contactForm')?.addEventListener('submit',e=>{e.preventDefault();const success=document.querySelector('.form-success');success.classList.add('show');e.target.reset();});
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const el=document.querySelector(a.getAttribute('href'));if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth',block:'start'})}}));