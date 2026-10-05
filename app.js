const views=[...document.querySelectorAll("[data-view]")];
function showView(name){views.forEach(view=>view.classList.toggle("active",view.dataset.view===name));}
document.querySelectorAll("[data-open]").forEach(button=>button.addEventListener("click",()=>showView(button.dataset.open)));
document.querySelectorAll("[data-back]").forEach(button=>button.addEventListener("click",()=>showView("home")));
document.querySelector("[data-home]").addEventListener("click",()=>showView("home"));
function updateClock(){const now=new Date();document.querySelector("#clock").textContent=now.toLocaleTimeString("ru-RU",{hour:"2-digit",minute:"2-digit"});}
updateClock();setInterval(updateClock,30000);