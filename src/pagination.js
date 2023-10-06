//доступ за bearer

// const BASE_URL = 'https://the-one-api.dev/v2';
// const KEY = 'y3glcaSA990ruoKviytv';
// const END_POINT = '/character';

// function getCharacter() {
//   const param = new URLSearchParams({
//     limit: 30,
//     page: 1,
//   });
//   const option = {
//     method: 'GET',
//     headers: {
//       Authorization: `Bearer ${KEY}`,
//     },
//   };
//   fetch(`${BASE_URL}${END_POINT}?${param}`, option).then(res => {
//     console.log(res);
//   });
// }

// getCharacter();

//Пагінація кнопкою //Пагінація кнопкою //Пагінація кнопкою //Пагінація кнопкою //Пагінація кнопкою
//Пагінація кнопкою //Пагінація кнопкою //Пагінація кнопкою //Пагінація кнопкою //Пагінація кнопкою
//Пагінація кнопкою //Пагінація кнопкою //Пагінація кнопкою //Пагінація кнопкою //Пагінація кнопкою
//Пагінація кнопкою //Пагінація кнопкою //Пагінація кнопкою //Пагінація кнопкою //Пагінація кнопкою //Пагінація кнопкою
//Пагінація кнопкою м//Пагінація кнопкою //Пагінація кнопкою //Пагінація кнопкою //Пагінація кнопкою
//Пагінація кнопкою //Пагінація кнопкою //Пагінація кнопкою //Пагінація кнопкою //Пагінація кнопкою

// const BASE_URL = 'https://api.themoviedb.org/3';
// const API_KEY = '713cb35a39a71866f61c58ef1cecbe50';
// const END_POINT = '/trending/movie/week';
// const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w300';
// let currentPage = 1;

// const list = document.querySelector('.js-list-movies');
// const loadBtn = document.querySelector('.js-load');
// loadBtn.addEventListener('click', onLoad);

// function onLoad() {
//   currentPage += 1;
//   getTranding(currentPage)
//     .then(data => {
//       list.insertAdjacentHTML('beforeend', createMarkup(data.results));

//       if (currentPage === data.total_pages) {
//         loadBtn.hidden = true;
//       }
//     })
//     .catch(err => console.log(err));
// }

// function getTranding(page = 1) {
//   return fetch(`${BASE_URL}${END_POINT}?api_key=${API_KEY}&page=${page}`).then(
//     res => {
//       if (!res.ok) {
//         throw new Error(`${res.statusText}`);
//       }
//       return res.json();
//     }
//   );
// }
// getTranding()
//   .then(data => {
//     list.insertAdjacentHTML('beforeend', createMarkup(data.results));
//     if (currentPage !== data.total_pages) {
//       loadBtn.hidden = false;
//     }
//   })
//   .catch(err => console.log(err));

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ poster_path, title }) =>
//         `<li class="movie-list-item">
//         <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${title}">
//         <h2>${title}</h2>
//       </li>`
//     )
//     .join('');
// }

// ІНФІНІТІ СКРОЛЛ // ІНФІНІТІ СКРОЛЛ // ІНФІНІТІ СКРОЛЛ // ІНФІНІТІ СКРОЛЛ // ІНФІНІТІ СКРОЛЛ // ІНФІНІТІ СКРОЛЛ
// ІНФІНІТІ СКРОЛЛ// ІНФІНІТІ СКРОЛЛ// ІНФІНІТІ СКРОЛЛ// ІНФІНІТІ СКРОЛЛ// ІНФІНІТІ СКРОЛЛ// ІНФІНІТІ СКРОЛЛ
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '713cb35a39a71866f61c58ef1cecbe50';
const END_POINT = '/trending/movie/week';
const BASE_URL_IMG = 'https://image.tmdb.org/t/p/w300';
let currentPage = 1;

const list = document.querySelector('.js-list-movies');
const guard = document.querySelector('.js-guard');

let options = {
  root: null,
  rootMargin: '250px',
  threshold: 1.0,
};

let observer = new IntersectionObserver(onLoad, options);

function onLoad(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      currentPage += 1;
      getTranding(currentPage)
        .then(data => {
          list.insertAdjacentHTML('beforeend', createMarkup(data.results));
          if (data.page === data.total.pages) {
            observer.unobserve(guard);
          }
        })
        .catch(err => console.log(err));
    }
  });
  console.log(observer);
}

function createMarkup(arr) {
  return arr
    .map(
      ({ poster_path, title }) =>
        `<li class="movie-list-item">
        <img src="https://image.tmdb.org/t/p/w300${poster_path}" alt="${title}">
        <h2>${title}</h2>
      </li>`
    )
    .join('');
}

function getTranding(page = 1) {
  return fetch(
    `${BASE_URL}${END_POINT}?api_key=${API_KEY}&page=${page}&include_adult=false&limit=24`
  ).then(res => {
    if (!res.ok) {
      throw new Error(`${res.statusText}`);
    }
    return res.json();
  });
}
getTranding()
  .then(data => {
    list.insertAdjacentHTML('beforeend', createMarkup(data.results));
    observer.observe(guard);
  })
  .catch(err => console.log(err));
