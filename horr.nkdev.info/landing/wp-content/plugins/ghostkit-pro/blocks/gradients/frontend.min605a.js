!function(){var t={7:function(t,n){var i,r;(r=r||{}).stringify=(i={"visit_linear-gradient":function(t){return i.visit_gradient(t)},"visit_repeating-linear-gradient":function(t){return i.visit_gradient(t)},"visit_radial-gradient":function(t){return i.visit_gradient(t)},"visit_repeating-radial-gradient":function(t){return i.visit_gradient(t)},visit_gradient:function(t){var n=i.visit(t.orientation);return n&&(n+=", "),t.type+"("+n+i.visit(t.colorStops)+")"},visit_shape:function(t){var n=t.value,r=i.visit(t.at),e=i.visit(t.style);return e&&(n+=" "+e),r&&(n+=" at "+r),n},"visit_default-radial":function(t){var n="",r=i.visit(t.at);return r&&(n+=r),n},"visit_extent-keyword":function(t){var n=t.value,r=i.visit(t.at);return r&&(n+=" at "+r),n},"visit_position-keyword":function(t){return t.value},visit_position:function(t){return i.visit(t.value.x)+" "+i.visit(t.value.y)},"visit_%":function(t){return t.value+"%"},visit_em:function(t){return t.value+"em"},visit_px:function(t){return t.value+"px"},visit_literal:function(t){return i.visit_color(t.value,t)},visit_hex:function(t){return i.visit_color("#"+t.value,t)},visit_rgb:function(t){return i.visit_color("rgb("+t.value.join(", ")+")",t)},visit_rgba:function(t){return i.visit_color("rgba("+t.value.join(", ")+")",t)},visit_color:function(t,n){var r=t,e=i.visit(n.length);return e&&(r+=" "+e),r},visit_angular:function(t){return t.value+"deg"},visit_directional:function(t){return"to "+t.value},visit_array:function(t){var n="",r=t.length;return t.forEach((function(t,e){n+=i.visit(t),e<r-1&&(n+=", ")})),n},visit:function(t){if(!t)return"";if(t instanceof Array)return i.visit_array(t,"");if(t.type){var n=i["visit_"+t.type];if(n)return n(t);throw Error("Missing visitor visit_"+t.type)}throw Error("Invalid node.")}},function(t){return i.visit(t)}),(r=r||{}).parse=function(){var t=/^(\-(webkit|o|ms|moz)\-)?(linear\-gradient)/i,n=/^(\-(webkit|o|ms|moz)\-)?(repeating\-linear\-gradient)/i,i=/^(\-(webkit|o|ms|moz)\-)?(radial\-gradient)/i,r=/^(\-(webkit|o|ms|moz)\-)?(repeating\-radial\-gradient)/i,e=/^to (left (top|bottom)|right (top|bottom)|left|right|top|bottom)/i,o=/^(closest\-side|closest\-corner|farthest\-side|farthest\-corner|contain|cover)/,a=/^(left|center|right|top|bottom)/i,u=/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))px/,s=/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))\%/,c=/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))em/,l=/^(-?(([0-9]*\.[0-9]+)|([0-9]+\.?)))deg/,v=/^\(/,f=/^\)/,g=/^,/,d=/^\#([0-9a-fA-F]+)/,p=/^([a-zA-Z]+)/,y=/^rgb/i,h=/^rgba/i,_=/^(([0-9]*\.[0-9]+)|([0-9]+\.?))/,m="";function b(t){var n=new Error(m+": "+t);throw n.source=m,n}function x(){return k("linear-gradient",t,E)||k("repeating-linear-gradient",n,E)||k("radial-gradient",i,A)||k("repeating-radial-gradient",r,A)}function k(t,n,i){return w(n,(function(n){var r=i();return r&&(H(g)||b("Missing comma before color stops")),{type:t,orientation:r,colorStops:I(T)}}))}function w(t,n){var i=H(t);if(i){H(v)||b("Missing (");var r=n(i);return H(f)||b("Missing )"),r}}function E(){return F("directional",e,1)||F("angular",l,1)}function A(){var t,n,i=M();return i&&((t=[]).push(i),n=m,H(g)&&((i=M())?t.push(i):m=n)),t}function M(){var t,n,i=((n=F("shape",/^(circle)/i,0))&&(n.style=j()||S()),n||((t=F("shape",/^(ellipse)/i,0))&&(t.style=O()||S()),t));if(i)i.at=z();else{var r=S();if(r){i=r;var e=z();e&&(i.at=e)}else{var o=C();o&&(i={type:"default-radial",at:o})}}return i}function S(){return F("extent-keyword",o,1)}function z(){if(F("position",/^at/,0)){var t=C();return t||b("Missing positioning value"),t}}function C(){var t={x:O(),y:O()};if(t.x||t.y)return{type:"position",value:t}}function I(t){var n=t(),i=[];if(n)for(i.push(n);H(g);)(n=t())?i.push(n):b("One extra comma");return i}function T(){var t=F("hex",d,1)||w(h,(function(){return{type:"rgba",value:I(G)}}))||w(y,(function(){return{type:"rgb",value:I(G)}}))||F("literal",p,0);return t||b("Expected color definition"),t.length=O(),t}function G(){return H(_)[1]}function O(){return F("%",s,1)||F("position-keyword",a,1)||j()}function j(){return F("px",u,1)||F("em",c,1)}function F(t,n,i){var r=H(n);if(r)return{type:t,value:r[i]}}function H(t){var n,i;return(i=/^[\n\r\t\s]+/.exec(m))&&L(i[0].length),(n=t.exec(m))&&L(n[0].length),n}function L(t){m=m.substr(t)}return function(t){return m=t.toString(),n=I(x),m.length>0&&b("Invalid input not EOF"),n;var n}}(),n.parse=r.parse,n.stringify=r.stringify}},n={};function i(r){var e=n[r];if(void 0!==e)return e.exports;var o=n[r]={exports:{}};return t[r](o,o.exports,i),o.exports}!function(){"use strict";var t=i(7);const n={};const{events:r}=window.GHOSTKIT;r.on(document,"init.blocks.gkt",(()=>{document.querySelectorAll(".ghostkit-pro-gradient-mask:not(.ghostkit-pro-gradient-mask-ready)").forEach((i=>{i.classList.add("ghostkit-pro-gradient-mask-ready"),i.innerHTML=function(i,r,e){let o="";const a=function(i){return void 0===n[i]&&(n[i]=!("string"!=typeof(r=i)||!/^linear-gradient\(/g.test(r))&&t.parse(i)),n[i];var r}(i);if(a&&a[0]){let t=0;a[0].orientation&&(t=parseInt(a[0].orientation.value,10),t-=90,t<0&&(t+=360),t>360&&(t-=360)),o='\n            <div style="position: absolute; left: -9999px;">\n                <svg width="0" height="0">\n                    <linearGradient\n                        id="'.concat(r,'"\n                        gradientTransform="rotate(').concat(t,' 0.5 0.5)"\n                    >').concat(function(t){let n="";return t.forEach(((t,i)=>{const r=function(t){let n="";return t&&t.type&&("hex"===t.type?n="#".concat(t.value):"rgba"===t.type&&(n="rgba(".concat(t.value[0],", ").concat(t.value[1],", ").concat(t.value[2],", ").concat(t.value[3],")"))),n}(t);let e=0;t.length&&(e=t.length.value),n+="<stop offset=".concat(e,'% stop-color="').concat(r,'" key="').concat(i,'" />')})),n}(a[0].colorStops),"</linearGradient>\n                </svg>\n                <style>\n                    ").concat(e,' svg path[stroke="currentColor"],\n                    ').concat(e,' svg[stroke="currentColor"] {\n                        stroke: url(#').concat(r,");\n                    }\n                    ").concat(e,' svg path[fill="currentColor"],\n                    ').concat(e,' svg[fill="currentColor"] {\n                        fill: url(#').concat(r,");\n                    }\n                </style>\n            </div>\n        ")}return o}(i.getAttribute("data-gradient-style"),i.getAttribute("data-gradient-id"),i.getAttribute("data-gradient-selector"))}))}))}()}();