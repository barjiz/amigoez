var slide = document.getElementById("slide");
var slides = document.getElementById("slides");

var menuOpen = false;


function Open() {
  if (menuOpen === true) {
    slide.style.height = "0vh";
    slides.style.display = "none";
    document.getElementById("menubar-open").className = "fas fa-bars";
    menuOpen = false;
  } else if (menuOpen === false) {
    slide.style.height = "200vh";
    slides.style.display = "flex";
    document.getElementById("menubar-open").className = "fas fa-times";
    menuOpen = true;
  }

  function myFunction(x) {
    if (x.matches) {
      // If media query matches
    } else {
      slides.style.display = "flex";
    }
  }

  var x = window.matchMedia("(max-width: 952px)");
  myFunction(x); // Call listener function at run time
  x.addEventListener(myFunction); // Attach listener function on state changes
}
