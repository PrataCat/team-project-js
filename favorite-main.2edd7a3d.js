!function(){var e="Favorite";function n(e){try{var n=a(),r=n.findIndex((function(n,t){return n.id===e}));return n.splice(r,1),t(n),!0}catch(e){return console.error(e.message),!1}}function t(n){var t="Wrong data to save: array with objects is expected.";if("object"==typeof n)if(!1!==Array.isArray(n))try{var a=JSON.stringify(n);localStorage.setItem(e,a)}catch(e){console.error("Set state error: ",e.message)}else console.log(t);else console.log(t)}function a(){try{var n=localStorage.getItem(e);return null===n?void 0:JSON.parse(n)}catch(e){console.error(e.message)}}function r(e){var n=e.abstract,t=e.title,a=e.url,r=e.published_date,o=e.image_url,s=e.section,c=e.id,i=e.favor,l=void 0!==i&&i,d=e.read;return'<li class="box-news__item '.concat(void 0!==d&&d?"show":"",'" data-id="').concat(c,'">\n      <p class="box-news__section">').concat(s,'</p>\n          <div class="box-news___wrap-reading">\n            <span class="box-news__reading">Alredy read</span>\n            <svg class="icon" width="18" height="18">\n              <use href="#icon-check"></use>\n            </svg> \n          </div>\n          <button class="box-news__favorite-btn ').concat(l?"favorite":"",'">\n              <p class="box-news__favorite-p"> ').concat(l?"Remove from Favorite":"Add to Favorite",'</p>\n              <svg class="box-news__favorite-svg" width="16" height="16"">\n                <use href="#icon-heart"></use>\n              </svg>\n            </button>\n          <article>\n            <div class="box-news__thumb">\n              <img class="box-news__img" src="').concat(o,'" loading="lazy" alt="').concat(s,'" width=\'440\'/>\n            </div>\n          <div class="box-news__wrap-title">\n            <h2 class="box-news__titel">\n              ').concat(t,'\n            </h2>\n          </div>\n          <div class="box-news__wrap-text">\n            <p class="box-news__text">\n              ').concat(n.length>120?n.slice(0,110)+"...":n,'\n            </p>\n          </div>\n          <div class="box-news__wrap">\n            <p class="box-news__data">').concat(r,'</p>\n            <a href="').concat(a,'" class="box-news__link" target="_blank" rel="noopener noreferrer nofollow">Read more</a>\n          </div>\n          </article>\n          <div class="overlay"></div>\n        </li>')}var o=document.querySelector(".box-news");function s(){var e=document.documentElement.clientWidth;return e>1280?8:e>768?7:4}function c(e){if("object"==typeof e&&!1!==Array.isArray(e)){perPage=s();var n=function(e,n,t){var a=(n-1)*t,r=a+t;return e.slice(a,r)}(a(),page=1,perPage),t=n.map((function(e){return r(e)}));o.insertAdjacentHTML("beforeend",t.join(""))}}o.addEventListener("click",(function(e){var t=e.target.classList.value;"box-news__btn"!==t&&"box-news__btn-icon"!==t||(currentId=+e.target.id,n(currentId),o.innerHTML="",c(a()))})),c(a())}();
//# sourceMappingURL=favorite-main.2edd7a3d.js.map