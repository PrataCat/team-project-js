function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},o=n.parcelRequire6b37;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in i){var t=i[e];delete i[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){i[e]=t},n.parcelRequire6b37=o),o.register("kyEFX",(function(t,n){var r,i;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return i}),(function(e){return i=e}));var o={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},i=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("bUb57",(function(n,r){e(n.exports,"getSearchForm",(function(){return u}));var i=o("50Kfe"),s=o("43MkY");let c=window.innerWidth;document.querySelector(`.nav__link[href*="${document.location.pathname}"]`).classList.add("nav__link--current"),function(){if(a().includes("favorite-main.html")||a().includes("read-main.html"))return;document.querySelector(".header .container").insertAdjacentHTML("beforeEnd",`\n    <form class="search-form closed" id="search-form">\n      <input type="text" class="search-form__input" placeholder=".">\n      <button type="submit" class="search-form__btn">\n        <svg class="search-form__icon" width="20px" height="20px">\n          <use href="${t(s)}#icon-search"></use>\n        </svg>\n      </button>\n      <span class="search-form__placeholder">Search</span>\n    </form>\n  `)}(),document.querySelector(".header .container").insertAdjacentHTML("beforeEnd",'<button class="menu-btn">\n      <span class="menu-btn__line menu-btn__line--1"></span>\n      <span class="menu-btn__line menu-btn__line--2"></span>\n      <span class="menu-btn__line menu-btn__line--3"></span>\n    </button>'),f(),g();function a(){return document.location.pathname}function u(){return document.getElementById("search-form")}function l(){return document.querySelector(window.innerWidth<768?".mobile-menu":".header .container")}function f(){d()||(l().insertAdjacentHTML("beforeend",`\n<div class="theme-toggler" id="theme-toggler">\n  <div class="theme-toggler__preinfo">\n    <svg class="theme-toggler__icon" width="20px" height="20px">\n      <use href="${t(s)}#icon-light-theme"></use>\n    </svg>\n    <span class="theme-toggler__text">Light</span>\n  </div>\n\n  <div class="theme-toggler__toggle-icon"></div>\n\n  <div class="theme-toggler__postinfo">\n    <svg class="theme-toggler__icon" width="20px" height="20px">\n      <use href="${t(s)}#icon-dark-theme"></use>\n    </svg>\n    <span class="theme-toggler__text">Dark</span>\n  </div>\n</div>`),d().addEventListener("click",m))}function d(){return document.getElementById("theme-toggler")}function m(e){var t;e.target.classList.contains("theme-toggler__toggle-icon")&&(d().classList.toggle("isActive"),document.body.classList.toggle("dark-theme"),t=d().classList.contains("isActive")?"dark":"light",localStorage.setItem("theme",t))}function g(){"light"!==(localStorage.getItem("theme")||"light")&&(d().classList.add("isActive"),document.body.classList.add("dark-theme"))}document.querySelector(".menu-btn").addEventListener("click",(function(e){e.currentTarget.classList.toggle("isOpen"),document.querySelector(".mobile-menu").classList.toggle("isOpen"),u().classList.toggle("isHidden"),document.body.classList.toggle("js-scrollBlock")})),window.addEventListener("resize",t(i)((()=>{(function(){const e=window.innerWidth,t=c<768&&e>=768||c>=768&&c<1280&&(e<768||e>=1280)||c>=1280&&e<1280;return c=e,t})()&&!d().parentElement!==l()&&(d().removeEventListener("click",m),d().remove(),f(),g())}),100))})),o.register("50Kfe",(function(e,t){var r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,s=/^0o[0-7]+$/i,c=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,u="object"==typeof self&&self&&self.Object===Object&&self,l=a||u||Function("return this")(),f=Object.prototype.toString,d=Math.max,m=Math.min,g=function(){return l.Date.now()};function h(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==f.call(e)}(e))return NaN;if(h(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=h(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=o.test(e);return n||s.test(e)?c(e.slice(2),n?2:8):i.test(e)?NaN:+e}e.exports=function(e,t,n){var r,i,o,s,c,a,u=0,l=!1,f=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=r,o=i;return r=i=void 0,u=t,s=e.apply(o,n)}function _(e){return u=e,c=setTimeout(w,t),l?b(e):s}function y(e){var n=e-a;return void 0===a||n>=t||n<0||f&&e-u>=o}function w(){var e=g();if(y(e))return x(e);c=setTimeout(w,function(e){var n=t-(e-a);return f?m(n,o-(e-u)):n}(e))}function x(e){return c=void 0,v&&r?b(e):(r=i=void 0,s)}function L(){var e=g(),n=y(e);if(r=arguments,i=this,a=e,n){if(void 0===c)return _(a);if(f)return c=setTimeout(w,t),b(a)}return void 0===c&&(c=setTimeout(w,t)),s}return t=p(t)||0,h(n)&&(l=!!n.leading,o=(f="maxWait"in n)?d(p(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),L.cancel=function(){void 0!==c&&clearTimeout(c),u=0,r=a=i=c=void 0},L.flush=function(){return void 0===c?s:x(g())},L}})),o.register("43MkY",(function(e,t){e.exports=new URL(o("kyEFX").resolve("5ewtP"),import.meta.url).toString()})),o("kyEFX").register(JSON.parse('{"jRUHK":"read-main.b5652981.js","5ewtP":"header-sprite.24231d43.svg"}')),o("bUb57");
//# sourceMappingURL=read-main.b5652981.js.map
