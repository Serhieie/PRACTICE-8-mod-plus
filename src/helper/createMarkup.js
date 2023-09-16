function createMarkup(arr, container, isFavorite, isBasket) {
  let markup;
  let classLabel = 'js-favorite';
  if (arr.length) {
    markup = arr
      .map(({ id, img, name, price }) => {
        let buttonLabel;
        if (isFavorite) {
          classLabel = 'js-remove-btn-favorite';
          buttonLabel = 'Remove from Favorite';
        } else if (isBasket) {
          classLabel = 'js-remove-btn-basket';
          buttonLabel = 'Remove from Basket';
          return `<li data-id="${id}" class="js-list-item"><img src="${img}" alt="${name}" width="300">
      <h2>${name}</h2>
      <h3>${price} ГРН</h3>
      <div class="flex">
      <span>кількість:</span> <input class="js-input-value" type="number" name="quantity" id="quantity" min="1" max="100" value="1"/></div>
      <p><a class="js-info" href="#">More information</a></p>
      <span class="total-span" >Всього до Сплати: </span>
      <div class="btn-div"><button class="li-btn ${classLabel}" type="button">${buttonLabel}</button><button class="li-btn js-basket" type="button"> Buy item</button></div></li>`;
        } else {
          buttonLabel = 'Add to Favorite';
        }
        return `<li data-id="${id}" class="js-list-item"><img src="${img}" alt="${name}" width="300">
      <h2>${name}</h2>
      <p><a class="js-info" href="#">More information</a></p>
      <div class="btn-div"><button class="li-btn ${classLabel}" type="button">${buttonLabel}</button><button class="li-btn js-basket" type="button"> Add to Basket</button></div></li>`;
      })
      .join('');
  } else {
    markup = `<li class="js-list-item"><img class="js-list-item-img" src="https://www.esri.com/arcgis-blog/wp-content/uploads/2018/01/fav-3.png" alt="plug"></li>`;
  }
  container.innerHTML = markup;
}

export { createMarkup };
