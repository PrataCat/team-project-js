!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},a=e.parcelRequired7e4;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in r){var a=r[e];delete r[e];var n={id:e,exports:{}};return t[e]=n,a.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},e.parcelRequired7e4=a),a("i8Q71");var n=a("aGx0e"),o=a("iF1nq"),i=a("cHsZg"),l=(document.querySelector(".footer"),document.querySelector(".header"),document.querySelector(".wrap-box ")),s=document.querySelector(".loader-container");function c(e){var t=document.querySelector(".wrap-box"),r='<div data-date="'.concat(e,'" class="dateList-wrap">\n    <div class="span-wrap">\n      <span class="date-span open">').concat(e,'<span class="arrow"></span></span>\n    </div>\n    <ul class="wrap-list box-news open" id="').concat(e,'"></ul>\n  </div>');t.insertAdjacentHTML("afterbegin",r)}function d(e){return(0,n.loadReadStorage)()[e].map((function(e){e.abstract,e.title,e.url;var t=e.published_date;e.image_url,e.section,e.id,t.split("-").reverse().join("/");return(0,o.creatCardMarkup)(e)}))}function u(){var e=(0,n.loadReadStorage)();return Object.values(e).flat()}!function(){var e=(0,n.loadReadStorage)(),t=Object.keys(e);if(Object.keys(e).length){var r=!0,a=!1,o=void 0;try{for(var i,s=t[Symbol.iterator]();!(r=(i=s.next()).done);r=!0){var u=i.value;0===e[u].length&&(delete e[u],localStorage.setItem("read",JSON.stringify(e)),location.reload()),c(u)}}catch(e){a=!0,o=e}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}var f=!0,v=!1,y=void 0;try{for(var p,m=Object.keys(e)[Symbol.iterator]();!(f=(p=m.next()).done);f=!0){var g=p.value,w=(document.querySelector('[data-date="'.concat(g,'"]')),document.getElementById("".concat(g))),b=d(g);w.insertAdjacentHTML("beforeend",b.join(""))}}catch(e){v=!0,y=e}finally{try{f||null==m.return||m.return()}finally{if(v)throw y}}}else S="The read news list is empty",h='<li class="no-results-wrap"><p class="no-results-text">'.concat(S,'</p><span class="no-results-bgr"></span></li>'),l.innerHTML=h;var S,h}(),setTimeout((function(){s.classList.add("is-hidden")}),1e3),document.querySelectorAll(".date-span").forEach((function(e){e.addEventListener("click",(function(){var t=this.parentElement.parentElement.querySelector("ul").id,r=document.getElementById(t);e.querySelector(".arrow").classList.toggle("arrow-bot"),r.classList.toggle("open")}))})),l.addEventListener("click",(function(e){if(e.target.closest("BUTTON")){var t=e.target.closest("BUTTON"),r=t.closest("li").dataset.id,a=t.querySelector(".box-news__favorite-p"),n=t.querySelector(".box-news__favorite-svg");t.classList.contains("favorite")?function(e,t,r,a){var n=!0,o=!1,l=void 0;try{for(var s,c=u()[Symbol.iterator]();!(n=(s=c.next()).done);n=!0){var d=s.value;if(d.id===t)return void((0,i.excludeFavoriteNew)(d.id)&&(e.classList.remove("favorite"),r.classList.remove("favorite-p"),a.classList.remove("favorite-svg"),r.textContent="Add to Favorite"))}}catch(e){o=!0,l=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw l}}}(t,r,a,n):function(e,t,r,a){var n=!0,o=!1,l=void 0;try{for(var s,c=u()[Symbol.iterator]();!(n=(s=c.next()).done);n=!0){var d=s.value;if(d.id===t)return void((0,i.includeFavoriteNew)(d)&&(e.classList.add("favorite"),r.classList.add("favorite-p"),a.classList.add("favorite-svg"),r.textContent="Remove from Favorite"))}}catch(e){o=!0,l=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw l}}}(t,r,a,n)}}))}();
//# sourceMappingURL=read-main.27a91bba.js.map
