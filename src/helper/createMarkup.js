function createMarkup(arr, container) {
  let markup;
  if (arr.length) {
    markup = arr
      .map(
        ({
          id,
          img,
          name,
        }) => `<li data-id="${id}" class="js-list-item"><img src="${img}" alt="${name}" width="300">
      <h2>${name}</h2>
      <p><a class="js-info" href="#">More information</a></p>
      <div class="btn-div"><button class="li-btn js-favorite" type="button">Add to Favorite</button><button class="li-btn js-basket" type="button"> Add to Basket</button></div></li>`
      )
      .join('');
  } else {
    markup = `<li class="js-list-item"><img src="https://www.esri.com/arcgis-blog/wp-content/uploads/2018/01/fav-3.png" alt="plug" width="500"></li>`;
  }
  container.innerHTML = markup;
}

export { createMarkup };
