const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let l=null;t.addEventListener("click",(()=>{t.toggleAttribute("disabled"),e.removeAttribute("disabled"),l=setInterval((()=>{let t=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.body.style.backgroundColor=t}),1e3)})),e.addEventListener("click",(()=>{t.toggleAttribute("disabled"),e.toggleAttribute("disabled"),clearInterval(l)}));
//# sourceMappingURL=01-color-switcher.5d8e30a0.js.map