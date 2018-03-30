var writeUsBtn = document.querySelector(".write-us-btn"); // Кнопка "Напишите нам"
var writeUsModal = document.querySelector(".write-us"); // Модальное окно обратной связи
var modalCloseBtn = writeUsModal.querySelector(".modal-close"); // Кнопка закрытия модального окна обратной связи
var fullNameInputField = writeUsModal.querySelector("[name=full-name]"); // Поле ввода имени и фамилии в форме
var writeUsForm = writeUsModal.querySelector("form"); // Форма обратной связи
var emailInputField = writeUsForm.querySelector("[name=email]"); // Поле ввода email
var letterTextarea = writeUsForm.querySelector("[name=letter]"); // Поле ввода сообщения
var isStorageSupport = true;
var storageFullName = "";
var storageEmail = "";

try {
  storageFullName = localStorage.getItem("fullName");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

writeUsBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  writeUsModal.classList.add("modal-show");

  if (storageFullName && storageEmail) {
    fullNameInputField.value = storageFullName;
    emailInputField.value = storageEmail;
    letterTextarea.focus();
  } else {
    fullNameInputField.focus();
  }
});

modalCloseBtn.addEventListener("click", function(evt) {
  evt.preventDefault();
  writeUsModal.classList.remove("modal-show");
  writeUsModal.classList.remove("modal-error");
});

writeUsForm.addEventListener("submit", function(evt) {
  if (!fullNameInputField.value || !emailInputField.value || !letterTextarea.value) {
    evt.preventDefault();
    writeUsModal.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("fullName", fullNameInputField.value);
      localStorage.setItem("email", emailInputField.value);
    }
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27 && writeUsModal.classList.contains("modal-show")) {
    evt.preventDefault();
    writeUsModal.classList.remove("modal-show");
  }
});
