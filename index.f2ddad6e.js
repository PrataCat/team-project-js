function e(e){return new Date(e).toLocaleString().slice(0,10).split(".").join("/")}function t(e){const{abstract:t,title:n,url:s,published_date:o,image_url:i,section:a,id:c}=e;return`<li class="box-news__item" data-id="${c}">\n      <p class="box-news__section">${a}</p>\n          <div class="box-news___wrap-reading">\n            <span class="box-news__reading">Alredy read</span>\n            <svg class="icon" width="18" height="18">\n              <use href="#icon-check"></use>\n            </svg> \n          </div>\n          <button id="favorite-btn" class="box-news__favorite-btn">\n              <p id="favorite-p" class="box-news__favorite-p">Add to Favorite</p>\n              <svg class="box-news__favorite-svg" width="16" height="16" id="favorite-svg">\n                <use href="#icon-heart"></use>\n              </svg>\n            </button>\n          <article>\n            <div class="box-news__thumb">\n              <img class="box-news__img" src="${i}" loading="lazy" alt="${a}" width='440'/>\n            </div>\n          <div class="box-news__wrap-title">\n            <h2 class="box-news__titel">\n              ${n}\n            </h2>\n          </div>\n          <div class="box-news__wrap-text">\n            <p class="box-news__text">\n              ${t.length>120?t.slice(0,110)+"...":t}\n            </p>\n          </div>\n          <div class="box-news__wrap">\n            <p class="box-news__data">${o}</p>\n            <a href="${s}" class="box-news__link" target="_blank" rel="noopener noreferrer nofollow">Read more</a>\n          </div>\n          </article>\n          <div class="overlay"></div>\n        </li>`}const n=document.querySelector(".box-news");n.addEventListener("click",(function(e){if(e.target.closest("BUTTON")){const t=e.target.closest("BUTTON"),n=t.closest("li").dataset.id,s=t.querySelector(".box-news__favorite-p"),i=t.querySelector(".box-news__favorite-svg");t.classList.contains("favorite")?function(e,t,n,s){for(const i of o)if(i.id===t){return void(!0&&(console.log("Удалил"),e.classList.remove("favorite"),n.classList.remove("favorite-p"),s.classList.remove("favorite-svg"),n.textContent="Add to Favorite"))}}(t,n,s,i):function(e,t,n,s){for(const i of o)if(i.id===t){return void(!0&&(console.log("Добавил"),e.classList.add("favorite"),n.classList.add("favorite-p"),s.classList.add("favorite-svg"),n.textContent="Remove from Favorite"))}}(t,n,s,i)}})),n.addEventListener("click",(function(e){e.preventDefault();let t=null,n=null;if("A"===e.target.tagName){t=e.target.closest("li").dataset.id,n=e.target.closest("li"),console.log(n),console.log("currentId - ",t);for(const e of o){if(e.id===t)return console.log("Мы нашли ID и вызываем ф-цию READ (include...)"),void n.classList.add("show");console.log("Все пропало шеф!!!")}}}));let s=c(),o=[],i=null;async function a(e){0===o.length&&(o=await e()),i=function(){const e=c();return e>1280?8:e>768?7:4}();const s=function(e,t,n){const s=(t-1)*n,o=s+n;return e.slice(s,o)}(o,1,i),a=s.map((e=>t(e)));var r;r=a,n.insertAdjacentHTML("beforeend",r.join(""))}function c(){return document.documentElement.clientWidth}window.addEventListener("resize",(function(){(s<768&&c()>=768||s>=768&&s<1280&&(c()<768||c()>=1280)||s>=1280&&c()<1280)&&a()})),a((async function(t=7){try{const n=await async function(e=7){try{if(![1,7,30].includes(e))return void console.log("incorrect period");const t=await fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/${e}.json?api-key=xiA2oqSwY7oUdkxynOuoZzJzlQ7EJz4s`);return(await t.json()).results}catch(e){console.log(e)}}(t);return n.map((t=>{const{title:n,abstract:s,published_date:o,url:i,section:a,media:c,uri:r}=t,l=c[0]?c[0]["media-metadata"][2].url:"";return{title:n,abstract:s,published_date:e(o),url:i,section:a,image_url:l,id:r.split("/")[3]}}))}catch(e){console.log(e)}}));
//# sourceMappingURL=index.f2ddad6e.js.map
