var hd=document.querySelector("header");
function sc(){hd.classList.toggle("sc",window.scrollY>10)}sc();addEventListener("scroll",sc,{passive:true});
if(document.documentElement.classList.contains("js")){
var els=document.querySelectorAll("main section:not(.hero) h2,main section:not(.hero) .lead,.card,.adv>div,.gal figure,.st li,.rv blockquote,details,.zn,.ab>img,.ct dl,form"),pc=new Map();
els.forEach(function(el){var p=el.parentElement,i=pc.get(p)||0;pc.set(p,i+1);el.style.setProperty("--d",Math.min(i,5)*.08+"s");el.classList.add("rv-i");
el.addEventListener("transitionend",function(e){if(e.propertyName==="opacity"&&el.classList.contains("in"))el.classList.remove("rv-i","in")})});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.12,rootMargin:"0px 0px -6% 0px"});
els.forEach(function(el){io.observe(el)});
var co=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;co.unobserve(e.target);var b=e.target,m=b.textContent.match(/^(\D*)(\d+)(.*)$/);if(!m)return;var n=+m[2],t0=performance.now();
(function f(t){var k=Math.min((t-t0)/1400,1);b.textContent=m[1]+Math.round(n*(1-Math.pow(1-k,3)))+m[3];if(k<1)requestAnimationFrame(f)})(t0)})},{threshold:.6});
document.querySelectorAll("[data-c]").forEach(function(b){co.observe(b)})}
var mb=document.getElementById("mb"),nv=document.getElementById("nav");
mb.onclick=function(){var o=nv.classList.toggle("on");mb.setAttribute("aria-expanded",o)};
nv.onclick=function(e){if(e.target.tagName==="A"){nv.classList.remove("on");mb.setAttribute("aria-expanded","false")}};
document.getElementById("fm").onsubmit=function(ev){ev.preventDefault();
var g=function(i){return document.getElementById(i)},ok=g("ok");
if(!g("n").value.trim()||!g("t").value.trim()||!/^\S+@\S+\.\S+$/.test(g("e").value)||!g("m").value.trim()||!g("c").checked){ok.textContent="Merci de remplir les champs obligatoires (*), avec un e-mail valide, et d’accepter l’utilisation de vos données.";return}
var b="Nom : "+g("n").value+"\nTéléphone : "+g("t").value+"\nE-mail : "+g("e").value+"\nVille : "+g("v").value+"\nProfil : "+g("p").value+"\nSolution : "+g("s").value+"\n\n"+g("m").value;
location.href="mailto:info@homepassion.be?subject="+encodeURIComponent("Demande de devis – "+g("s").value)+"&body="+encodeURIComponent(b);
ok.textContent="Votre application de messagerie s’ouvre avec votre demande. Envoyez-la pour finaliser."};
