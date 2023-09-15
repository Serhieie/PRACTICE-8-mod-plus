import { instruments } from './helper/products';
import { findProduct } from '';

const container = document.querySelector('.js-container');

function createMarkup(arr) {
  const markup = arr.map(item => ``).join('');
  container.innerHTML = markup;
}
