import{a as b,S as w,i as m}from"./assets/vendor-Dy2ZTtfi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function i(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(r){if(r.ep)return;r.ep=!0;const o=i(r);fetch(r.href,o)}})();async function y(e,t){const i="51351700-57b4425fb1f1cd66a3797fddb",n="https://pixabay.com/api/",r=new URLSearchParams({key:i,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15});try{return(await b.get(`${n}?${r}`)).data}catch(o){console.error("Помилка при отриманні зображень:",o)}}let f=null;const g=document.querySelector(".gallery");function x(e){return e.map(({webformatURL:t,largeImageURL:i,tags:n,likes:r,views:o,comments:s,downloads:S})=>`
        <li class="gallery-card">
            <a class="gallery-link" href=${i}>
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
                <h3>${s}</h3>
                </div>
                <div class="downloads">
                <h3>downloads</h3>
                <h3>${S}</h3>
                </div>
            </div>
        </li>
    `).join("")}function B(){f?f.refresh():f=new w(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,animationSpeed:300,loop:!0,showCounter:!0})}function q(){g.innerHTML=""}function p(e){g.insertAdjacentHTML("beforeend",x(e)),B()}function v(){const e=document.querySelector(".loadSpan");e&&e.classList.add("loader")}function d(){const e=document.querySelector(".loadSpan");e&&e.classList.remove("loader")}function u(){const e=document.querySelector(".nextBtn");e&&e.classList.add("hidden")}function C(){const e=document.querySelector(".nextBtn");e&&e.classList.remove("hidden")}const P=document.querySelector(".form"),$=document.querySelector(".nextBtn");let a=1,h,c;function l(){return m.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff"})}function L(){return m.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff"})}function E(){const e=document.querySelector(".gallery-card");if(!e)return;const t=e.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}u();d();P.addEventListener("submit",M);async function M(e){if(a=1,e.preventDefault(),q(),v(),c=e.target.elements["search-text"].value.trim(),!c){l(),d();return}try{const t=await y(c,a);t.hits.length<=0?(l(),u()):(p(t.hits),h=Math.ceil(t.totalHits/t.hits.length),h<=1?(u(),L()):C())}catch{l()}finally{d()}}$.addEventListener("click",O);async function O(e){if(a+=1,a<=h){v();try{const t=await y(c,a);t.hits.length<=0?l():(p(t.hits),E())}catch{l()}finally{d()}}else u(),L()}
//# sourceMappingURL=index.js.map
