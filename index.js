import{a as L,S as b,i}from"./assets/vendor-Dy2ZTtfi.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function l(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(r){if(r.ep)return;r.ep=!0;const t=l(r);fetch(r.href,t)}})();async function h(o,e){const l="51351700-57b4425fb1f1cd66a3797fddb",n="https://pixabay.com/api/",r=new URLSearchParams({key:l,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15});try{return(await L.get(`${n}?${r}`)).data}catch{console.error("Помилка при отриманні зображень:",error)}}let u=null;const g=document.querySelector(".gallery");function C(o){return o.map(({webformatURL:e,largeImageURL:l,tags:n,likes:r,views:t,comments:c,downloads:v})=>`
        <li class="gallery-card">
            <a class="gallery-link" href=${l}>
            <img
                class="gallery-image"
                src=${e}
                alt=${n}
            /></a>
            <div class="note">
                <div class="likes">
                <h3>likes</h3>
                <h3>${r}</h3>
                </div>
                <div class="views">
                <h3>views</h3></h3>
                <h3>${t}</h3>
                </div>
                <div class="comments">
                <h3>comments</h3>
                <h3>${c}</h3>
                </div>
                <div class="downloads">
                <h3>downloads</h3>
                <h3>${v}</h3>
                </div>
            </div>
        </li>
    `).join("")}function S(){u?u.refresh():u=new b(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,animationSpeed:300,loop:!0,showCounter:!0})}function q(){g.innerHTML=""}function m(o){g.insertAdjacentHTML("beforeend",C(o)),S()}function y(){document.querySelector(".hiden").classList.add("loader")}function s(){document.querySelector(".hiden").classList.remove("loader")}function p(){document.querySelector(".nextBtn").classList.add("hidden")}function x(){document.querySelector(".nextBtn").classList.remove("hidden")}const P=document.querySelector(".form"),B=document.querySelector(".nextBtn");let a=1,d,f;p();s();P.addEventListener("submit",w);function w(o){if(a=1,o.preventDefault(),q(),y(),f=o.target.elements["search-text"].value.trim(),f)h(f,a).then(e=>{e.length<=0?(s(),i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff"})):(s(),m(e.hits),d=e.total/e.hits.length,a+=1,x())}).catch(e=>{s(),i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff"})});else{i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff"}),s();return}}B.addEventListener("click",E);function E(o){a<d?(y(),h(f,a).then(e=>{e.length<=0?(s(),i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff"})):(s(),m(e.hits),d=e.total/e.hits.length,a+=1)}).catch(e=>{s(),i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff"})})):(p(),i.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff"}))}
//# sourceMappingURL=index.js.map
