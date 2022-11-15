const storageInput = document.querySelector(".storage");
const saveButton = document.querySelector(".saveButton");
const clearButton = document.querySelector(".clearButton");
const getContentButton = document.querySelector(".getContentButton");
const text = document.querySelector(".text");
var inputText;

const saveToLocalStorage = () => {
  localStorage.setItem("textInput", storageInput.value);
};

saveButton.addEventListener("click", saveToLocalStorage);

function clearContent() {
  storageInput.value = "";
}

function getContent() {
  var getText = localStorage.getItem("textInput");

  text.innerHTML = getText;
}

/*
function setLocalStorage() {
  //obtener el valor ingresado

  var text = $("#setItem").val();

  //se guarda en el local storage(pares clave valor)

  localStorage.setItem("texto", texto);

  //limpiamos texto??

  $("#setItem").val("");
}

function getLocalStorage() {
  //obtener el valor registrado en el local storage x su key

  var text = localStorage.getItem("text");

  // Seteamos el valor al texto
  $("#getItem").val(text);
}
*/
