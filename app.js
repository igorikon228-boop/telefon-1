const views=[...document.querySelectorAll("[data-view]")];
function showView(name){views.forEach(view=>view.classList.toggle("active",view.dataset.view===name));}
document.querySelectorAll("[data-open]").forEach(button=>button.addEventListener("click",()=>showView(button.dataset.open)));
document.querySelector("[data-gallery-lock]").addEventListener("click",()=>showView("gallery"));
const gate=document.querySelector("[data-gallery-gate]"),pin=document.querySelector("[data-gallery-pin]"),unlock=document.querySelector("[data-gallery-unlock]"),error=document.querySelector("[data-gallery-error]");
unlock.addEventListener("click",()=>{if(pin.value==="2013"){gate.classList.add("unlocked");error.textContent="";}else{error.textContent="Неверный код";pin.value="";pin.focus();}});
pin.addEventListener("keydown",e=>{if(e.key==="Enter")unlock.click();});
document.querySelectorAll("[data-back]").forEach(button=>button.addEventListener("click",()=>showView(button.dataset.back||"home")));
document.querySelector("[data-home]").addEventListener("click",()=>showView("home"));
function updateClock(){const now=new Date();document.querySelector("#clock").textContent=now.toLocaleTimeString("ru-RU",{hour:"2-digit",minute:"2-digit"});}
updateClock();setInterval(updateClock,30000);
const viewer=document.querySelector("[data-photo-viewer]"),viewerImage=document.querySelector("[data-viewer-image]"),viewerDate=document.querySelector("[data-viewer-date]");
document.querySelectorAll("[data-photo]").forEach(photo=>photo.addEventListener("click",()=>{viewerImage.src=photo.dataset.photo;viewerDate.textContent=photo.dataset.date;viewer.classList.add("open");}));
document.querySelector("[data-viewer-close]").addEventListener("click",()=>{viewer.classList.remove("open");viewerImage.src="";});

document.querySelectorAll('[data-open]').forEach(btn=>btn.addEventListener('click',()=>{const target=btn.dataset.open,view=document.querySelector('[data-view="'+target+'"]'),chat=view&&view.querySelector('.chat');if(chat)requestAnimationFrame(()=>{chat.scrollTop=chat.scrollHeight;});}));
