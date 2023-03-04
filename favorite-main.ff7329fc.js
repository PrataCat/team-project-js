const e=document.querySelector(".box-news");function n(e){try{const n=JSON.stringify(e);localStorage.setItem("Favorite",n)}catch(e){console.error("Set state error: ",e.message)}}function s(){try{const e=localStorage.getItem("Favorite");return null===e?void 0:JSON.parse(e)}catch(e){console.error(e.message)}}function t(n){const s=n.map((e=>{const{abstract:n,title:s,url:t,published_date:a,media:o,section:i,id:r}=e,c=o[0]["media-metadata"][2].url,l=a.split("-").reverse().join("/");return`<li class="box-news__item" data-id="${r}">\n      <p class="box-news__section">${i}</p>\n          <div class="box-news___wrap-reading">\n            <span class="box-news__reading">Already read</span>\n            <svg class="icon" width="18" height="18">\n              <use href="#icon-check"></use>\n            </svg> \n          </div>\n          <article>\n            <div class="box-news__thumb">\n              <img class="box-news__img" src="${c}" loading="lazy" alt="${i}" width='440'/>\n              <button class="box-news__btn" id="${r}">Remove from favorite\n                <svg class="box-news__btn-icon" width="16" height="16" id="${r}">\n                  <use href="../images/akar-icons_heart-filled.svg"></use>\n                </svg>\n              </button>\n            </div>\n          <div class="box-news__wrap-title">\n            <h2 class="box-news__titel">\n              ${s}\n            </h2>\n          </div>\n          <div class="box-news__wrap-text">\n            <p class="box-news__text">\n              ${n.length>120?n.slice(0,110)+"...":n}\n            </p>\n          </div>\n          <div class="box-news__wrap">\n            <p class="box-news__data">${l}</p>\n            <a href="${t}" id="${r}" class="box-news__link" target="_blank" rel="noopener noreferrer nofollow">Read more</a>\n          </div>\n          </article>\n          <div class="overlay"></div>\n        </li>`})).join("");e.insertAdjacentHTML("beforeend",s)}e.addEventListener("click",(function(a){const o=a.target.classList.value;"box-news__btn"!==o&&"box-news__btn-icon"!==o||(currentId=+a.target.id,function(e){try{const t=s(),a=t.findIndex(((n,s)=>n.id===e));return t.splice(a,1),n(t),!0}catch(e){console.error(e.message)}}(currentId),e.innerHTML="",t(s()))})),t(s());
//# sourceMappingURL=favorite-main.ff7329fc.js.map