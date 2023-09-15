import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

function createModal(product) {
  const instance = basicLightbox.create(
    `<div class="js-list-item-open">
      <img src="${product.img}" alt="${product.name}" width="350px" />
      <h2>${product.name}</h2>
      <h3>${product.price} grn</h3>
      <p>${product.description}</p>
      <div class="btn-div"><button class="li-btn js-favorite" type="button">Add to Favorite</button><button class="li-btn js-basket" type="button"> Add to Basket</button></div>
    </div>`
  );
  instance.show();
}

export { createModal };
