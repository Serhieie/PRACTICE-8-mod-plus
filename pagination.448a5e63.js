let e=1;const t=document.querySelector(".js-list-movies"),n=document.querySelector(".js-guard");let o=new IntersectionObserver((function(o,i){o.forEach((o=>{o.isIntersecting&&(e+=1,s(e).then((e=>{t.insertAdjacentHTML("beforeend",r(e.results)),e.page===e.total.pages&&i.unobserve(n)})).catch((e=>console.log(e))))})),console.log(i)}),{root:null,rootMargin:"250px",threshold:1});function r(e){return e.map((({poster_path:e,title:t})=>`<li class="movie-list-item">\n        <img src="https://image.tmdb.org/t/p/w300${e}" alt="${t}">\n        <h2>${t}</h2>\n      </li>`)).join("")}function s(e=1){return fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=713cb35a39a71866f61c58ef1cecbe50&page=${e}&include_adult=false&limit=24`).then((e=>{if(!e.ok)throw new Error(`${e.statusText}`);return e.json()}))}s().then((e=>{t.insertAdjacentHTML("beforeend",r(e.results)),o.observe(n)})).catch((e=>console.log(e)));
//# sourceMappingURL=pagination.448a5e63.js.map
