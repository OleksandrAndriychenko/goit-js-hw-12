import{a as b,S as w,i as h}from"./assets/vendor-Dy2ZTtfi.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();async function g(e,t){const s="51351700-57b4425fb1f1cd66a3797fddb",i="https://pixabay.com/api/",r=new URLSearchParams({key:s,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15});try{return(await b.get(`${i}?${r}`)).data}catch(o){console.error("Помилка при отриманні зображень:",o)}}let d=null;const y=document.querySelector(".gallery");function C(e){return e.map(({webformatURL:t,largeImageURL:s,tags:i,likes:r,views:o,comments:a,downloads:S})=>`
        <li class="gallery-card">
            <a class="gallery-link" href=${s}>
            <img
                class="gallery-image"
                src=${t}
                alt=${i}
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
                <h3>${a}</h3>
                </div>
                <div class="downloads">
                <h3>downloads</h3>
                <h3>${S}</h3>
                </div>
            </div>
        </li>
    `).join("")}function q(){d?d.refresh():d=new w(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,animationSpeed:300,loop:!0,showCounter:!0})}function x(){y.innerHTML=""}function p(e){y.insertAdjacentHTML("beforeend",C(e)),q()}function v(){const e=document.querySelector(".loadSpan");e&&e.classList.add("loader")}function n(){const e=document.querySelector(".loadSpan");e&&e.classList.remove("loader")}function m(){const e=document.querySelector(".nextBtn");e&&e.classList.add("hidden")}function B(){const e=document.querySelector(".nextBtn");e&&e.classList.remove("hidden")}const P=document.querySelector(".form"),E=document.querySelector(".nextBtn");let l=1,f,c;function u(){return h.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff"})}function L(){return h.error({title:"Error",message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff"})}function $(){const e=document.querySelector(".gallery-card");if(!e)return;const t=e.getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}m();n();P.addEventListener("submit",O);function O(e){if(e.preventDefault(),x(),v(),c=e.target.elements["search-text"].value.trim(),c)g(c,l).then(t=>{t.hits.length<=0?(n(),u()):(n(),p(t.hits),f=t.totalHits/t.hits.length,f<=1?(m(),L()):B())}).catch(t=>{n(),u()});else{h.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff"}),n();return}}E.addEventListener("click",R);function R(e){l+=1,l<=f?(v(),g(c,l).then(t=>{t.hits.length<=0?(n(),u()):(n(),p(t.hits),$(),l+=1)}).catch(t=>{n(),u()})):(m(),L())}
//# sourceMappingURL=index.js.map
