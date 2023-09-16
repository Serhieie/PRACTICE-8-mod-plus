import { common } from './common';
import { instruments } from './helper/products';
import { findProduct } from './helper/findProduct';
import { createMarkup } from './helper/createMarkup';
import { createModal } from './helper/createModal';

const container = document.querySelector('.js-list');
const favorites = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];

createMarkup(favorites, container, true, false);

const deleteFavoriteBtns = document.querySelectorAll('.js-favorite');
deleteFavoriteBtns.forEach(btn => {
  btn.textContent = 'Remove item';
});

container.addEventListener('click', onClick);

function onClick(evt) {
  if (evt.target.classList.contains('js-info')) {
    const product = findProduct(evt.target);
    createModal(product);
  }
  if (evt.target.classList.contains('js-favorite')) {
    const product = findProduct(evt.target);
    const indexToDelete = favorites.findIndex(item => item.id === product.id);
    if (indexToDelete !== -1) {
      favorites.splice(indexToDelete, 1);
    }
    localStorage.setItem(common.KEY_FAVORITE, JSON.stringify(favorites));
  }
}
