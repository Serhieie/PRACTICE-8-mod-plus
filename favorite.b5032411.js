!function(){function t(t,e,i,o){Object.defineProperty(t,e,{get:i,set:o,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},n=e.parcelRequired7c6;null==n&&((n=function(t){if(t in i)return i[t].exports;if(t in o){var e=o[t];delete o[t];var n={id:t,exports:{}};return i[t]=n,e.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){o[t]=e},e.parcelRequired7c6=n),n.register("7jJJd",(function(e,i){t(e.exports,"common",(function(){return o}));var o={KEY_FAVORITE:"favorite",KEY_BASKET:"basket"}})),n.register("8ek5R",(function(e,i){t(e.exports,"instruments",(function(){return o}));var o=[{id:1,img:"https://static.dnipro-m.ua/cache/products/6523/catalog_origin_278056.jpg",name:"Item 1",price:1200,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, voluptatum veritatis quidem vero commodi fuga esse sed ipsum aliquid? Exercitationem repellendus optio architecto perspiciatis, accusantium explicabo quaerat quos veritatis. Ullam."},{id:2,img:"https://static.dnipro-m.ua/cache/products/6386/catalog_origin_262878.jpg",name:"Item 2",price:12500,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, voluptatum veritatis quidem vero commodi fuga esse sed ipsum aliquid? Exercitationem repellendus optio architecto perspiciatis, accusantium explicabo quaerat quos veritatis. Ullam."},{id:3,img:"https://static.dnipro-m.ua/cache/products/4406/catalog_origin_272987.jpg",name:"Item 3",price:12e3,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, voluptatum veritatis quidem vero commodi fuga esse sed ipsum aliquid? Exercitationem repellendus optio architecto perspiciatis, accusantium explicabo quaerat quos veritatis. Ullam."},{id:4,img:"https://static.dnipro-m.ua/cache/products/2021/catalog_origin_261806.jpg",name:"Item 4",price:15555,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, voluptatum veritatis quidem vero commodi fuga esse sed ipsum aliquid? Exercitationem repellendus optio architecto perspiciatis, accusantium explicabo quaerat quos veritatis. Ullam."},{id:5,img:"https://static.dnipro-m.ua/cache/products/7834/catalog_origin_274896.jpg",name:"Item 5",price:2e4,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, voluptatum veritatis quidem vero commodi fuga esse sed ipsum aliquid? Exercitationem repellendus optio architecto perspiciatis, accusantium explicabo quaerat quos veritatis. Ullam."},{id:6,img:"https://static.dnipro-m.ua/cache/products/4383/catalog_origin_265510.jpg",name:"Item 6",price:900,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, voluptatum veritatis quidem vero commodi fuga esse sed ipsum aliquid? Exercitationem repellendus optio architecto perspiciatis, accusantium explicabo quaerat quos veritatis. Ullam."},{id:7,img:"https://static.dnipro-m.ua/cache/products/6302/catalog_origin_257699.jpg",name:"Item 7",price:1450,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, voluptatum veritatis quidem vero commodi fuga esse sed ipsum aliquid? Exercitationem repellendus optio architecto perspiciatis, accusantium explicabo quaerat quos veritatis. Ullam."},{id:8,img:"https://static.dnipro-m.ua/cache/products/2745/catalog_origin_271836.jpg",name:"Item 8",price:19e3,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, voluptatum veritatis quidem vero commodi fuga esse sed ipsum aliquid? Exercitationem repellendus optio architecto perspiciatis, accusantium explicabo quaerat quos veritatis. Ullam."},{id:9,img:"https://static.dnipro-m.ua/cache/products/5102/catalog_origin_265026.jpg",name:"Item 9",price:41200,description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi, voluptatum veritatis quidem vero commodi fuga esse sed ipsum aliquid? Exercitationem repellendus optio architecto perspiciatis, accusantium explicabo quaerat quos veritatis. Ullam."}]})),n.register("6hD8H",(function(e,i){t(e.exports,"findProduct",(function(){return r}));var o=n("8ek5R");function r(t){var e=Number(t.closest(".js-list-item").dataset.id);return o.instruments.find((function(t){return t.id===e}))}})),n.register("9FPnu",(function(e,i){function o(t,e,i,o){var n,r="js-favorite";n=t.length?t.map((function(t){var e,n=t.id,a=t.img,s=t.name,c=t.price;if(i)r="js-remove-btn-favorite",e="Remove from Favorite";else{if(o)return r="js-remove-btn-basket",e="Remove from Basket",'<li data-id="'.concat(n,'" class="js-list-item"><img src="').concat(a,'" alt="').concat(s,'" width="300">\n      <h2>').concat(s,"</h2>\n      <h3>").concat(c,' ГРН</h3>\n      <div class="flex">\n      <span>кількість:</span> <input class="js-input-value" type="number" name="quantity" id="quantity" min="1" max="100" value="1"/></div>\n      <p><a class="js-info" href="#">More information</a></p>\n      <span class="total-span" >Всього до Сплати: </span>\n      <div class="btn-div"><button class="li-btn ').concat(r,'" type="button">').concat(e,'</button><button class="li-btn js-basket" type="button"> Buy item</button></div></li>');e="Add to Favorite"}return'<li data-id="'.concat(n,'" class="js-list-item"><img src="').concat(a,'" alt="').concat(s,'" width="300">\n      <h2>').concat(s,'</h2>\n      <p><a class="js-info" href="#">More information</a></p>\n      <div class="btn-div"><button class="li-btn ').concat(r,'" type="button">').concat(e,'</button><button class="li-btn js-basket" type="button"> Add to Basket</button></div></li>')})).join(""):'<li class="js-list-item"><img src="https://www.esri.com/arcgis-blog/wp-content/uploads/2018/01/fav-3.png" alt="plug" width="500"></li>',e.innerHTML=n}t(e.exports,"createMarkup",(function(){return o}))})),n.register("6veBv",(function(e,i){t(e.exports,"createModal",(function(){return r}));var o=n("dyT35");function r(t,e,i){var n="Add to Favorite",r="Add to Basket",a="js-favorite";e&&(n="Remove from Favorite",r="Add to Basket",a="js-remove-btn-favorite"),i&&(n="Remove from Basket",r="Buy Item",a="js-remove-btn-basket"),o.create('<div class="js-list-item-open">\n      <img src="'.concat(t.img,'" alt="').concat(t.name,'" width="350px" />\n      <h2>').concat(t.name,"</h2>\n      <h3>").concat(t.price," grn</h3>\n      <p>").concat(t.description,'</p>\n      <div class="btn-div"><button class="li-btn ').concat(a,'" type="button">').concat(n,'</button><button class="li-btn js-basket" type="button">').concat(r,"</button></div>\n    </div>"),{onShow:function(t){t.element().querySelectorAll(".js-remove-btn-favorite").forEach((function(e){e.onclick=t.close})),t.element().querySelectorAll(".js-remove-btn-basket").forEach((function(e){e.onclick=t.close}))}}).show()}n("FA8uB")})),n.register("dyT35",(function(t,e){t.exports=function t(e,i,o){function n(a,s){if(!i[a]){if(!e[a]){var c=void 0;if(!s&&c)return c(a,!0);if(r)return r(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var l=i[a]={exports:{}};e[a][0].call(l.exports,(function(t){return n(e[a][1][t]||t)}),l,l.exports,t,e,i,o)}return i[a].exports}for(var r=void 0,a=0;a<o.length;a++)n(o[a]);return n}({1:[function(t,e,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.create=i.visible=void 0;var o=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=document.createElement("div");return i.innerHTML=t.trim(),!0===e?i.children:i.firstChild},n=function(t,e){var i=t.children;return 1===i.length&&i[0].tagName===e},r=function(t){return null!=(t=t||document.querySelector(".basicLightbox"))&&!0===t.ownerDocument.body.contains(t)};i.visible=r,i.create=function(t,e){var i=function(t,e){var i=o('\n\t\t<div class="basicLightbox '.concat(e.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),r=i.querySelector(".basicLightbox__placeholder");t.forEach((function(t){return r.appendChild(t)}));var a=n(r,"IMG"),s=n(r,"VIDEO"),c=n(r,"IFRAME");return!0===a&&i.classList.add("basicLightbox--img"),!0===s&&i.classList.add("basicLightbox--video"),!0===c&&i.classList.add("basicLightbox--iframe"),i}(t=function(t){var e="string"==typeof t,i=t instanceof HTMLElement==1;if(!1===e&&!1===i)throw new Error("Content must be a DOM element/node or string");return!0===e?Array.from(o(t,!0)):"TEMPLATE"===t.tagName?[t.content.cloneNode(!0)]:Array.from(t.children)}(t),e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(t=Object.assign({},t)).closable&&(t.closable=!0),null==t.className&&(t.className=""),null==t.onShow&&(t.onShow=function(){}),null==t.onClose&&(t.onClose=function(){}),"boolean"!=typeof t.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof t.className)throw new Error("Property `className` must be a string");if("function"!=typeof t.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof t.onClose)throw new Error("Property `onClose` must be a function");return t}(e)),a=function(t){return!1!==e.onClose(s)&&function(t,e){return t.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===r(t)||t.parentElement.removeChild(t),e()}),410),!0}(i,(function(){if("function"==typeof t)return t(s)}))};!0===e.closable&&i.addEventListener("click",(function(t){t.target===i&&a()}));var s={element:function(){return i},visible:function(){return r(i)},show:function(t){return!1!==e.onShow(s)&&function(t,e){return document.body.appendChild(t),setTimeout((function(){requestAnimationFrame((function(){return t.classList.add("basicLightbox--visible"),e()}))}),10),!0}(i,(function(){if("function"==typeof t)return t(s)}))},close:a};return s}},{}]},{},[1])(1)})),n.register("FA8uB",(function(e,i){t(e.exports,"favoriteArr",(function(){return l})),t(e.exports,"basketArr",(function(){return m})),t(e.exports,"container",(function(){return p})),t(e.exports,"onClick",(function(){return f}));var o,r,a=n("6hD8H"),s=n("6veBv"),c=n("7jJJd"),u=n("9FPnu"),l=null!==(o=JSON.parse(localStorage.getItem(c.common.KEY_FAVORITE)))&&void 0!==o?o:[],m=null!==(r=JSON.parse(localStorage.getItem(c.common.KEY_BASKET)))&&void 0!==r?r:[],d=document.getElementById("notification"),p=document.querySelector(".js-list");function f(t,e,i){if(t.preventDefault(),t.target.classList.contains("js-info")){var o=(0,a.findProduct)(t.target);(0,s.createModal)(o,e,i)}if(s.createModal&&console.log("true"),t.target.classList.contains("js-basket")){var n=(0,a.findProduct)(t.target);m.some((function(t){return t.id===n.id}))&&console.log("+ 1 more item",n),m.push(n),localStorage.setItem(c.common.KEY_BASKET,JSON.stringify(m)),d.style.display="block",d.textContent="Ви успішно добавили Item у Basket",setTimeout((function(){d.style.display="none"}),1e3)}if(t.target.classList.contains("js-favorite")){var r=(0,a.findProduct)(t.target);if(l.some((function(t){return t.id===r.id})))return;l.push(r),localStorage.setItem(c.common.KEY_FAVORITE,JSON.stringify(l)),d.style.display="block",d.textContent="Ви успішно добавили Item у Favorite",setTimeout((function(){d.style.display="none"}),1e3)}if(t.target.classList.contains("js-remove-btn-favorite")){var f=(0,a.findProduct)(t.target),v=l.findIndex((function(t){return t.id===f.id}));-1!==v&&l.splice(v,1),localStorage.setItem(c.common.KEY_FAVORITE,JSON.stringify(l)),(0,u.createMarkup)(l,p,!0,!1),d.style.display="block",d.textContent="Ви успішно видалили Item з Favorite",setTimeout((function(){d.style.display="none"}),1e3)}if(t.target.classList.contains("js-remove-btn-basket")){var g=(0,a.findProduct)(t.target),b=m.findIndex((function(t){return t.id===g.id}));-1!==b&&m.splice(b,1),localStorage.setItem(c.common.KEY_BASKET,JSON.stringify(m)),(0,u.createMarkup)(m,p,!1,!0),d.style.display="block",d.textContent="Ви успішно видалили Item з корзини",setTimeout((function(){d.style.display="none"}),1e3)}}}))}();
//# sourceMappingURL=favorite.b5032411.js.map