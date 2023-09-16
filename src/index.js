import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { instruments } from './helper/products';
import { findProduct } from './helper/findProduct';
import { common } from './common';
import { createMarkup } from './helper/createMarkup';
import { createModal } from './helper/createModal';
import {
  onClick,
  favoriteArr,
  basketArr,
  basket,
  favorites,
} from './helper/onClick';
import throttle from 'lodash/throttle';

const throttleOnSerach = throttle(onSearch, 600);

const container = document.querySelector('.js-list');
const search = document.querySelector('.js-search');
const favoriteBtn = document.querySelector('.js-favorite');
const basketBtn = document.querySelector('.js-basket');
const deleteFavBtn = document.querySelector('.js-delete-fav');

createMarkup(instruments, container, false, false);
container.addEventListener('click', function (evt) {
  onClick(evt, false, false);
});

container.addEventListener('input', throttleOnSerach);

function onSearch(evt) {
  const valueToLower = evt.target.value.toLowerCase();
  const instrument = instruments
    .filter(instrument => instrument.name.toLowerCase() === valueToLower)
    .join('');
  console.log(valueToLower);
  if (instrument) {
  }
}
