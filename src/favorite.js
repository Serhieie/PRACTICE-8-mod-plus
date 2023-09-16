import { common } from './common';
import { instruments } from './helper/products';
import { findProduct } from './helper/findProduct';
import { createMarkup } from './helper/createMarkup';
import { createModal } from './helper/createModal';
import { onClick, favoriteArr } from './helper/onClick';

const container = document.querySelector('.js-list');
container.addEventListener('click', function (evt) {
  onClick(evt, true, false);
});

createMarkup(favoriteArr, container, true, false);
