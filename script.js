function fastLog(text){
console.log(text);
return "muhaha";
}

function loadEvent() {
  console.log("Az oldal betöltődött");

  function clickMenuBtn (event) {
    event.target.classList.toggle("clicked");

    const fastLogResult = fastLog("Ezt a szöveget szeretném kiloggoltatni");
    console.log(fastLogResult);
  }

  document.getElementById("menu-btn").addEventListener("click", clickMenuBtn);
}
fastLog("na ez minden függvényen kívül van");

window.addEventListener("load", loadEvent);