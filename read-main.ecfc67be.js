!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},i=n.parcelRequire6b37;null==i&&((i=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},n.parcelRequire6b37=i),i.register("iE7OH",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var i={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)i[t[n]]=e[t[n]]},o=function(e){var t=i[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),i.register("i8Q71",(function(n,r){e(n.exports,"getSearchForm",(function(){return a}));var o=i("l1Gdk"),c=i("hztHA"),s=window.innerWidth;function u(){return document.location.pathname}function a(){return document.getElementById("search-form")}function l(){return document.querySelector(window.innerWidth<768?".mobile-menu":".header .container")}function f(){d()||(l().insertAdjacentHTML("beforeend",'\n<div class="theme-toggler" id="theme-toggler">\n  <div class="theme-toggler__preinfo">\n    <svg class="theme-toggler__icon" width="20px" height="20px">\n      <use href="'.concat(t(c),'#icon-light-theme"></use>\n    </svg>\n    <span class="theme-toggler__text">Light</span>\n  </div>\n\n  <div class="theme-toggler__toggle-icon"></div>\n\n  <div class="theme-toggler__postinfo">\n    <svg class="theme-toggler__icon" width="20px" height="20px">\n      <use href="').concat(t(c),'#icon-dark-theme"></use>\n    </svg>\n    <span class="theme-toggler__text">Dark</span>\n  </div>\n</div>')),d().addEventListener("click",g))}function d(){return document.getElementById("theme-toggler")}function g(e){var t;e.target.classList.contains("theme-toggler__toggle-icon")&&(d().classList.toggle("isActive"),document.body.classList.toggle("dark-theme"),t=d().classList.contains("isActive")?"dark":"light",localStorage.setItem("theme",t))}function m(){"light"!==(localStorage.getItem("theme")||"light")&&(d().classList.add("isActive"),document.body.classList.add("dark-theme"))}document.querySelector('.nav__link[href*="'.concat(document.location.pathname,'"]')).classList.add("nav__link--current"),function(){if(u().includes("favorite-main.html")||u().includes("read-main.html"))return;document.querySelector(".header .container").insertAdjacentHTML("beforeEnd",'\n    <form class="search-form closed" id="search-form">\n      <input type="text" class="search-form__input" placeholder=".">\n      <button type="submit" class="search-form__btn">\n        <svg class="search-form__icon" width="20px" height="20px">\n          <use href="'.concat(t(c),'#icon-search"></use>\n        </svg>\n      </button>\n      <span class="search-form__placeholder">Search</span>\n    </form>\n  '))}(),document.querySelector(".header .container").insertAdjacentHTML("beforeEnd",'<button class="menu-btn">\n      <span class="menu-btn__line menu-btn__line--1"></span>\n      <span class="menu-btn__line menu-btn__line--2"></span>\n      <span class="menu-btn__line menu-btn__line--3"></span>\n    </button>'),f(),m(),document.querySelector(".menu-btn").addEventListener("click",(function(e){e.currentTarget.classList.toggle("isOpen"),document.querySelector(".mobile-menu").classList.toggle("isOpen"),a().classList.toggle("isHidden"),document.body.classList.toggle("js-scrollBlock")})),window.addEventListener("resize",t(o)((function(){var e,t;e=window.innerWidth,t=s<768&&e>=768||s>=768&&s<1280&&(e<768||e>=1280)||s>=1280&&e<1280,s=e,t&&!d().parentElement!==l()&&(d().removeEventListener("click",g),d().remove(),f(),m())}),100))})),i.register("l1Gdk",(function(e,r){var o=i("l5bVx"),c=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,l=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,g=f||d||Function("return this")(),m=Object.prototype.toString,h=Math.max,p=Math.min,v=function(){return g.Date.now()};function b(e){var n=void 0===e?"undefined":t(o)(e);return!!e&&("object"==n||"function"==n)}function _(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(o)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==m.call(e)}(e))return NaN;if(b(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=b(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(c,"");var r=u.test(e);return r||a.test(e)?l(e.slice(2),r?2:8):s.test(e)?NaN:+e}e.exports=function(e,t,n){var r,o,i,c,s,u,a=0,l=!1,f=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=r,i=o;return r=o=void 0,a=t,c=e.apply(i,n)}function m(e){return a=e,s=setTimeout(x,t),l?g(e):c}function y(e){var n=e-u;return void 0===u||n>=t||n<0||f&&e-a>=i}function x(){var e=v();if(y(e))return w(e);s=setTimeout(x,function(e){var n=t-(e-u);return f?p(n,i-(e-a)):n}(e))}function w(e){return s=void 0,d&&r?g(e):(r=o=void 0,c)}function L(){var e=v(),n=y(e);if(r=arguments,o=this,u=e,n){if(void 0===s)return m(u);if(f)return s=setTimeout(x,t),g(u)}return void 0===s&&(s=setTimeout(x,t)),c}return t=_(t)||0,b(n)&&(l=!!n.leading,i=(f="maxWait"in n)?h(_(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),L.cancel=function(){void 0!==s&&clearTimeout(s),a=0,r=u=o=s=void 0},L.flush=function(){return void 0===s?c:w(v())},L}})),i.register("l5bVx",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e}})),i.register("hztHA",(function(e,t){e.exports=i("aNJCr").getBundleURL("kxuOT")+i("iE7OH").resolve("gUlc6")})),i.register("aNJCr",(function(t,n){var r;e(t.exports,"getBundleURL",(function(){return r}),(function(e){return r=e}));var o={};function i(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}r=function(e){var t=o[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return i(e[2])}return"/"}(),o[e]=t),t}})),i("iE7OH").register(JSON.parse('{"kxuOT":"read-main.ecfc67be.js","gUlc6":"header-sprite.24231d43.svg"}')),i("i8Q71")}();
//# sourceMappingURL=read-main.ecfc67be.js.map
