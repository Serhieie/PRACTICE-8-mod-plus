import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { instruments } from './helper/products';
import { findProduct } from './helper/findProduct';
import { common } from './common';
import { createMarkup } from './helper/createMarkup';
import { createModal } from './helper/createModal';

const container = document.querySelector('.js-list');
const search = document.querySelector('.js-search');
const favoriteBtn = document.querySelector('.js-favorite');
const basketBtn = document.querySelector('.js-basket');
const deleteFavBtn = document.querySelector('.js-delete-fav');

const favoriteArr = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];
const basketArr = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? [];

createMarkup(instruments, container);
container.addEventListener('click', onClick);
search.addEventListener('input', onSearch);

function onSearch(evt) {
  console.log(evt);
}

function onClick(evt) {
  evt.preventDefault();
  if (evt.target.classList.contains('js-info')) {
    const product = findProduct(evt.target);
    createModal(product);
  }

  if (evt.target.classList.contains('js-basket')) {
    const product = findProduct(evt.target);
    const inStorage = basketArr.some(({ id }) => id === product.id);
    if (inStorage) {
      return;
    }

    basketArr.push(product);
    localStorage.setItem(common.KEY_BASKET, JSON.stringify(basketArr));
  }
  if (evt.target.classList.contains('js-favorite')) {
    const product = findProduct(evt.target);
    const inStorage = favoriteArr.some(({ id }) => id === product.id);
    if (inStorage) {
      return;
    }
    favoriteArr.push(product);
    localStorage.setItem(common.KEY_FAVORITE, JSON.stringify(favoriteArr));
  }
}
