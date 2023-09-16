//index

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
      console.log('+ 1 more item', product);
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

//favorite

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

//basket

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
