function loadEvent() {
  console.log("Az oldal betöltődött");

  function clickMenuBtn (event) {
    event.target.classList.toggle("clicked");
  }

  document.getElementById("menu-btn").addEventListener("click", clickMenuBtn);
}

window.addEventListener("load", loadEvent);