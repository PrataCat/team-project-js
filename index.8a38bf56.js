!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=t.parcelRequire6b37;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},t.parcelRequire6b37=o);var a=o("bpxeT"),c=o("2TvXO");(function(e){return l.apply(this,arguments)})().then((function(e){console.log(e),u(e)})),navigator.geolocation.getCurrentPosition((function(e){console.log(e.coords),e.coords=!0;var t=e.coords,n=t.latitude,r=t.longitude;(function(e,t){return i.apply(this,arguments)})("".concat(n),"".concat(r)).then((function(e){s.firstChild.remove(),console.log(e),u(e)}))}));function i(){return(i=e(a)(e(c).mark((function t(n,r){var o,a,i;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o="http://api.openweathermap.org/data/2.5/weather?APPID=a66723ff7785b663e20297f90d8a0e90&lat=".concat(n,"&lon=").concat(r,"&units=metric"),e.next=3,fetch(o);case 3:if((a=e.sent).ok){e.next=6;break}throw new Error("Error");case 6:return e.next=8,a.json();case 8:return i=e.sent,e.abrupt("return",i);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var s=document.querySelector(".box-news");function l(){return(l=e(a)(e(c).mark((function t(n){var r,o;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"http://api.openweathermap.org/data/2.5/weather?APPID=a66723ff7785b663e20297f90d8a0e90&q=Kyiv&units=metric",e.next=3,fetch("http://api.openweathermap.org/data/2.5/weather?APPID=a66723ff7785b663e20297f90d8a0e90&q=Kyiv&units=metric");case 3:if((r=e.sent).ok){e.next=6;break}throw new Error("Error");case 6:return e.next=8,r.json();case 8:return o=e.sent,e.abrupt("return",o);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function u(e){console.log(e.dt.toString()),console.log(e.id),console.log(Math.floor(e.main.temp)),console.log(e.weather[0].main),console.log(e.weather[0].icon);var t=Math.floor(e.main.temp);console.log(e.name);var n=new Date;console.log(n.toUTCString());var r='<li class="box-weather__item box " data-id= "'.concat(e.id,'">\n               <p class="weather-temp">').concat(t,'&deg</p>\n             <div class="weather-city-group"> \n               <p class="weather-main">').concat(e.weather[0].main,'</p> \n               <button class="btn__select-city" type="submit">').concat(e.name,'</button>\n             </div>\n        \n             <img class="weather-icon" src=" http://openweathermap.org/img/wn/').concat(e.weather[0].icon,'@2x.png" alt="').concat(e.title,'">\n               <p class= weather-day>').concat(n.toUTCString().slice(0,3),"</p> \n               <p class= weather-data>").concat(n.toUTCString().slice(5,17),'</p> \n               <button class="weather-week" type="submit"> weather for week</button>\n           </li>');s.insertAdjacentHTML("afterbegin",r)}}();
//# sourceMappingURL=index.8a38bf56.js.map
