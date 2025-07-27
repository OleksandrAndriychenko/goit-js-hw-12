import{a as f,S as h,i as l}from"./assets/vendor-Dy2ZTtfi.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();function m(t){const o="51351700-57b4425fb1f1cd66a3797fddb",a="https://pixabay.com/api/",i=new URLSearchParams({key:o,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0});return f.get(`${a}?${i}`).then(e=>e.data.hits).catch(e=>console.log(e))}let c=null;const d=document.querySelector(".gallery");function g(t){return t.map(({webformatURL:o,largeImageURL:a,tags:i,likes:e,views:r,comments:s,downloads:u})=>`
        <li class="gallery-card">
            <a class="gallery-link" href=${a}>
            <img
                class="gallery-image"
                src=${o}
                alt=${i}
            /></a>
            <div class="note">
                <div class="likes">
                <h3>likes</h3>
                <h3>${e}</h3>
                </div>
                <div class="views">
                <h3>views</h3></h3>
                <h3>${r}</h3>
                </div>
                <div class="comments">
                <h3>comments</h3>
                <h3>${s}</h3>
                </div>
                <div class="downloads">
                <h3>downloads</h3>
                <h3>${u}</h3>
                </div>
            </div>
        </li>
    `).join("")}function y(){c?c.refresh():c=new h(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250,animationSpeed:300,loop:!0,showCounter:!0})}function p(){d.innerHTML=""}function v(t){d.innerHTML=g(t),y()}function L(){document.querySelector(".hidden").classList.add("loader")}function n(){document.querySelector(".hidden").classList.remove("loader")}document.querySelector(".gallery");const b=document.querySelector(".form");n();b.addEventListener("submit",S);function S(t){t.preventDefault(),p(),L();const o=t.target.elements["search-text"].value.trim();if(o)m(o).then(a=>{a.length<=0?(n(),l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff"})):(n(),v(a))}).catch(a=>{n(),l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff"})});else{l.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",titleColor:"#fff",messageColor:"#fff"}),n();return}}
//# sourceMappingURL=index.js.map
