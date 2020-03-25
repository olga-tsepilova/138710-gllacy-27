var link = document.querySelector(".address__feedback");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal__close");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal--show");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal--show");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal--show")) {
      popup.classList.remove("modal--show");
    }
  }
});
