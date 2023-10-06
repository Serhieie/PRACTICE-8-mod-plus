const search = document.querySelector('.js-form');
const list = document.querySelector('.js-list-api');

search.addEventListener('submit', onSearch);

function onSearch(evt) {
  evt.preventDefault();
  const { query, days } = evt.currentTarget.elements;
  getWeather(query.value, days.value)
    .then(data => {
      console.log(data)(
        (list.innerHTML = createMarkup(data.forecast.forecastday))
      );
    })
    .catch(err => console.log(err));
}

function getWeather(city, days) {
  const BASE_URL = `http://api.weatherapi.com/v1`;
  const API_KEY = 'fe876c42d4604a86b1d144111232609';
  return fetch(
    `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=${days}&lang=uk`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

function createMarkup(arr) {
  return arr
    .map(
      ({
        date,
        day: {
          avgtemp_c,
          condition: { icon, text },
        },
      }) => `      <li>
        <img src="${icon}" alt="${text}" />
        <p>${text}</p>
        <h2>${date}</h2>
        <h3>${avgtemp_c}</h3>
      </li>`
    )
    .join('');
}
