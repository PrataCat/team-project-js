(async function(e){const t=await fetch("https://api.openweathermap.org/data/2.5/weather?APPID=a66723ff7785b663e20297f90d8a0e90&q=Kyiv&units=metric");if(!t.ok)throw new Error("Error");return await t.json()})().then((e=>{t(e)})),navigator.geolocation.getCurrentPosition((n=>{n.coords=!0;{const{latitude:a,longitude:r}=n.coords;(async function(e,t){const n=`https://api.openweathermap.org/data/2.5/weather?APPID=a66723ff7785b663e20297f90d8a0e90&lat=${e}&lon=${t}&units=metric`,a=await fetch(n);if(!a.ok)throw new Error("Error");return await a.json()})(`${a}`,`${r}`).then((n=>{e.firstChild.remove(),t(n)}))}}));const e=document.querySelector(".box-news");function t(t){const a=Math.floor(t.main.temp),r=new Date,o=`<li class="box-weather__item box " data-id= "${t.id}">\n               <p class="weather-temp">${a}&deg</p>\n             <div class="weather-city-group"> \n               <p class="weather-main">${t.weather[0].main}</p> \n               <form class="search-form">\n               <svg class="icon icon-carbon_location-filled" width="14" height="14">\n               <use href="./header-sprite.svg#icon-carbon_location-filled" width="14" height="14""></use></svg>\n               <input type="text" id="search-box" placeholder="            ${t.name}"/>\n            </form>\n             </div>\n        \n             <img class="weather-icon" src=" http://openweathermap.org/img/wn/${t.weather[0].icon}@2x.png" alt="${t.title}">\n               <p class= weather-day>${r.toUTCString().slice(0,3)}</p> \n               <p class= weather-data>${r.toUTCString().slice(5,17)}</p> \n               <button class="weather-week" type="submit"> weather for week</button>\n           </li>`;e.insertAdjacentHTML("afterbegin",o);document.getElementById("search-box").addEventListener("input",n)}function n(n){n.preventDefault();const a=n.currentTarget.value;if(""===n.value){return alert("Поле повинно бути заповнено.")}a.length,console.info("no sity");fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=a66723ff7785b663e20297f90d8a0e90&q=${a}&units=metric`).then((e=>{if(!e.ok)throw new Error("Error");return e.json()})).then((n=>{e.firstChild.remove(),t(n)}))}
//# sourceMappingURL=index.98ec0bad.js.map