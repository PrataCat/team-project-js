function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e){return e&&e.__esModule?e.default:e}var i={},r={},o=t.parcelRequire6b37;null==o&&((o=function(e){if(e in i)return i[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequire6b37=o),o.register("kyEFX",(function(t,n){var i,r;e(t.exports,"register",(function(){return i}),(function(e){return i=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var o={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},r=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("50Kfe",(function(e,n){var i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt,a="object"==typeof t&&t&&t.Object===Object&&t,u="object"==typeof self&&self&&self.Object===Object&&self,l=a||u||Function("return this")(),d=Object.prototype.toString,f=Math.max,g=Math.min,m=function(){return l.Date.now()};function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==d.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(i,"");var n=o.test(e);return n||s.test(e)?c(e.slice(2),n?2:8):r.test(e)?NaN:+e}e.exports=function(e,t,n){var i,r,o,s,c,a,u=0,l=!1,d=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=i,o=r;return i=r=void 0,u=t,s=e.apply(o,n)}function b(e){return u=e,c=setTimeout(_,t),l?y(e):s}function w(e){var n=e-a;return void 0===a||n>=t||n<0||d&&e-u>=o}function _(){var e=m();if(w(e))return L(e);c=setTimeout(_,function(e){var n=t-(e-a);return d?g(n,o-(e-u)):n}(e))}function L(e){return c=void 0,v&&i?y(e):(i=r=void 0,s)}function j(){var e=m(),n=w(e);if(i=arguments,r=this,a=e,n){if(void 0===c)return b(a);if(d)return c=setTimeout(_,t),y(a)}return void 0===c&&(c=setTimeout(_,t)),s}return t=h(t)||0,p(n)&&(l=!!n.leading,o=(d="maxWait"in n)?f(h(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),j.cancel=function(){void 0!==c&&clearTimeout(c),u=0,i=a=r=c=void 0},j.flush=function(){return void 0===c?s:L(m())},j}})),o.register("f2q8M",(function(t,n){e(t.exports,"getMostPopularArticles",(function(){return i})),e(t.exports,"getSearchArticles",(function(){return r}));async function i(e=7){try{const t=await async function(e=7){try{if(![1,7,30].includes(e))return void console.log("incorrect period");const t=await fetch(`https://api.nytimes.com/svc/mostpopular/v2/viewed/${e}.json?api-key=MaRHlqb5GkKZRi8GP7IZNIuwteQG5wDA`);return(await t.json()).results}catch(e){console.log(e)}}(e);return t.map((e=>{const{title:t,abstract:n,published_date:i,url:r,section:s,media:c,uri:a}=e,u=c[0]?c[0]["media-metadata"][2].url:"";return{title:t,abstract:n,published_date:o(i),url:r,section:s,image_url:u,id:a.split("/")[3]}}))}catch(e){console.log(e)}}async function r(e,t,n=0){try{const i=await async function(e,t,n){try{const i=t?`&fq=pub_date:${t}`:"",r=await fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=MaRHlqb5GkKZRi8GP7IZNIuwteQG5wDA&page=${n}&q=${e}${i}`);return(await r.json()).response.docs}catch(e){console.log(e)}}(e,t,n);return i.map((e=>{const{headline:t,abstract:n,pub_date:i,web_url:r,subsection_name:s,multimedia:c,uri:a}=e;return{title:t.main,abstract:n,published_date:o(i),url:r,section:s,image_url:"https://static01.nyt.com/"+c.find((e=>"mediumThreeByTwo440"===e.subtype)).url,id:a.split("/")[3]}}))}catch(e){console.log(e)}}function o(e){return new Date(e).toLocaleString().slice(0,10).split(".").join("/")}})),o("kyEFX").register(JSON.parse('{"jRUHK":"read-main.49c53375.js","5ewtP":"header-sprite.24231d43.svg"}'));var s,c=o("50Kfe"),a=o("f2q8M");function u(){const e=window.innerWidth,t=documentWidth<768&&e>=768||documentWidth>=768&&documentWidth<1280&&(e<768||e>=1280)||documentWidth>=1280&&e<1280;return documentWidth=e,t}function l(e){e.currentTarget.classList.toggle("isOpen"),document.querySelector(".mobile-menu").classList.toggle("isOpen"),d().classList.toggle("isHidden"),document.body.classList.toggle("js-scrollBlock")}function d(){return document.getElementById("search-form")}async function f(e){e.preventDefault();const t=d();if(window.innerWidth<768&&t.classList.contains("closed"))return t.classList.remove("closed"),void setTimeout(g,5e3);if(!t[0].value)return void console.log("field is empty");const n=await(0,a.getSearchArticles)(t[0].value);console.log(n)}function g(){const e=d();e.classList.contains("closed")||e[0].value||e.classList.add("closed")}function m(){return document.querySelector(window.innerWidth<768?".mobile-menu":".header .container")}function p(){m().insertAdjacentHTML("beforeend",`\n<div class="theme-toggler" id="theme-toggler">\n  <div class="theme-toggler__preinfo">\n    <svg class="theme-toggler__icon" width="20px" height="20px">\n      <use href="${n(s)}#icon-light-theme"></use>\n    </svg>\n    <span class="theme-toggler__text">Light</span>\n  </div>\n\n  <div class="theme-toggler__toggle-icon"></div>\n\n  <div class="theme-toggler__postinfo">\n    <svg class="theme-toggler__icon" width="20px" height="20px">\n      <use href="${n(s)}#icon-dark-theme"></use>\n    </svg>\n    <span class="theme-toggler__text">Dark</span>\n  </div>\n</div>`),h().addEventListener("click",v)}function h(){return document.getElementById("theme-toggler")}function v(e){var t;e.target.classList.contains("theme-toggler__toggle-icon")&&(h().classList.toggle("isActive"),document.body.classList.toggle("dark-theme"),t=h().classList.contains("isActive")?"dark":"light",localStorage.setItem("theme",t))}function y(){"light"!==(localStorage.getItem("theme")||"light")&&(h().classList.add("isActive"),document.body.classList.add("dark-theme"))}s=new URL(o("kyEFX").resolve("5ewtP"),import.meta.url).toString(),function(){window.innerWidth;p(),y();const e=document.querySelector(".search-form__btn");document.querySelector(".menu-btn").addEventListener("click",l),e.addEventListener("click",f),window.addEventListener("resize",n(c)((()=>{u&&!h().parentElement!==m()&&(h().removeEventListener("click",v),h().remove(),p(),y())}),100))}();
//# sourceMappingURL=read-main.49c53375.js.map