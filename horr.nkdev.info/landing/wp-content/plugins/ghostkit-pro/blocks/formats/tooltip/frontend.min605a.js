!function(){"use strict";function t(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,r)}return o}function e(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?t(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(t,e,o){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}const{GHOSTKIT:{events:r},Popper:n}=window,i="ghostkit-pro-tooltip",a="ghostkit-pro-tooltip-popper",c="ghostkit-pro-tooltip-popper-show";function s(t){const e=t.ghostkitProTooltip,o=t.ghostkitProTooltipTimeout;let r=!1;return e&&e.state&&e.state.elements&&e.state.elements.popper&&(r=e.state.elements.popper),{instance:e,timeout:o,$tooltip:r}}function p(t,e){const{$tooltip:o,instance:r,timeout:i}=s(t);if(i&&clearTimeout(i),r){if(o){o.classList.add(c);const e=t.getAttribute("aria-label"),n=o.querySelector(":scope .".concat(a," > :first-child"));e!==n.innerHTML&&(n.innerHTML=e,r.update())}}else{const o=t.getAttribute("aria-label"),r=document.createElement("div");r.classList.add("ghostkit-pro-tooltip-popper-wrap"),r.innerHTML='<div class="'.concat(a,'"><div>').concat(o,"</div><div data-popper-arrow></div></div>"),e.getContainer(t).append(r);const i=r.querySelector(":scope .".concat(a)),s=r.querySelector(":scope [data-popper-arrow]"),p=n.createPopper(t,r,{placement:"top",modifiers:[{name:"arrow",options:{element:s,padding:5}},{name:"preventOverflow",options:{padding:10}},{name:"offset",options:{offset:[0,10]}},{name:"flip",options:{fallbackPlacements:["bottom"]}}],onFirstUpdate(){i.offsetHeight,i.style.transitionDuration="".concat(200,"ms"),r.classList.add(c)}});t.ghostkitProTooltip=p}}function l(t){const{$tooltip:e,instance:o,timeout:r}=s(t);if(r&&clearTimeout(r),e&&e.classList.remove(c),o){const e=setTimeout((()=>{t.ghostkitProTooltipTimeout=null,function(t){const{$tooltip:e,instance:o}=s(t);e&&e.remove(),o&&(o.destroy(),t.ghostkitProTooltip=null)}(t)}),200);t.ghostkitProTooltipTimeout=e}}!function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(void 0===n)return;const o=e({getContainer(){return document.body}},t);r.on(document,"mouseenter focus",".".concat(i,"[aria-label]"),(t=>{t.target.getAttribute("aria-label")&&p(t.target,o)})),r.on(document,"mouseleave blur",".".concat(i,"[aria-label]"),(t=>{l(t.target)}))}()}();