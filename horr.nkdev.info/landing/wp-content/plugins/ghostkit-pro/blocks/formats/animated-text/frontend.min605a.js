!function(){const{GHOSTKIT:{events:t},Typed:e}=window;t.on(document,"init.blocks.gkt",(()=>{void 0!==e&&document.querySelectorAll(".ghostkit-pro-animated-text:not(.ghostkit-pro-animated-text-ready)").forEach((t=>{let a=t.getAttribute("data-parts");try{a&&(a=JSON.parse(a))}catch(t){}if(t.classList.add("ghostkit-pro-animated-text-ready"),!a||!a.length)return;a.unshift(t.innerHTML);const r=!t.getAttribute("data-loop")||"true"===t.getAttribute("data-loop"),d=!!t.getAttribute("data-shuffle")&&"true"===t.getAttribute("data-shuffle"),s=t.getAttribute("data-type-speed")?parseInt(t.getAttribute("data-type-speed"),10):40,i=t.getAttribute("data-start-delay")?parseInt(t.getAttribute("data-start-delay"),10):0,o=t.getAttribute("data-back-speed")?parseInt(t.getAttribute("data-back-speed"),10):20,u=t.getAttribute("data-back-delay")?parseInt(t.getAttribute("data-back-delay"),10):1e3,n=t.getAttribute("data-cursor")||!1;t.innerHTML="",new e(t,{strings:a,typeSpeed:s,startDelay:i,backSpeed:o,backDelay:u,shuffle:d,loop:r,loopCount:!1,showCursor:!!n,cursorChar:n})}))}))}();