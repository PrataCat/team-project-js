!function(){function e(){try{var e=localStorage.getItem("read");return null===e?{}:JSON.parse(e)}catch(e){console.log(e)}}function n(e){var n=document.querySelector(".wrap-box"),t='<div data-date="'.concat(e,'">\n    <div class="span-wrap">\n      <span class="date-span open">').concat(e,'<span class="arrow"></span></span>\n    </div>\n    <ul class="wrap-list box-news" id="').concat(e,'"></ul>\n  </div>');n.insertAdjacentHTML("afterbegin",t)}function t(){return e()[date].map((function(e){var n=e.abstract,t=e.title,a=e.url,o=e.published_date,s=e.media,r=e.section,c=e.id,l=s[0]?s[0]["media-metadata"][2].url:"",i=o.split("-").reverse().join("/");return'<li class="box-news__item" data-id="'.concat(c,'">\n      <p class="box-news__section">').concat(r,'</p>\n          <div class="box-news___wrap-reading">\n            <span class="box-news__reading">Alredy read</span>\n            <svg class="icon" width="18" height="18">\n              <use href="#icon-check"></use>\n            </svg> \n          </div>\n            <button id="favorite-btn" class="box-news__favorite-btn">\n              <p id="favorite-p" class="box-news__favorite-p">Add to Favorite</p>\n              <svg class="box-news__favorite-svg" width="16" height="16" id="favorite-svg">\n                <use href="#icon-heart"></use>\n              </svg>\n            </button>\n          <article>\n            <div class="box-news__thumb">\n              <img class="box-news__img" src="').concat(l,'" loading="lazy" alt="').concat(r,'" width=\'440\'/>\n            </div>\n          <div class="box-news__wrap-title">\n            <h2 class="box-news__titel">\n              ').concat(t,'\n            </h2>\n          </div>\n          <div class="box-news__wrap-text">\n            <p class="box-news__text">\n              ').concat(n.length>120?n.slice(0,110)+"...":n,'\n            </p>\n          </div>\n          <div class="box-news__wrap">\n            <p class="box-news__data">').concat(i,'</p>\n            <a href="').concat(a,'" id="').concat(c,'" class="box-news__link" target="_blank" rel="noopener noreferrer nofollow">Read more</a>\n          </div>\n          </article>\n          <div class="overlay"></div>\n        </li>')})).join("")}!function(){var a=e(),o=Object.keys(a),s=!0,r=!1,c=void 0;try{for(var l,i=o[Symbol.iterator]();!(s=(l=i.next()).done);s=!0)date=l.value,console.log(a[date]),0===a[date].length&&(delete a[date],localStorage.setItem("read",JSON.stringify(a))),n(date)}catch(e){r=!0,c=e}finally{try{s||null==i.return||i.return()}finally{if(r)throw c}}var d=!0,v=!1,u=void 0;try{for(var p,_=Object.keys(a)[Symbol.iterator]();!(d=(p=_.next()).done);d=!0){date=p.value;document.querySelector('[data-date="'.concat(date,'"]'));var b=document.getElementById("".concat(date));console.log(b);var w=t();b.insertAdjacentHTML("beforeend",w)}}catch(e){v=!0,u=e}finally{try{d||null==_.return||_.return()}finally{if(v)throw u}}}(),document.querySelectorAll(".date-span").forEach((function(e){e.addEventListener("click",(function(){var n=this.parentElement.parentElement.querySelector("ul").id,t=document.getElementById(n);e.querySelector(".arrow").classList.toggle("arrow-bot"),t.classList.toggle("open")}))}))}();
//# sourceMappingURL=read-main.8c21d693.js.map
