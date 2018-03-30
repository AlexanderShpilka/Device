var map = document.querySelector(".contacts img"); // карта в блоке "Контакты"
var modalMap = document.querySelector(".modal-map"); // модальное окно карты
var modalMapCloseBtn = modalMap.querySelector(".modal-close"); // кнопка закрытия модального окна карты

map.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalMap.classList.add("modal-show");
});

modalMapCloseBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  modalMap.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27 && modalMap.classList.contains("modal-show")) {
    evt.preventDefault();
    modalMap.classList.remove("modal-show");
  }
});
