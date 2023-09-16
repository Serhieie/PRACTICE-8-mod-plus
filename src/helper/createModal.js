import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import { onClick, favoriteArr, basketArr } from './onClick';

function createModal(product, isFavorite, isBasket) {
  let buttonLabel = 'Add to Favorite';
  let secButtonLabel = 'Add to Basket';
  let classLabel = 'js-favorite';
  {
    if (isFavorite) {
      buttonLabel = 'Remove from Favorite';
      secButtonLabel = 'Add to Basket';
      classLabel = 'js-remove-btn-favorite';
    }

    if (isBasket) {
      buttonLabel = 'Remove from Basket';
      secButtonLabel = 'Buy Item';
      classLabel = 'js-remove-btn-basket';
    }

    const instance = basicLightbox.create(
      `<div class="js-list-item-open">
      <img src="${product.img}" alt="${product.name}" width="350px" />
      <h2>${product.name}</h2>
      <h3>${product.price} grn</h3>
      <p>${product.description}</p>
      <div class="btn-div"><button class="li-btn ${classLabel}" type="button">${buttonLabel}</button><button class="li-btn js-basket" type="button">${secButtonLabel}</button></div>
    </div>`,
      {
        onShow: instance => {
          const removeFavoriteBtns = instance
            .element()
            .querySelectorAll('.js-remove-btn-favorite');
          removeFavoriteBtns.forEach(btn => {
            btn.onclick = instance.close;
          });
          const removeBasketBtns = instance
            .element()
            .querySelectorAll('.js-remove-btn-basket');
          removeBasketBtns.forEach(btn => {
            btn.onclick = instance.close;
          });
        },
      }
    );

    instance.show();
  }
}

export { createModal };
