function t(t,i,e,o){Object.defineProperty(t,i,{get:e,set:o,enumerable:!0,configurable:!0})}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},o={},n=i.parcelRequired7c6;null==n&&((n=function(t){if(t in e)return e[t].exports;if(t in o){var i=o[t];delete o[t];var n={id:t,exports:{}};return e[t]=n,i.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,i){o[t]=i},i.parcelRequired7c6=n),n.register("UDlvM",(function(i,e){t(i.exports,"common",(function(){return o}));const o={KEY_FAVORITE:"favorite",KEY_BASKET:"basket"}})),n.register("l5xET",(function(i,e){t(i.exports,"instruments",(function(){return o}));const o=[{id:1,img:"https://static.dnipro-m.ua/cache/products/6523/catalog_origin_278056.jpg",name:"Item 1",price:1200,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, voluptatum veritatis quidem vero commodi fuga esse sed ipsum aliquid? Exercitationem repellendus optio architecto perspiciatis, accusantium explicabo quaerat quos veritatis. Ullam."},{id:2,img:"https://static.dnipro-m.ua/cache/products/6386/catalog_origin_262878.jpg",name:"Item 2",price:12500,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, voluptatum veritatis quidem vero commodi fuga esse sed ipsum aliquid? Exercitationem repellendus optio architecto perspiciatis, accusantium explicabo quaerat quos veritatis. Ullam."},{id:3,img:"https://static.dnipro-m.ua/cache/products/4406/catalog_origin_272987.jpg",name:"Item 3",price:12e3,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, voluptatum veritatis quidem vero commodi fuga esse sed ipsum aliquid? Exercitationem repellendus optio architecto perspiciatis, accusantium explicabo quaerat quos veritatis. Ullam."},{id:4,img:"https://static.dnipro-m.ua/cache/products/2021/catalog_origin_261806.jpg",name:"Item 4",price:15555,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, voluptatum veritatis quidem vero commodi fuga esse sed ipsum aliquid? Exercitationem repellendus optio architecto perspiciatis, accusantium explicabo quaerat quos veritatis. Ullam."},{id:5,img:"https://static.dnipro-m.ua/cache/products/7834/catalog_origin_274896.jpg",name:"Item 5",price:2e4,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, voluptatum veritatis quidem vero commodi fuga esse sed ipsum aliquid? Exercitationem repellendus optio architecto perspiciatis, accusantium explicabo quaerat quos veritatis. Ullam."},{id:6,img:"https://static.dnipro-m.ua/cache/products/4383/catalog_origin_265510.jpg",name:"Item 6",price:900,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, voluptatum veritatis quidem vero commodi fuga esse sed ipsum aliquid? Exercitationem repellendus optio architecto perspiciatis, accusantium explicabo quaerat quos veritatis. Ullam."},{id:7,img:"https://static.dnipro-m.ua/cache/products/6302/catalog_origin_257699.jpg",name:"Item 7",price:1450,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, voluptatum veritatis quidem vero commodi fuga esse sed ipsum aliquid? Exercitationem repellendus optio architecto perspiciatis, accusantium explicabo quaerat quos veritatis. Ullam."},{id:8,img:"https://static.dnipro-m.ua/cache/products/2745/catalog_origin_271836.jpg",name:"Item 8",price:19e3,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, voluptatum veritatis quidem vero commodi fuga esse sed ipsum aliquid? Exercitationem repellendus optio architecto perspiciatis, accusantium explicabo quaerat quos veritatis. Ullam."},{id:9,img:"https://static.dnipro-m.ua/cache/products/5102/catalog_origin_265026.jpg",name:"Item 9",price:41200,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, voluptatum veritatis quidem vero commodi fuga esse sed ipsum aliquid? Exercitationem repellendus optio architecto perspiciatis, accusantium explicabo quaerat quos veritatis. Ullam."}]})),n.register("9QMuk",(function(i,e){t(i.exports,"findProduct",(function(){return r}));var o=n("l5xET");function r(t){const i=Number(t.closest(".js-list-item").dataset.id);return o.instruments.find((({id:t})=>t===i))}})),n.register("lVWmB",(function(i,e){function o(t,i,e,o){let n;n=t.length?t.map((({id:t,img:i,name:n,price:r})=>{let a;if(e)a="Remove from Favorite";else{if(o)return a="Remove from Basket",`<li data-id="${t}" class="js-list-item"><img src="${i}" alt="${n}" width="300">\n      <h2>${n}</h2>\n      <h3>${r} ГРН</h3>\n      <div class="flex">\n      <span class="quantity-span">кількість:</span> <input type="number" name="quantity" id="quantity" min="1" max="100" value="1"/></div>\n      <p><a class="js-info" href="#">More information</a></p>\n      <div class="btn-div"><button class="li-btn js-remove-btn" type="button">${a}</button><button class="li-btn js-basket" type="button"> Buy item</button></div></li>`;a="Add to Favorite"}return`<li data-id="${t}" class="js-list-item"><img src="${i}" alt="${n}" width="300">\n      <h2>${n}</h2>\n      <p><a class="js-info" href="#">More information</a></p>\n      <div class="btn-div"><button class="li-btn js-favorite" type="button">${a}</button><button class="li-btn js-basket" type="button"> Add to Basket</button></div></li>`})).join(""):'<li class="js-list-item"><img src="https://www.esri.com/arcgis-blog/wp-content/uploads/2018/01/fav-3.png" alt="plug" width="500"></li>',i.innerHTML=n}t(i.exports,"createMarkup",(function(){return o}))})),n.register("kTP3e",(function(i,e){t(i.exports,"createModal",(function(){return r}));var o=n("9B8F0");function r(t){o.create(`<div class="js-list-item-open">\n      <img src="${t.img}" alt="${t.name}" width="350px" />\n      <h2>${t.name}</h2>\n      <h3>${t.price} grn</h3>\n      <p>${t.description}</p>\n      <div class="btn-div"><button class="li-btn js-favorite" type="button">Add to Favorite</button><button class="li-btn js-basket" type="button"> Add to Basket</button></div>\n    </div>`).show()}})),n.register("9B8F0",(function(t,i){t.exports=function t(i,e,o){function n(a,s){if(!e[a]){if(!i[a]){var c=void 0;if(!s&&c)return c(a,!0);if(r)return r(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var l=e[a]={exports:{}};i[a][0].call(l.exports,(function(t){return n(i[a][1][t]||t)}),l,l.exports,t,i,e,o)}return e[a].exports}for(var r=void 0,a=0;a<o.length;a++)n(o[a]);return n}({1:[function(t,i,e){Object.defineProperty(e,"__esModule",{value:!0}),e.create=e.visible=void 0;var o=function(t){var i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=document.createElement("div");return e.innerHTML=t.trim(),!0===i?e.children:e.firstChild},n=function(t,i){var e=t.children;return 1===e.length&&e[0].tagName===i},r=function(t){return null!=(t=t||document.querySelector(".basicLightbox"))&&!0===t.ownerDocument.body.contains(t)};e.visible=r,e.create=function(t,i){var e=function(t,i){var e=o('\n\t\t<div class="basicLightbox '.concat(i.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),r=e.querySelector(".basicLightbox__placeholder");t.forEach((function(t){return r.appendChild(t)}));var a=n(r,"IMG"),s=n(r,"VIDEO"),c=n(r,"IFRAME");return!0===a&&e.classList.add("basicLightbox--img"),!0===s&&e.classList.add("basicLightbox--video"),!0===c&&e.classList.add("basicLightbox--iframe"),e}(t=function(t){var i="string"==typeof t,e=t instanceof HTMLElement==1;if(!1===i&&!1===e)throw new Error("Content must be a DOM element/node or string");return!0===i?Array.from(o(t,!0)):"TEMPLATE"===t.tagName?[t.content.cloneNode(!0)]:Array.from(t.children)}(t),i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(t=Object.assign({},t)).closable&&(t.closable=!0),null==t.className&&(t.className=""),null==t.onShow&&(t.onShow=function(){}),null==t.onClose&&(t.onClose=function(){}),"boolean"!=typeof t.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof t.className)throw new Error("Property `className` must be a string");if("function"!=typeof t.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof t.onClose)throw new Error("Property `onClose` must be a function");return t}(i)),a=function(t){return!1!==i.onClose(s)&&function(t,i){return t.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===r(t)||t.parentElement.removeChild(t),i()}),410),!0}(e,(function(){if("function"==typeof t)return t(s)}))};!0===i.closable&&e.addEventListener("click",(function(t){t.target===e&&a()}));var s={element:function(){return e},visible:function(){return r(e)},show:function(t){return!1!==i.onShow(s)&&function(t,i){return document.body.appendChild(t),setTimeout((function(){requestAnimationFrame((function(){return t.classList.add("basicLightbox--visible"),i()}))}),10),!0}(e,(function(){if("function"==typeof t)return t(s)}))},close:a};return s}},{}]},{},[1])(1)}));
//# sourceMappingURL=favorite.b35a9d8a.js.map
