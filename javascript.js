/* Function for the button send */

function savemail() {
  document.getElementById("send");
  const message = "Votre mail a bien été enregistré !";
  alert(message);
}


/* Function for the carousel */



var slideIndex = 1;
var slideIn = 1;
showDivs(slideIndex);
showText(slideIn);

function plusDivs(n) {
  showDivs((slideIndex += n));
  showText((slideIn += n));
}

/* Function for slides pictures */

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}

/* Function for text */

function showText(n) {
  var i;
  var x = document.getElementsByClassName("myText");
  if (n > x.length) {
    slideIn = 1;
  }
  if (n < 1) {
    slideIn = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIn - 1].style.display = "block";
}

// Fonction exécutée au redimensionnement
var currentStat = false; // is the menu open

function initMobile() {
  $(document).ready(function() {
    $(".toggle").show(),
      $(".selector").click(function() {
        var list = document.getElementById("list");
        if (currentStat) {
          list.style.display = "none";
        } else {
          list.style.display = "flex";
        }
        currentStat = !currentStat;
        $(".icon").toggleClass("active");
        $(".logo").toggleClass("logo2");
      });
  });
}

function initDesktop() {
  $(document).ready(function() {
    $("ul").show();
    $(".toggle").hide();
  });
}

function redimensionnement(e) {
  if ("matchMedia" in window) {
    if (window.matchMedia("(max-width:860px)").matches) {
      initMobile();
    } else if (window.matchMedia("(min-width:860px)").matches) {
      initDesktop();
    }
  }
}
// On lie l'événement resize à la fonction
window.addEventListener("resize", redimensionnement, false);

// Exécution de cette même fonction au démarrage pour avoir un retour initial
redimensionnement();
