!function(){var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function e(t){return t&&t.__esModule?t.default:t}var n={},i={},r=t.parcelRequire6b37;null==r&&((r=function(t){if(t in n)return n[t].exports;if(t in i){var e=i[t];delete i[t];var r={id:t,exports:{}};return n[t]=r,e.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(t,e){i[t]=e},t.parcelRequire6b37=r),r.register("l5bVx",(function(t,e){"use strict";Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t}}));var o={},c=r("l5bVx"),a=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,d="object"==typeof t&&t&&t.Object===Object&&t,v="object"==typeof self&&self&&self.Object===Object&&self,b=d||v||Function("return this")(),m=Object.prototype.toString,y=Math.max,g=Math.min,p=function(){return b.Date.now()};function h(t){var n=void 0===t?"undefined":e(c)(t);return!!t&&("object"==n||"function"==n)}function _(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(c)(t))||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(h(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=h(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var i=l.test(t);return i||u.test(t)?f(t.slice(2),i?2:8):s.test(t)?NaN:+t}o=function(t,e,n){var i,r,o,c,a,s,l=0,u=!1,f=!1,d=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function v(e){var n=i,o=r;return i=r=void 0,l=e,c=t.apply(o,n)}function b(t){return l=t,a=setTimeout(w,e),u?v(t):c}function m(t){var n=t-s;return void 0===s||n>=e||n<0||f&&t-l>=o}function w(){var t=p();if(m(t))return L(t);a=setTimeout(w,function(t){var n=e-(t-s);return f?g(n,o-(t-l)):n}(t))}function L(t){return a=void 0,d&&i?v(t):(i=r=void 0,c)}function x(){var t=p(),n=m(t);if(i=arguments,r=this,s=t,n){if(void 0===a)return b(s);if(f)return a=setTimeout(w,e),v(s)}return void 0===a&&(a=setTimeout(w,e)),c}return e=_(e)||0,h(n)&&(u=!!n.leading,o=(f="maxWait"in n)?y(_(n.maxWait)||0,e):o,d="trailing"in n?!!n.trailing:d),x.cancel=function(){void 0!==a&&clearTimeout(a),l=0,i=s=r=a=void 0},x.flush=function(){return void 0===a?c:L(p())},x};var w="?api-key=OotKL5nYMsbXFbPHNmmUjf7brVnGZQ8G",L="https://api.nytimes.com/svc/news/v3/content/section-list.json",x=[],j=window.innerWidth,O=document.querySelector(".filter__main-category-list"),T=document.querySelector(".filter__others-category-list"),E=document.querySelector(".filter__other-category-wrap");function M(t,e){var n=0,i="";e>=1280?(n=6,i="Others"):e>767&&e<1280?(n=4,i="Others"):e<=767&&(n=0,i="Categories"),function(t,e,n){var i="",r="";t.map((function(t,n){var o=t.display_name;n<e?i+='<li class="filter__main-category-item"><button class="filter__main-category-btn">'.concat(o,"  </button></li>"):r+='<li class="filter__others-category-item"><button class="filter__others-category-btn">'.concat(o,"</button></li>")})),O.innerHTML=i,O.insertAdjacentHTML("beforeend",'<li class="filter__other-category-item"><button class="filter__main-category-btn others-btn">'.concat(n,'<svg class="filter__main-category-btn-icon"> <use href="../images/symbol-defs-mini.svg#icon-orig-mini-n-z"> </use> </svg>\n</button></li>')),T.innerHTML=r}(t,n,i)}function N(t){!T.classList.contains("visible")||t.target.classList.contains("filter__others-category-item")||t.target.classList.contains("filter__others-category-list")||(T.classList.remove("visible"),E.classList.remove("visible"),window.removeEventListener("click",N))}fetch("".concat(L).concat(w)).then((function(t){if(!t.ok)throw new Error("error");return t.json()})).then((function(t){var e=t.results;M(x=e,j)})).catch((function(t){console.log(t)})),O.addEventListener("click",(function(t){!function(t){var e=document.querySelectorAll(".filter__main-category-btn"),n=!0,i=!1,r=void 0;try{for(var o,c=e[Symbol.iterator]();!(n=(o=c.next()).done);n=!0){var a=o.value;a.classList.contains("active")&&a.classList.remove("active")}}catch(t){i=!0,r=t}finally{try{n||null==c.return||c.return()}finally{if(i)throw r}}"button"===t.target.localName&&t.target.classList.add("active")}(t);t.target.outerText})),O.addEventListener("click",(function(t){t.target.classList.contains("others-btn")&&(t.stopPropagation(),T.classList.toggle("visible"),E.classList.toggle("visible"),window.addEventListener("click",N))})),T.addEventListener("click",(function(t){if("button"===t.target.localName){var e=t.target.textContent;O.lastChild.firstChild.textContent=e}})),window.addEventListener("resize",o((function(){(window.innerWidth>=1280&&j<1280||window.innerWidth>767&&window.innerWidth<1280&&(j<=767||j>=1280)||window.innerWidth<=767&&j>767)&&(j=window.innerWidth,M(x,j))}),50))}();
//# sourceMappingURL=index.88d7d135.js.map