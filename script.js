function toggleClicked () {
  document.getElementById("bodyID").classList.toggle("clicked"); 
}


function loadEvent() {
  console.log("Az oldal betöltődött");

  document.getElementById("menu-btn").addEventListener("click", toggleClicked);
}

window.addEventListener("load", loadEvent);


/* function toggleClicked (event) {
  event.target.classList.toggle("clicked");
  document.getElementById("nav").classList.toggle("clicked");
} */


// alt+shift+a  blokk kijelölés