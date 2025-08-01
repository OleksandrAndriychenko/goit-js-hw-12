import{a as w,S as C,i as p}from"./assets/vendor-Dy2ZTtfi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function a(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=a(r);fetch(r.href,o)}})();async function h(e,t){const a="51351700-57b4425fb1f1cd66a3797fddb",n="https://pixabay.com/api/",r=new URLSearchParams({key:a,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15});try{return(await w.get(`${n}?${r}`)).data}catch(o){console.error("Помилка при отриманні зображень:",o)}}let u=null;const L=document.querySelector(".gallery");function q(e){return e.map(({webformatURL:t,largeImageURL:a,tags:n,likes:r,views:o,comments:l,downloads:b})=>`
        <li class="gallery-card">
            <a class="gallery-link" href=${a}>
            <img
                class="gallery-image"
                src=${t}
                alt=${n}
            /></a>
            <div class="note">
                <div class="likes">
                <h3>likes</h3>
                <h3>${r}</h3>
                </div>
                <div class="views">
                <h3>views</h3>
                <h3>${o}</h3>
                </div>
                <div class="comments">
                <h3>comments</h3>
                <h3>${l}</h3>
                </div>
                <div class="downloads">
                <h3>downloads</h3>
                <h3>${b}</h3>
                </div>
            </div>
        </li>
    `).join("")}function x(){u?u.refresh():u=new C(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,animationSpeed:300,loop:!0,showCounter:!0})}function B(){L.innerHTML=""}function m(e){L.insertAdjacentHTML("beforeend",q(e)),x()}function g(){const e=document.querySelector(".loadSpan");e&&e.classList.add("loader")}function d(){const e=document.querySelector(".loadSpan");e&&e.classList.remove("loader")}function f(){const e=document.querySelector(".nextBtn");e&&e.classList.add("hidden")}function P(){const e=document.querySelector(".nextBtn");e&&e.classList.remove("hidden")}const E=document.querySelector(".form"),$=document.querySelector(".nextBtn");let i=1,y,c;function s(){return p.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff"})}function S(){return p.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff"})}function v(){const e=document.querySelector(".gallery-card");if(!e)return;const t=e.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}f();d();E.addEventListener("submit",M);async function M(e){if(i=1,e.preventDefault(),B(),g(),c=e.target.elements["search-text"].value.trim(),!c){p.error({title:"Error",message:"Please, enter your request.",position:"topRight",backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff"}),d();return}try{const t=await h(c,i);t.hits.length<=0?(s(),f()):(m(t.hits),y=Math.ceil(t.totalHits/t.hits.length),y<=1?(f(),S()):P())}catch{s()}finally{d()}}$.addEventListener("click",O);async function O(e){if(i+=1,i>=y){g();try{const t=await h(c,i);t.hits.length<=0?s():(m(t.hits),v())}catch{s()}finally{d(),f(),S()}}else{g();try{const t=await h(c,i);t.hits.length<=0?s():(m(t.hits),v())}catch{s()}finally{d()}}}
//# sourceMappingURL=index.js.map
