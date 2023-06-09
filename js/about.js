const z = document.querySelectorAll(".boxes");
let w = document.querySelectorAll(".box-classic-p");

const hover = () => {
  if (w.style.display == "block") {
    w.style.display = "none";
  } else {
    w.style.display = "block";
  }
};

const leave = () => {
  w.style.display = "none";
};

function addEventListenerByClass(className, event, fn) {
  const list = document.getElementsByClassName(className);
  for (const i = 0, len = list.length; i < len; i++) {
    list[i].addEventListener(event, fn, false);
  }
}

addEventListenerByClass("boxes", "mouseenter", hover);
addEventListenerByClass("boxes", "mouseleave", leave);
