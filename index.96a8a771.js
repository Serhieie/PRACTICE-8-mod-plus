function t(t){return t&&t.__esModule?t.default:t}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=e.parcelRequired7c6;null==o&&((o=function(t){if(t in n)return n[t].exports;if(t in r){var e=r[t];delete r[t];var o={id:t,exports:{}};return n[t]=o,e.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){r[t]=e},e.parcelRequired7c6=o),o("9B8F0");var i=o("l5xET");o("9QMuk"),o("UDlvM");var c=o("lVWmB");o("kTP3e");var a=o("f318l"),u={},s={};s=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)};var l,f={},d={};l="object"==typeof e&&e&&e.Object===Object&&e;var v="object"==typeof self&&self&&self.Object===Object&&self,p=l||v||Function("return this")();f=function(){return d.Date.now()};var m={},y={},h={},b=/\s/;h=function(t){for(var e=t.length;e--&&b.test(t.charAt(e)););return e};var g=/^\s+/;y=function(t){return t?t.slice(0,h(t)+1).replace(g,""):t};var T,j={},w={};T=(d=p).Symbol;var S={},k=Object.prototype,x=k.hasOwnProperty,O=k.toString,q=T?T.toStringTag:void 0;S=function(t){var e=x.call(t,q),n=t[q];try{t[q]=void 0;var r=!0}catch(t){}var o=O.call(t);return r&&(e?t[q]=n:delete t[q]),o};var E={},M=Object.prototype.toString;E=function(t){return M.call(t)};var C=T?T.toStringTag:void 0;w=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":C&&C in Object(t)?S(t):E(t)};var I={};I=function(t){return null!=t&&"object"==typeof t};j=function(t){return"symbol"==typeof t||I(t)&&"[object Symbol]"==w(t)};var D=/^[-+]0x[0-9a-f]+$/i,L=/^0b[01]+$/i,N=/^0o[0-7]+$/i,B=parseInt;m=function(t){if("number"==typeof t)return t;if(j(t))return NaN;if(s(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=s(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=y(t);var n=L.test(t);return n||N.test(t)?B(t.slice(2),n?2:8):D.test(t)?NaN:+t};var $=Math.max,A=Math.min;u=function(t,e,n){var r,o,i,c,a,u,l=0,d=!1,v=!1,p=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=r,i=o;return r=o=void 0,l=e,c=t.apply(i,n)}function h(t){return l=t,a=setTimeout(g,e),d?y(t):c}function b(t){var n=t-u;return void 0===u||n>=e||n<0||v&&t-l>=i}function g(){var t=f();if(b(t))return T(t);a=setTimeout(g,function(t){var n=e-(t-u);return v?A(n,i-(t-l)):n}(t))}function T(t){return a=void 0,p&&r?y(t):(r=o=void 0,c)}function j(){var t=f(),n=b(t);if(r=arguments,o=this,u=t,n){if(void 0===a)return h(u);if(v)return clearTimeout(a),a=setTimeout(g,e),y(u)}return void 0===a&&(a=setTimeout(g,e)),c}return e=m(e)||0,s(n)&&(d=!!n.leading,i=(v="maxWait"in n)?$(m(n.maxWait)||0,e):i,p="trailing"in n?!!n.trailing:p),j.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=u=o=a=void 0},j.flush=function(){return void 0===a?c:T(f())},j};const F=t((function(t,e,n){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return s(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),u(t,e,{leading:r,maxWait:e,trailing:o})}))((function(t){const e=t.target.value.toLowerCase();i.instruments.filter((t=>t.name.toLowerCase()===e)).join("");console.log(e)}),600),U=document.querySelector(".js-list");document.querySelector(".js-search"),document.querySelector(".js-favorite"),document.querySelector(".js-basket"),document.querySelector(".js-delete-fav");(0,c.createMarkup)(i.instruments,U,!1,!1),U.addEventListener("click",(function(t){(0,a.onClick)(t,!1,!1)})),U.addEventListener("input",F);const W={startBtn:document.querySelector("button[data-action-start]"),stopBtn:document.querySelector("button[data-action-stop]"),clockFace:document.querySelector(".js-clockface")};const _=new class{resetTime(){this.getTimeComponents(0);this.onTick(0)}start(){if(this.isActive)return;const t=Date.now();this.isActive=!0,this.intervalId=setInterval((()=>{const e=Date.now()-t,n=this.getTimeComponents(e);this.onTick(n),console.log(Date.now())}),1e3)}stop(){clearInterval(this.intervalId),this.isActive=!1}getTimeComponents(t){return{hours:this.pad(Math.floor(t%36e5/36e5)),mins:this.pad(Math.floor(t%864e5/6e4)),secs:this.pad(Math.floor(t%6e4/1e3))}}pad(t){return String(t).padStart(2,0)}constructor({onTick:t}){this.intervalId=null,this.isActive=!1,this.onTick=t,this.init=t}}({onTick:function({hours:t,mins:e,secs:n}){W.clockFace.textContent=`${t}:${e}:${n}`}});W.startBtn.addEventListener("click",_.start.bind(_)),W.stopBtn.addEventListener("click",_.stop.bind(_));const P=document.querySelector(".js-box"),R=document.querySelector(".js-timer");let Q=11;setTimeout((()=>{P.style.display="block",P.style.position="fixed";const t=setInterval((()=>{console.log(t),Q-=1,R.textContent=Q,Q||(clearInterval(t),P.style.display="none")}),1e3)}),5e3);
//# sourceMappingURL=index.96a8a771.js.map