import { instruments } from './helper/products';
import { findProduct } from '';

const container = document.querySelector('.js-container');

function createMarkup(arr) {
  const markup = arr
    .map(
      item => `<li class="js-list-item"><img src="" alt="">
      <h2></h2>
      <h3></h3>
      <p></p>
      <div><button class="li-btn" type="button">Add to Favorite</button><button class="li-btn" type="button"> Add to Basket</button></div></li>`
    )
    .join('');
  container.innerHTML = markup;
}
