!function(){function e(){try{var e=localStorage.getItem("read");return null===e?{}:JSON.parse(e)}catch(e){console.log(e)}}function n(e){var n=e.abstract,t=e.title,a=e.url,o=e.published_date,r=e.image_url,s=e.section,c=e.id,l=e.favor,i=void 0!==l&&l,d=e.read;return'<li class="box-news__item '.concat(void 0!==d&&d?"show":"",'" data-id="').concat(c,'">\n      <p class="box-news__section">').concat(s,'</p>\n          <div class="box-news___wrap-reading">\n            <span class="box-news__reading">Alredy read</span>\n            <svg class="icon" width="18" height="18">\n              <use href="#icon-check"></use>\n            </svg> \n          </div>\n          <button class="box-news__favorite-btn ').concat(i?"favorite":"",'">\n              <p class="box-news__favorite-p"> ').concat(i?"Remove from Favorite":"Add to Favorite",'</p>\n              <svg class="box-news__favorite-svg" width="16" height="16"">\n                <use href="#icon-heart"></use>\n              </svg>\n            </button>\n          <article>\n            <div class="box-news__thumb">\n              <img class="box-news__img" src="').concat(r,'" loading="lazy" alt="').concat(s,'" width=\'440\'/>\n            </div>\n          <div class="box-news__wrap-title">\n            <h2 class="box-news__titel">\n              ').concat(t,'\n            </h2>\n          </div>\n          <div class="box-news__wrap-text">\n            <p class="box-news__text">\n              ').concat(n.length>120?n.slice(0,110)+"...":n,'\n            </p>\n          </div>\n          <div class="box-news__wrap">\n            <p class="box-news__data">').concat(o,'</p>\n            <a href="').concat(a,'" class="box-news__link" target="_blank" rel="noopener noreferrer nofollow">Read more</a>\n          </div>\n          </article>\n          <div class="overlay"></div>\n        </li>')}function t(e){var n=document.querySelector(".wrap-box"),t='<div data-date="'.concat(e,'">\n    <div class="span-wrap">\n      <span class="date-span open">').concat(e,'<span class="arrow"></span></span>\n    </div>\n    <ul class="wrap-list box-news open" id="').concat(e,'"></ul>\n  </div>');n.insertAdjacentHTML("afterbegin",t)}function a(){return e()[date].map((function(e){e.abstract,e.title,e.url;var t=e.published_date;e.image_url,e.section,e.id,t.split("-").reverse().join("/");return n(e)}))}!function(){var n=e(),o=Object.keys(n),r=!0,s=!1,c=void 0;try{for(var l,i=o[Symbol.iterator]();!(r=(l=i.next()).done);r=!0)date=l.value,console.log(n[date]),0===n[date].length&&(delete n[date],localStorage.setItem("read",JSON.stringify(n)),location.reload()),t(date)}catch(e){s=!0,c=e}finally{try{r||null==i.return||i.return()}finally{if(s)throw c}}var d=!0,v=!1,u=void 0;try{for(var _,p=Object.keys(n)[Symbol.iterator]();!(d=(_=p.next()).done);d=!0){date=_.value;document.querySelector('[data-date="'.concat(date,'"]'));var b=document.getElementById("".concat(date));console.log(b);var w=a();b.insertAdjacentHTML("beforeend",w.join(""))}}catch(e){v=!0,u=e}finally{try{d||null==p.return||p.return()}finally{if(v)throw u}}}(),console.log(a()),document.querySelectorAll(".date-span").forEach((function(e){e.addEventListener("click",(function(){var n=this.parentElement.parentElement.querySelector("ul").id,t=document.getElementById(n);e.querySelector(".arrow").classList.toggle("arrow-bot"),t.classList.toggle("open")}))}))}();
//# sourceMappingURL=read-main.8e12d30c.js.map