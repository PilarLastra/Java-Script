//Constantes
const open = document.getElementById("open");
const modalContainer = document.getElementById("modalContainer");
const close = document.getElementById("close");
const urlChuckNorris = "https://api.chucknorris.io/jokes/random"; //Se puese pasar la url al fetc derecho
let urlStarWars = "https://swapi.dev/api/people/";

//funciones

console.log(modalContainer);

function openPopUp() {
  modalContainer.classList.add("show"); //agrega la etiqueta q se le pase
}

function closePopUp() {
  modalContainer.classList.remove("show"); //remueve la etiquetra q se le pase
}

function chucknorrisRandomJockes() {
  fetch(urlChuckNorris)
    .then((response) => response.json()) //Convierte la respuesta en un .json

    .then((data) => {
      //let element = document.getElementById("element");
      //element = data.value;

      document.getElementById("chuckNorrisJocke").innerHTML = data.value;

      //element.innerHTML = `<p>${data.value}</p>`;

      console.log(data); //imprime los datos en la consola
    })
    .catch((err) => console.log(err)); // aca adentro xd
}

//------------------------------------------------------------------------------------//

function starWarsGetNames() {
  fetch(urlStarWars)
    .then((response) => response.json())
    .then((data) => {
      // document.getElementById("starWarsNames").innerHTML = data.name;

      //ES6 INV

      const ul = document.getElementById("starWarsCharacters");

      data.results.forEach((element) => {
        //arrow function

        let caracther = document.createElement("li");
        caracther.appendChild(document.createTextNode(`${element.name}`));

        ul.appendChild(caracther);
      });

      urlStarWars = data.next;

      console.log(data);
    })
    .catch((err) => console.log(err));
}

starWarsGetNames();
