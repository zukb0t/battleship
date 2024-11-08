(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>s});var r=n(601),o=n.n(r),a=n(314),i=n.n(a)()(o());i.push([e.id,".gameboards{\n    background-color:pink;\n    display:flex;\n    justify-content:space-around;\n}\n\n#gameboard-human, #gameboard-computer{\n    height:500px;\n    width:500px;\n    display:grid;\n    grid-template-rows: repeat(10, 50px);\n    grid-template-columns: repeat(10, 50px);\n}\n\n.square{\n    border:2px solid whitesmoke;\n}",""]);const s=i},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],u=r.base?c[0]+r.base:c[0],l=a[u]||0,d="".concat(u," ").concat(l);a[u]=l+1;var p=n(d),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=o(f,r);r.byIndex=s,t.splice(s,0,{identifier:d,updater:h,references:1})}i.push(d)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=r(e,o),u=0;u<a.length;u++){var l=n(a[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0;var r=n(72),o=n.n(r),a=n(825),i=n.n(a),s=n(659),c=n.n(s),u=n(56),l=n.n(u),d=n(540),p=n.n(d),f=n(113),h=n.n(f),m=n(208),v={};v.styleTagTransform=h(),v.setAttributes=l(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=p(),o()(m.A,v),m.A&&m.A.locals&&m.A.locals;const g=function(){let e=[],t=[],n=[],r=[],o=new Set,a=[["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""],["","","","","","","","","",""]];const i=(e,t)=>e>=0&&e<10&&t>=0&&t<10,s=(e,t)=>""!==a[e][t];function c(n,r,o,c){if(!i(n,r))return"out of bounds";if(!i(n+o,r+o))return"out of bounds";if(s(n,r))return"ship is already placed there";const u=function(e){let t=0;return{length:e,hit:()=>t++,getHits:()=>t,isSunk:()=>t===e}}(o);e.push(u);for(let e=0;e<o;e++)"vertical"===c?(a[e+n][r]="X",t.push([e+n,r]),u.coordinates=[...t]):(a[n][e+r]="X",t.push([e+n,r]),u.coordinates=[...t]);return"ship is placed"}function u(e,t,n){for(;0!==n.length;){const r=n.shift(),[o,a]=r;if(o===e&&a===t)return!0}return!1}return{getBoard:()=>a,shipExists:s,placeShip:c,getShips:()=>e,receiveAttack:function(t,a){if(u(t,a,r)||u(t,a,n))return"attack was declared there";for(let n=0;n<e.length;n++){const i=e[n],s=i.coordinates;for(let e=0;e<s.length;e++){const[n,c]=s[e];if(n===t&&c===a)return i.hit(),r.push([t,a]),i.isSunk()&&!o.has(i)?(o.add(i),"ship got sunked"):"ship was hit"}}return n.push([t,a]),"ship was not hit"},isAllSunked:function(){return e.length===o.length},defaultShips:function(){c(0,0,5,"horizontal"),c(2,1,4,"vertical"),c(4,4,3,"vertical"),c(6,5,3,"vertical"),c(6,0,2,"vertical")},placeRandom:function(){let e=[5,4,3,3,2],t=Math.floor(9*Math.random()),n=Math.floor(9*Math.random()),r=Math.random()<.5?"horizontal":"vertical",o=e.shift(),a="";for(;e.length>0;)console.log("aa"),a=c(t,n,o,r),"ship is placed"===a&&(o=e.shift(),a=""),t=Math.floor(9*Math.random()),n=Math.floor(9*Math.random()),r=Math.random()<.5?"horizontal":"vertical"}}},y=function(){return{player:g()}},b=y(),x=y(),M=document.querySelector(".gameboards"),S=document.querySelector("#gameboard-human"),w=document.querySelector("#gameboard-computer");function A(e,t,n=!1){for(let r=0;r<e.length;r++)for(let o=0;o<e[r].length;o++){const e=document.createElement("div");e.classList.add("square"),e.setAttribute("x-value",r),e.setAttribute("y-value",o),b.player.shipExists(r,o)&&!n&&(e.style.backgroundColor="blue"),t.appendChild(e)}return t}!function(){b.player.defaultShips();const e=A(b.player.getBoard(),S);M.appendChild(e),x.player.placeRandom();const t=A(x.player.getBoard(),w);M.appendChild(t)}()})();