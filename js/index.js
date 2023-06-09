const swiper = new Swiper(".sample-slider", {
  loop: true, //loop
  autoplay: {
    //autoplay
    delay: 2000,
  },
  pagination: {
    //pagination(dots)
    el: ".swiper-pagination",
  },
  navigation: {
    //navigation(arrow)
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const x = document.querySelector("#myul");

function showmenu() {
  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "flex";
  }
  if (x.style.display == "flex") {
    x.style.display = "none";
  } else {
    x.style.display = "flex";
  }
}

document.querySelector(".collapsible").addEventListener("click", showmenu);

const y = window.matchMedia("(max-width: 576px)");

function myFunction(y) {
  if (y.matches) {
    document.getElementById("swiper1").src = "images/swiper-slide-1(2).jpg";
    document.getElementById("swiper2").src = "images/swiper-slide-2(2).jpg";
    document.getElementById("swiper3").src = "images/swiper-slide-3(2).jpg";
  } else {
    document.getElementById("swiper1").src = "images/swiper-slide-1.jpg";
    document.getElementById("swiper2").src = "images/swiper-slide-2.jpg";
    document.getElementById("swiper3").src = "images/swiper-slide-3.jpg";
  }
}

myFunction(y); // Call listener function at run time
y.addListener(myFunction);
