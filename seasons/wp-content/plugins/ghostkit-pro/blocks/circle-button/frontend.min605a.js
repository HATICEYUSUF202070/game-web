!function(){"use strict";function t(t,o,e){var n,i=e||{},a=i.noTrailing,r=void 0!==a&&a,c=i.noLeading,s=void 0!==c&&c,u=i.debounceMode,d=void 0===u?void 0:u,l=!1,f=0;function g(){n&&clearTimeout(n)}function p(){for(var e=arguments.length,i=new Array(e),a=0;a<e;a++)i[a]=arguments[a];var c=this,u=Date.now()-f;function p(){f=Date.now(),o.apply(c,i)}function w(){n=void 0}l||(s||!d||n||p(),g(),void 0===d&&u>t?s?(f=Date.now(),r||(n=setTimeout(d?w:p,t))):p():!0!==r&&(n=setTimeout(d?w:p,void 0===d?t-u:t)))}return p.cancel=function(t){var o=(t||{}).upcomingOnly,e=void 0!==o&&o;g(),l=!e},p}const{events:o}=window.GHOSTKIT,{animate:e,spring:n}=window.Motion,i=[];document.querySelectorAll(".ghostkit-circle-button-circular").forEach((t=>{const o=parseFloat(t.getAttribute("data-speed"));if(!o)return;const n=t.querySelector(":scope > svg > .ghostkit-circle-button-circular-text"),a=n.style.transform||0;let r=0;a&&(r=parseFloat(a.split("(")[1].split(")")[0].split(","))),e(n,{rotate:r},{duration:0}),i.push({dataSpeed:o,circularText:n,rotate:r,startPageYOffset:window.pageYOffset})})),function(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;o.on(window,"scroll",t(n,e)),o.on(window,"orientationchange",e)}((()=>{i.forEach((t=>{const{startPageYOffset:o}=t;let{pageYOffset:i}=window;o!==i&&(i-=o,e(t.circularText,{rotate:Math.round(10*(t.rotate+i/t.dataSpeed))/10},{duration:0,easing:n({damping:100})}))}))}))}();