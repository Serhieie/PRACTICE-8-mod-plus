import { findProduct } from './findProduct';
import { createModal } from './createModal';
import { common } from '../common';

const favoriteArr = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];
const basketArr = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? [];
const notification = document.getElementById('notification');

function onClick(evt, isFavorite, isBasket) {
  evt.preventDefault();
  if (evt.target.classList.contains('js-info')) {
    const product = findProduct(evt.target);
    createModal(product, isFavorite, isBasket);
  }

  if (evt.target.classList.contains('js-basket')) {
    const product = findProduct(evt.target);
    const inStorage = basketArr.some(({ id }) => id === product.id);
    if (inStorage) {
      console.log('+ 1 more item', product);
    }
    basketArr.push(product);
    localStorage.setItem(common.KEY_BASKET, JSON.stringify(basketArr));

    notification.style.display = 'block';
    notification.textContent = 'Ви успішно добавили Item у Basket';

    setTimeout(() => {
      notification.style.display = 'none';
    }, 1000);
  }
  if (evt.target.classList.contains('js-favorite')) {
    const product = findProduct(evt.target);
    const inStorage = favoriteArr.some(({ id }) => id === product.id);
    if (inStorage) {
      return;
    }
    favoriteArr.push(product);
    localStorage.setItem(common.KEY_FAVORITE, JSON.stringify(favoriteArr));

    notification.style.display = 'block';
    notification.textContent = 'Ви успішно добавили Item у Favorite';
    setTimeout(() => {
      notification.style.display = 'none';
    }, 1000);
  }
  if (evt.target.classList.contains('js-remove-btn-favorite')) {
    const product = findProduct(evt.target);
    const indexToDelete = favoriteArr.findIndex(item => item.id === product.id);
    if (indexToDelete !== -1) {
      favoriteArr.splice(indexToDelete, 1);
    }
    localStorage.setItem(common.KEY_FAVORITE, JSON.stringify(favoriteArr));

    notification.style.display = 'block';
    notification.textContent = 'Ви успішно видалили Item з Favorite';

    setTimeout(() => {
      notification.style.display = 'none';
    }, 1000);
  }
  if (evt.target.classList.contains('js-remove-btn-basket')) {
    const product = findProduct(evt.target);
    const indexToDelete = basketArr.findIndex(item => item.id === product.id);
    if (indexToDelete !== -1) {
      basketArr.splice(indexToDelete, 1);
    }
    localStorage.setItem(common.KEY_BASKET, JSON.stringify(basketArr));

    notification.style.display = 'block';
    notification.textContent = 'Ви успішно видалили Item з корзини';

    setTimeout(() => {
      notification.style.display = 'none';
    }, 1000);
  }
}

export { onClick, favoriteArr, basketArr };
