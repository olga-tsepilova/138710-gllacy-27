var link = document.querySelector(".address__feedback");
var popup = document.querySelector(".modal");
var close = popup.querySelector(".modal__close");

var form = popup.querySelector("form");
var fio = popup.querySelector("[name=feedback-fio]");
var email = popup.querySelector("[name=feedback-email]");
var feedbacktext = popup.querySelector("[name=feedback-text]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("feedback-fio");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal--show");

  if (storage) {
    fio.value = storage;
    email.focus();
  } else {
    fio.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal--show");
  popup.classList.remove("modal--error");
  popup.classList.add("modal--hide");
});

form.addEventListener("submit", function (evt) {
  if (!fio.value || !email.value || !feedbacktext.value) {
    evt.preventDefault();
    popup.classList.remove("modal--error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal--error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("feedback-fio", fio.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal--show")) {
      popup.classList.remove("modal--show");
      popup.classList.remove("modal--error");
      popup.classList.add("modal--hide");
    }
  }
});
