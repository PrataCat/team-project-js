var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=e.parcelRequire6b37;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var r=o[e];delete o[e];var n={id:e,exports:{}};return t[e]=n,r.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){o[e]=t},e.parcelRequire6b37=r),r("bUb57");var n=r("2sH7u"),s=r("lAcMk"),i=r("9Ka1f");const a=document.querySelector(".box-news"),l=document.querySelector(".footer"),c=document.querySelector(".header");function d(){const e=document.documentElement.clientWidth;return e>1280?8:e>768?7:4}function u(e){if(function(e){const t=`<div class="no-results-wrap"><p class="no-results-text">${e}</p><span class="no-results-bgr"></span></div>`;a.innerHTML=t}("The favorite news list is empty"),"object"!=typeof e)return;if(!1===Array.isArray(e))return;let t=d();const o=function(e,t,o){const r=(t-1)*o,n=r+o;return e.slice(r,n)}((0,n.loadAllFavorites)(),1,t);if(0===o.length)l.classList.add("footer-margin"),c.classList.add("header-margin");else{const e=o.map((e=>(0,s.creatCardMarkup)(e)));a.innerHTML=e.join("")}}a.addEventListener("click",(function(e){const t=e.target.classList.value;if("box-news__favorite-p"===t||"box-news__favorite-svg"===t){const t=e.target.closest("BUTTON").closest("li").dataset.id;(0,n.excludeFavoriteNew)(t),a.innerHTML="",u((0,n.loadAllFavorites)())}if("A"===e.target.tagName){let t=e.target.closest("li").dataset.id,o=e.target.closest("li");const r=(0,n.loadAllFavorites)();for(const e of r)if(e.id===t)return(0,i.writeReadStorage)(e),void o.classList.add("show")}})),u((0,n.loadAllFavorites)());
//# sourceMappingURL=favorite-main.88258ecf.js.map