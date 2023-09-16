import { common } from './common';
import { instruments } from './helper/products';
import { findProduct } from './helper/findProduct';
import { createMarkup } from './helper/createMarkup';
import { createModal } from './helper/createModal';
import { onClick, basketArr } from './helper/onClick';

const container = document.querySelector('.js-list');
const quantity = document.querySelector('.js-input-value');
const totalSpan = document.querySelector('.total-span');

createMarkup(basketArr, container, false, true);

container.addEventListener('click', function (evt) {
  onClick(evt, false, true);
});
container.addEventListener('input', function (evt) {
  if (evt.target.classList.contains('js-input-value')) {
    const value = parseInt(evt.target.value, 10);
    if (isNaN(value) || value < 1) {
      evt.target.value = 1;
    } else if (value > 100) {
      evt.target.value = 100;
    }
  }
});
