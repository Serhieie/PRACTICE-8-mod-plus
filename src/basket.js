import { common } from './common';
import { instruments } from './helper/products';
import { findProduct } from './helper/findProduct';
import { createMarkup } from './helper/createMarkup';
import { createModal } from './helper/createModal';

const container = document.querySelector('.js-list');
const basket = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? [];
const listItem = document.querySelector('.js-list-item');
const quantity = document.querySelector('.quantity-span');

createMarkup(basket, container, false, true);

container.addEventListener('click', onClick);

function onClick(evt) {
  if (evt.target.classList.contains('js-info')) {
    const product = findProduct(evt.target);
    createModal(product);
  }

  if (evt.target.classList.contains('js-remove-btn')) {
    const product = findProduct(evt.target);
    const indexToDelete = basket.findIndex(item => item.id === product.id);
    if (indexToDelete !== -1) {
      basket.splice(indexToDelete, 1);
    }
    localStorage.setItem(common.KEY_BASKET, JSON.stringify(basket));
  }
}
