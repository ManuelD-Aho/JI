import{g as c}from"../index.js";document.addEventListener("DOMContentLoaded",()=>{b.init();const i=document.querySelector(".header");let o=0;window.addEventListener("scroll",()=>{const r=window.pageYOffset;r>680?i.classList.add("scrolled"):i.classList.remove("scrolled"),r>o&&r>100?i.classList.add("hidden"):i.classList.remove("hidden"),o=r});const s=document.querySelectorAll(".carte-mpc");let t=null,n=document.querySelector(".overlay"),e=n.querySelector(".detail-container"),l,a;e?(l=e.querySelector(".close-btn"),a=e.querySelector(".detail-content"),l||(l=document.createElement("button"),l.className="close-btn",l.innerHTML="&times;",a?e.insertBefore(l,a):e.appendChild(l)),a||(a=document.createElement("div"),a.className="detail-content",e.appendChild(a))):(e=document.createElement("div"),e.className="detail-container",l=document.createElement("button"),l.className="close-btn",l.innerHTML="&times;",e.appendChild(l),a=document.createElement("div"),a.className="detail-content",e.appendChild(a),n.appendChild(e)),s.forEach(r=>{r.addEventListener("click",function(){h(r)})}),l&&l.addEventListener("click",u),n.addEventListener("click",function(r){r.target===n&&u()});function h(r){var f,p;if(!n||!a||!e)return;t=r;const m=r.querySelector(".overlay-details-content");if(a.innerHTML="",m)Array.from(m.children).forEach(d=>{a.appendChild(d.cloneNode(!0))});else{a.innerHTML="<p>Détails non disponibles.</p>";const d=((f=r.querySelector("h2"))==null?void 0:f.textContent)||"Titre",v=((p=r.querySelector("p"))==null?void 0:p.textContent)||"Description non fournie.";a.innerHTML=`<h2>${d}</h2><p>${v}</p>`}c.set(n,{display:"block"}),c.timeline().to(n,{duration:.3,autoAlpha:1}).to(e,{duration:.5,autoAlpha:1,y:0,scale:1,ease:"back.out(1.2)"},"-=0.1")}function u(){if(!n||!t||!e)return;c.timeline({onComplete:()=>{c.set(n,{display:"none"}),t=null}}).to(e,{duration:.3,autoAlpha:0,y:-20,scale:.95,ease:"power2.in"}).to(n,{duration:.2,autoAlpha:0},"-=0.1")}});const b={init(){this.initSmoothScroll(),this.initAnimationsScroll(),this.initBurgerMenu(),this.initFAQ()},initSmoothScroll(){document.querySelectorAll('a[href^="#"]').forEach(o=>{o.addEventListener("click",function(s){s.preventDefault();const t=document.querySelector(this.getAttribute("href"));t&&t.scrollIntoView({behavior:"smooth",block:"start"})})})},initAnimationsScroll(){const i={threshold:.1},o=new IntersectionObserver((t,n)=>{t.forEach(e=>{e.isIntersecting&&(e.target.classList.add("animate"),n.unobserve(e.target))})},i);document.querySelectorAll(".carte-activite, .membre-equipe, .faq-item").forEach(t=>o.observe(t))},initBurgerMenu(){const i=document.querySelector(".hamburger"),o=i?i.querySelector("i"):null,s=document.querySelector(".menu-mobile");i&&s&&o&&(i.addEventListener("click",t=>{t.stopPropagation(),s.classList.toggle("open");const n=s.classList.contains("open");o.className=n?"fa-solid fa-xmark":"fa-solid fa-bars"}),s.addEventListener("click",t=>{t.stopPropagation()}),document.addEventListener("click",()=>{s.classList.contains("open")&&(s.classList.remove("open"),o.className="fa-solid fa-bars")}))},initFAQ(){const i=document.querySelectorAll(".faq-item");i.forEach(o=>{const s=o.querySelector(".faq-question");s&&s.addEventListener("click",t=>{t.stopPropagation(),i.forEach(n=>{if(n!==o){n.classList.remove("active");const e=n.querySelector(".faq-question");e&&e.setAttribute("aria-expanded","false")}}),o.classList.toggle("active"),s.setAttribute("aria-expanded",o.classList.contains("active")?"true":"false")}),o.addEventListener("click",t=>t.stopPropagation())})}};
