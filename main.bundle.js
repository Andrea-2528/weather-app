(()=>{"use strict";var n={365:(n,t,e)=>{e.d(t,{A:()=>s});var r=e(601),o=e.n(r),i=e(314),a=e.n(i)()(o());a.push([n.id,'/* 1. Use a more-intuitive box-sizing model */\n*,\n*::before,\n*::after {\n\tbox-sizing: border-box;\n}\n\n/* 2. Remove default margin */\n* {\n\tmargin: 0;\n\tpadding: 0;\n\t/* Debug border */\n\t/* border: 1px solid magenta; */\n\t/* Debug padding */\n\t/* padding: 0.2rem; */\n}\n\nbody {\n\t/* 3. Add accessible line-height */\n\tline-height: 1.5;\n\t/* 4. Improve text rendering */\n\t-webkit-font-smoothing: antialiased;\n}\n\n/* 5. Improve media defaults */\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n\tdisplay: block;\n\tmax-width: 100%;\n}\n\n/* 6. Inherit fonts for form controls */\ninput,\nbutton,\ntextarea,\nselect {\n\tfont: inherit;\n}\n\n/* 7. Avoid text overflows */\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n\toverflow-wrap: break-word;\n}\n\n/* 8. Improve line wrapping */\np {\n\ttext-wrap: pretty;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n\ttext-wrap: balance;\n}\n\n/*\n  9. Create a root stacking context\n*/\n#root,\n#__next {\n\tisolation: isolate;\n}\n\n/******************************************************************************/\n/******************************END OF CSS RESET********************************/\n/******************************************************************************/\n\n/* GENERAL CSS */\nbody {\n\tdisplay: flex;\n\tflex-direction: column;\n\tcolor: #1c1e1f;\n\tfont-family: "Courier New", Courier, monospace;\n  background-color: #050563;\n}\n\n:root {\n\tfont-size: 12px;\n}\n\nsvg {\n\tfill: #1c1e1f;\n}\n\n/* SEARCHBAR */\n\n.search-container {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: 2rem;\n\tbackground-color: rgb(5, 5, 39);\n}\n\n/* WEATHER-CARD */\n\n.current-weather {\n\tbackground-color: rgb(5, 5, 99);\n\talign-items: center;\n\tjustify-content: center;\n\tpadding: 12rem 0rem;\n}\n\n.current-weather,\n.card,\n.card-top,\n.card-icon-container,\n.card-top-info,\n.info-top,\n.sunrise,\n.sunset,\n.moonphase,\n.info-center,\n.summary,\n.temperature,\n.temperature-feelslike,\n.temperature-minmax,\n.info-bottom,\n.pressure,\n.dew,\n.uv,\n.risk,\n.card-bottom,\n.wind,\n.wind-icon-container,\n.wind-info,\n.wind-speed,\n.visibility,\n.sun,\n.sun-icon-container,\n.sun-info,\n.rain,\n.rain-icon-container,\n.rain-info,\n.rain-amount {\n\tdisplay: flex;\n}\n.card,\n.card-top-info,\n.temperature-feelslike,\n.temperature-minmax,\n.wind-info,\n.sun-info,\n.rain-info {\n\tflex-direction: column;\n}\n\n.card {\n\tbackground-color: rgb(230, 230, 230);\n\twidth: 925px;\n\theight: 300px;\n\tborder-radius: 20px;\n\tpadding: 2rem;\n\tjustify-content: space-between;\n\tgap: 2rem;\n}\n\n.card-top {\n\tgap: 1rem;\n}\n\n.card-icon-container {\n\tjustify-content: center;\n\talign-items: center;\n\tflex: 0.2;\n}\n\n.card-top-info {\n\tflex: 1;\n\tjustify-content: center;\n  gap: 1rem;\n}\n\n.info-top {\n\tjustify-content: space-between;\n\talign-items: center;\n\tfont-size: 0.8rem;\n}\n.info-top p {\n\talign-self: center;\n}\n\n.sunrise,\n.sunset,\n.moonphase {\n\tgap: 0.4rem;\n}\n\np.local-time,\n.moonphase {\n  align-self: flex-end;\n}\n\n.info-center {\n\tgap: 1rem;\n}\n\n.summary {\n\talign-items: center;\n\twidth: 46%;\n}\n\n.summary-text {\n\tfont-size: 3.2rem;\n}\n\n.temperature {\n\twidth: 54%;\n\tgap: 1rem;\n\talign-items: center;\n\tjustify-content: space-between;\n}\n\n.temperature-current {\n\tfont-size: 2.8rem;\n}\n\n.temperature-feelslike,\n.temperature-minmax {\n\tfont-size: 0.8rem;\n\tfont-style: italic;\n}\n\n.info-bottom {\n\tjustify-content: space-between;\n\talign-items: center;\n\tfont-size: 0.8rem;\n}\n\n.info-bottom > * {\n\tgap: 0.5rem;\n}\n\n.card-bottom {\n\tjustify-content: space-between;\n}\n\n.wind,\n.sun,\n.rain {\n\tgap: 1rem;\n}\n\n.wind-info,\n.sun-info,\n.rain-info {\n\tgap: 1rem;\n}\n\n.wind-icon-container,\n.sun-icon-container,\n.rain-icon-container {\n\talign-items: center;\n}\n\n.wind-gust-value {\n\tfont-size: 0.9rem;\n\tfont-style: italic;\n}\n\n.wind-speed,\n.visibility,\n.rain-amount {\n\tgap: 1rem;\n}\n\n\n.welcome-message,\n.loading-screen {\n\tposition: relative;\n\tbackground-color: rgb(230, 230, 230);\n\twidth: 100%;\n\tmin-height: 260px;\n\tz-index: 1;\n\ttop: -100%;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n  opacity: 1;\n  transition: opacity 0.5s ease-in-out;\n}\n\n.welcome-message > p {\n\tfont-size: 2rem;\n}\n.loading-screen > p {\n\tfont-size: 4rem;\n}\n\n.loader {\n  width: 50px;\n  aspect-ratio: 1;\n  background-color: #8d847f;\n  border-radius: 50%;\n  animation: l4 3s infinite;\n}\n@keyframes l4 {\n  12.5% {background-image:radial-gradient(80% 65% at left, #0000 94%,#fff9)}\n  25%   {background-image:linear-gradient(90deg,#0000 50%,#fff9 0)}\n  37.5% {background-image:radial-gradient(80% 65% at right,#fff9 94%,#0000)}\n  50%   {background-image:linear-gradient(#fff9 0 0)}\n  62.5% {background-image:radial-gradient(80% 65% at left, #fff9 94%,#0000)}\n  75%   {background-image:linear-gradient(-90deg,#0000 50%,#fff9 0)}\n  87.5% {background-image:radial-gradient(80% 65% at right,#0000 94%,#fff9)}\n}\n\n/* FORECAST */\n\n.forecast {\n\tbackground-color: rgb(32, 32, 121);\n}\n',""]);const s=a},314:n=>{n.exports=function(n){var t=[];return t.toString=function(){return this.map((function(t){var e="",r=void 0!==t[5];return t[4]&&(e+="@supports (".concat(t[4],") {")),t[2]&&(e+="@media ".concat(t[2]," {")),r&&(e+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),e+=n(t),r&&(e+="}"),t[2]&&(e+="}"),t[4]&&(e+="}"),e})).join("")},t.i=function(n,e,r,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var u=0;u<n.length;u++){var d=[].concat(n[u]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),e&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=e):d[2]=e),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),t.push(d))}},t}},601:n=>{n.exports=function(n){return n[1]}},72:n=>{var t=[];function e(n){for(var e=-1,r=0;r<t.length;r++)if(t[r].identifier===n){e=r;break}return e}function r(n,r){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],u=r.base?c[0]+r.base:c[0],d=i[u]||0,l="".concat(u," ").concat(d);i[u]=d+1;var m=e(l),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var f=o(p,r);r.byIndex=s,t.splice(s,0,{identifier:l,updater:f,references:1})}a.push(l)}return a}function o(n,t){var e=t.domAPI(t);return e.update(n),function(t){if(t){if(t.css===n.css&&t.media===n.media&&t.sourceMap===n.sourceMap&&t.supports===n.supports&&t.layer===n.layer)return;e.update(n=t)}else e.remove()}}n.exports=function(n,o){var i=r(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=e(i[a]);t[s].references--}for(var c=r(n,o),u=0;u<i.length;u++){var d=e(i[u]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=c}}},659:n=>{var t={};n.exports=function(n,e){var r=function(n){if(void 0===t[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}t[n]=e}return t[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}},540:n=>{n.exports=function(n){var t=document.createElement("style");return n.setAttributes(t,n.attributes),n.insert(t,n.options),t}},56:(n,t,e)=>{n.exports=function(n){var t=e.nc;t&&n.setAttribute("nonce",t)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=n.insertStyleElement(n);return{update:function(e){!function(n,t,e){var r="";e.supports&&(r+="@supports (".concat(e.supports,") {")),e.media&&(r+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(r+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),r+=e.css,o&&(r+="}"),e.media&&(r+="}"),e.supports&&(r+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,n,t.options)}(t,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)}}}},113:n=>{n.exports=function(n,t){if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={id:r,exports:{}};return n[r](i,i.exports,e),i.exports}e.n=n=>{var t=n&&n.__esModule?()=>n.default:()=>n;return e.d(t,{a:t}),t},e.d=(n,t)=>{for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})},e.o=(n,t)=>Object.prototype.hasOwnProperty.call(n,t),e.nc=void 0;var r=e(72),o=e.n(r),i=e(825),a=e.n(i),s=e(659),c=e.n(s),u=e(56),d=e.n(u),l=e(540),m=e.n(l),p=e(113),f=e.n(p),q=e(365),y={};y.styleTagTransform=f(),y.setAttributes=d(),y.insert=c().bind(null,"head"),y.domAPI=a(),y.insertStyleElement=m(),o()(q.A,y),q.A&&q.A.locals&&q.A.locals;const h='<path d="M240-200q-17 0-28.5-11.5T200-240q0-17 11.5-28.5T240-280q17 0 28.5 11.5T280-240q0 17-11.5 28.5T240-200Zm480 0q-17 0-28.5-11.5T680-240q0-17 11.5-28.5T720-280q17 0 28.5 11.5T760-240q0 17-11.5 28.5T720-200ZM360-40q-17 0-28.5-11.5T320-80q0-17 11.5-28.5T360-120q17 0 28.5 11.5T400-80q0 17-11.5 28.5T360-40Zm120-160q-17 0-28.5-11.5T440-240q0-17 11.5-28.5T480-280q17 0 28.5 11.5T520-240q0 17-11.5 28.5T480-200ZM600-40q-17 0-28.5-11.5T560-80q0-17 11.5-28.5T600-120q17 0 28.5 11.5T640-80q0 17-11.5 28.5T600-40ZM300-320q-91 0-155.5-64.5T80-540q0-83 55-145t136-73q32-57 87.5-89.5T480-880q90 0 156.5 57.5T717-679q69 6 116 57t47 122q0 75-52.5 127.5T700-320H300Zm0-80h400q42 0 71-29t29-71q0-42-29-71t-71-29h-60v-40q0-66-47-113t-113-47q-48 0-87.5 26T333-704l-10 24h-25q-57 2-97.5 42.5T160-540q0 58 41 99t99 41Zm180-200Z"/>',g='<path d="M558-83.33q-12.33 6-25.83 1.5-13.5-4.5-19.5-16.84l-66-132q-6-12.33-1.84-25.83Q449-270 461.33-276q12.34-6 25.84-1.5t19.5 16.83l66 132q6 12.34 1.83 25.84T558-83.33ZM798-84q-12.33 6-25.83 1.5-13.5-4.5-19.5-16.83l-66-132q-6-12.34-1.84-25.84 4.17-13.5 16.5-19.5 12.34-6 25.84-1.5t19.5 16.84l66 132q6 12.33 1.83 25.83Q810.33-90 798-84Zm-480 0q-12.33 6-25.83 1.83-13.5-4.16-19.5-16.5l-66-132q-6-12.33-1.5-25.83Q209.67-270 222-276q12.33-6 25.83-1.83 13.5 4.16 19.5 16.5l66 132.66q6 12.34 1.5 25.5Q330.33-90 318-84Zm-24.67-249.33q-88.33 0-150.83-62.5Q80-458.33 80-546.67 80-627 136-689q56-62 139-69.67 32-56.33 85.5-88.83T480-880q90.67 0 153.83 57.5Q697-765 711-679.67 786.67-675 833.33-625 880-575 880-506.67q0 71.67-50.5 122.5-50.5 50.84-122.83 50.84H293.33Zm0-66.67h413.34q44.66 0 75.66-31.33 31-31.34 31-75.34 0-44.66-31-75.66t-75.66-31h-60v-33.34q0-69.33-48.67-118-48.67-48.66-118-48.66-50 0-91.5 27t-61.5 73l-8.67 20h-27q-60.33 2-102.5 44.5-42.16 42.5-42.16 102.16 0 60.67 43 103.67t103.66 43ZM480-606.67Z"/>',v='<path d="M720-203.33q-15 0-25.83-10.84Q683.33-225 683.33-240q0-15 10.84-25.83Q705-276.67 720-276.67q15 0 25.83 10.84Q756.67-255 756.67-240q0 15-10.84 25.83Q735-203.33 720-203.33ZM280-80q-15 0-25.83-10.83-10.84-10.84-10.84-25.84t10.84-25.83Q265-153.33 280-153.33q15 0 25.83 10.83 10.84 10.83 10.84 25.83 0 15-10.84 25.84Q295-80 280-80Zm-40-123.33q-15 0-25.83-10.84Q203.33-225 203.33-240q0-15 10.84-25.83Q225-276.67 240-276.67h360q15 0 25.83 10.84Q636.67-255 636.67-240q0 15-10.84 25.83Q615-203.33 600-203.33H240ZM400-80q-15 0-25.83-10.83-10.84-10.84-10.84-25.84t10.84-25.83Q385-153.33 400-153.33h280q15 0 25.83 10.83 10.84 10.83 10.84 25.83 0 15-10.84 25.84Q695-80 680-80H400ZM293.33-333.33q-88.24 0-150.78-62.52Q80-458.36 80-546.56 80-627 136-689t139-69.67q32-56.33 85.5-88.83T480.28-880q90.39 0 153.55 57.5Q697-765 711-679.67 786.67-675 833.33-625 880-575 880-506.92q0 71.92-50.56 122.75-50.55 50.84-122.77 50.84H293.33Zm0-66.67h413.34q44.8 0 75.73-31.33 30.93-31.34 30.93-75.67t-30.93-75.33q-30.93-31-75.73-31h-60v-33.34q0-69.33-48.67-118-48.67-48.66-117.86-48.66-50.32 0-91.73 27-41.41 27-61.41 73l-8.67 20h-27q-60.33 2-102.5 44.42-42.16 42.43-42.16 102.15 0 60.76 42.95 103.76 42.95 43 103.71 43ZM480-606.67Z"/>',C='<path d="M463.33-160q-52.66 0-85.33-30.33-32.67-30.34-32.67-85h72q0 23 11.5 35.83 11.5 12.83 34.5 12.83 23.67 0 35.17-11.83t11.5-36.83q0-25-11.5-37.84Q487-326 463.33-326H80v-66.67h383.33q52.67 0 83 30.34 30.34 30.33 30.34 87 0 54.66-30.34 85Q516-160 463.33-160ZM80-565.33V-632h545.33q33.34 0 50.34-17.33 17-17.34 17-53.34t-17-53.33q-17-17.33-50.34-17.33-34 0-51 19.33t-17 48.67h-66.66q0-58.34 36.83-96.5Q564.33-840 625.33-840q60.34 0 97.17 37.17 36.83 37.16 36.83 100.16T722.5-602.5q-36.83 37.17-97.17 37.17H80Zm668 326.66v-66.66q32 0 48.67-18.67 16.66-18.67 16.66-52 0-34-18-51t-50-17H80v-66.67h665.33q61 0 97.84 36.84Q880-437 880-376q0 62.33-35.5 99.83t-96.5 37.5Z"/>',x='<path d="M254-160q-89 0-151.5-62T40-373q0-78 49-137.67 49-59.66 125.67-73.33 21.66-95.33 96-155.33 74.33-60 170.66-60 113.67 0 192.17 81.5 78.5 81.5 78.5 196.5v16q71 1.33 119.5 50.83T920-332.67q0 71-50.83 121.84Q818.33-160 747.33-160H254Zm0-66.67h493.33q44 0 75-31t31-75q0-44-31-75t-75-31h-62v-82.66q0-88.34-60.16-149.84-60.17-61.5-146.5-61.5-86.34 0-146.84 61.5t-60.5 149.84H252q-60.67 0-103 42.66Q106.67-436 106.67-374q0 61.33 43 104.33t104.33 43ZM480-480Z"/>',b='<path d="M446.67-766.67V-920h66.66v153.33h-66.66ZM706-659.33l-46.67-47.34 108.34-108.66 46.66 47.66L706-659.33Zm60.67 212.66v-66.66H920v66.66H766.67Zm1.66 301L660-254l47.33-47.33 108.67 108-47.67 47.66ZM254-659.33 145.67-767.67l47-47 108 108.67L254-659.33Zm-14 472.66h180q30.56 0 51.94-21.34 21.39-21.34 21.39-51.83t-20.84-52.33Q451.65-334 421-334h-46.33L356-377.33q-14.76-34.84-46.4-55.42T240-453.33q-55.56 0-94.44 38.84-38.89 38.84-38.89 94.33 0 55.49 38.89 94.49 38.88 39 94.44 39Zm0 66.67q-83 0-141.5-58.5T40-320q0-83 58.5-141.5T240-520q58.49 0 106.75 32.5Q395-455 418.33-400.67q59.41 0 99.88 43.4 40.46 43.39 40.46 103.94-4 56.33-43.53 94.83Q475.62-120 420-120H240Zm318.67-133.33q-3.67-16.93-7.34-33-3.66-16.08-7.33-33 49.67-19.67 79.5-63.36t29.83-97.22q0-72.09-50.66-122.76Q552-653.33 480-653.33q-64.81 0-113.42 41.45-48.61 41.44-57.25 105.21-17.33-3.66-34.66-6.66-17.34-3-34.67-6.67 14-88 82.5-144T480-720q100 0 170 70t70 170.23q0 77.44-44.33 139.27-44.34 61.83-117 87.17ZM481-480Z"/>',w='<path d="M513.33-435ZM524-40H412l14.67-10.5q14.66-10.5 32.16-23 17.5-12.5 32.17-23l14.67-10.5H533q91.67-2 170.17-55 78.5-53 123.83-134.33-88.67-8-169.67-42.17-81-34.17-143.66-96.5Q451-497.33 417-578t-41.67-168.67q-84.33 46.34-136.5 126.5Q186.67-540 186.67-444v9.67q0 5.66.66 9.66l-10.02 4.32q-10.03 4.31-22.14 9.02-12.12 4.7-22.14 9.02L123-398q-2-12.33-2.5-23.67Q120-433 120-444q0-146 93-257.5T450-840q-18 98.33 11 192.92 29 94.59 100 165.66t165.5 100.1Q821-352.3 920-370.31q-26 144.13-138 237.22T524-40Zm-284-66.67h180q30.56 0 51.94-21.34 21.39-21.34 21.39-51.83t-20.9-51.99q-20.91-21.5-50.43-21.5h-43.33L362-292.67q-16-37-49.12-58.83-33.13-21.83-72.88-21.83-54.67 0-94 38.83T106.67-240q0 55.56 38.89 94.44 38.88 38.89 94.44 38.89ZM240-40q-83 0-141.5-58.5T40-240q0-83 58.5-141.5T240-440q60 0 109.5 32.5T423-320q57 2 97 42.5t40 97.5q0 58-41 99t-99 41H240Z"/>',T='<path d="M446.67-766.67V-920h66.66v153.33h-66.66ZM706-659.33l-46.33-46.34 108-109.66 46.66 47.66L706-659.33Zm60.67 212.66v-66.66H920v66.66H766.67ZM446.67-40v-153.33h66.66V-40h-66.66ZM253.33-660.67l-108-107 47-46.66L300.67-706l-47.34 45.33ZM768-145.33l-108.33-109L705-299.67l110 106-47 48.34ZM40-446.67v-66.66h153.33v66.66H40Zm153 301.34-47.33-47L253-299.67l24.33 22.34L301.67-254 193-145.33ZM480-240q-100 0-170-70t-70-170q0-100 70-170t170-70q100 0 170 70t70 170q0 100-70 170t-170 70Zm0-66.67q72 0 122.67-50.66Q653.33-408 653.33-480t-50.66-122.67Q552-653.33 480-653.33t-122.67 50.66Q306.67-552 306.67-480t50.66 122.67Q408-306.67 480-306.67ZM480-480Z"/>',M='<path d="M484-80q-84 0-157.5-32t-128-86.5Q144-253 112-326.5T80-484q0-146 93-257.5T410-880q-18 98.33 11 192.92 29 94.59 100 165.66t165.5 100.1Q781-392.3 880-410.31q-26 144.13-138 237.22T484-80Zm0-66.67q96 0 175.67-52.66Q739.33-252 787-336.33q-88.67-8-169.67-42.17-81-34.17-143.66-96.5Q411-537.33 377-618t-41.67-168.67q-84.33 46.34-136.5 126.5Q146.67-580 146.67-484q0 140.56 98.39 238.94 98.38 98.39 238.94 98.39ZM473.33-475Z"/>';(async()=>{const n=document.querySelector(".search-bar"),t=document.querySelector(".welcome-message"),e=document.querySelector(".loading-screen");e.style.display="none",n.addEventListener("keydown",(async r=>{if("Enter"===r.key){const r=n.value;t.style.transition="opacity 0.5s ease-in-out",e.style.transition="opacity 0.5s ease-in-out",t.style.opacity="0",await new Promise((n=>setTimeout(n,500))),t.style.display="none",e.style.display="flex",e.style.opacity="1";const o=await async function(n){try{const t=await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${n}?unitGroup=metric&key=FJBC9PMWGFNQ97Z36YBQ7JA2E&contentType=json`);if(!t.ok)throw new Error(`HTTP error! Status: ${t.status}`);const e=await t.json();console.log(e);const r=e.currentConditions;delete e.currentConditions;const o=e.stations;delete e.stations;const i=e.alerts;delete e.alerts;const a=e.days;return delete e.days,{currentConditions:r,stations:o,alerts:i,days:a,general:e}}catch(n){console.error("Error fetching weather data:",n)}}(r);console.log(o),function(n){const t=document.querySelector(".card-icon"),e=document.querySelector(".summary-text");switch(n.currentConditions.icon){case"snow":t.innerHTML=h,e.textContent="Snow";break;case"rain":t.innerHTML=g,e.textContent="Rain";break;case"fog":t.innerHTML=v,e.textContent="Mist";break;case"wind":t.innerHTML=C,e.textContent="Windy";break;case"cloudy":t.innerHTML=x,e.textContent="Cloudy";break;case"partly-cloudy-day":t.innerHTML=b,e.textContent="Partly Cloudy";break;case"partly-cloudy-night":t.innerHTML=w,e.textContent="Partly Cloudy";break;case"clear-day":t.innerHTML=T,e.textContent="Clear";break;case"clear-night":t.innerHTML=M,e.textContent="Clear"}document.querySelector(".local-time").textContent=n.currentConditions.datetime.slice(0,-3);const r=document.querySelector(".sunrise-time"),o=document.querySelector(".sunset-time");r.textContent=n.currentConditions.sunrise.slice(0,-3),o.textContent=n.currentConditions.sunset.slice(0,-3);const i=document.querySelector(".moonphase-name");0===n.currentConditions.moonphase?i.textContent="New Moon":n.currentConditions.moonphase>0&&n.currentConditions.moonphase<.25?i.textContent="Waxing Crescent":.25===n.currentConditions.moonphase?i.textContent="First Quarter":n.currentConditions.moonphase>.25&&n.currentConditions.moonphase<.5?i.textContent="Waxing Gibbous":.5===n.currentConditions.moonphase?i.textContent="Full Moon":n.currentConditions.moonphase>.5&&n.currentConditions.moonphase<.75?i.textContent="Waning Gibbous":.75===n.currentConditions.moonphase?i.textContent="Last Quarter":n.currentConditions.moonphase>.75&&n.currentConditions.moonphase<1&&(i.textContent="Waning Crescent");const a=document.querySelector(".temperature-current"),s=document.querySelector(".feelslike-value"),c=document.querySelector(".max-temperature"),u=document.querySelector(".min-temperature");a.textContent=`${n.currentConditions.temp} °C`,s.textContent=`${n.currentConditions.feelslike} °C`,c.textContent=`Max: ${n.days[0].tempmax} °C (${n.days[0].feelslikemax} °C)`,u.textContent=`Min: ${n.days[0].tempmin} °C (${n.days[0].feelslikemin} °C)`,document.querySelector(".pressure-value").textContent=`${n.currentConditions.pressure} hPa`,document.querySelector(".dew-value").textContent=`${n.currentConditions.dew} °C`,document.querySelector(".uv-value").textContent=`${n.currentConditions.uvindex}`;const d=document.querySelector(".risk-value");let l;n.days[0].severerisk<=30?l="Low":n.days[0].severerisk>30&&n.days[0].severerisk<=70?l="Medium":n.days[0].severerisk>70&&(l="High"),d.textContent=`${l} (${n.days[0].severerisk})`;const m=document.querySelector(".wind-icon"),p=n.currentConditions.winddir;m.style.transform=`rotate(${p}deg)`;const f=document.querySelector(".wind-speed-value"),q=document.querySelector(".wind-gust-value"),y=document.querySelector(".visibility-value");f.textContent=`${n.currentConditions.windspeed} Km/h`,q.textContent=`(up to ${n.currentConditions.windgust} Km/h)`,y.textContent=`${n.currentConditions.visibility} Km`;const Z=document.querySelector(".sun-radiation"),Q=document.querySelector(".sun-energy");Z.textContent=`${n.currentConditions.solarradiation} W/m²`,Q.textContent=`${n.currentConditions.solarenergy} MJ/m²`;const k=document.querySelector(".rain-value"),S=document.querySelector(".rain-chanse"),H=document.querySelector(".cloud-cover-value");0===n.currentConditions.snow?k.textContent=`Rain: ${n.currentConditions.precip} mm`:k.textContent=`Snow: ${n.currentConditions.snow} cm`,S.textContent=`(${n.currentConditions.precipprob}%)`,H.textContent=`Cloud cover: ${n.currentConditions.cloudcover}%`}(o),e.style.opacity="0",await new Promise((n=>setTimeout(n,500))),e.style.display="none"}}))})()})();