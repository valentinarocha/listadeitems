document.addEventListener('DOMContentLoaded', () => {

const item = document.getElementById("item");
const contenedor = document.getElementById("contenedor");
const agregarboton = document.getElementById("agregar");
const limpiarboton = document.getElementById("limpiar");

// Carga la lista.

function cargarLista() {
    const guardarLista = localStorage.getItem('lista');
      if(guardarLista) {
        const items = JSON.parse(guardarLista);
        items.forEach(itemValue => {
            agregarItem(itemValue);
        });
      }
}


// Agregar item.

function agregarItem(itemValue) {
    const li = document.createElement('li');
    li.textContent = itemValue;
    contenedor.appendChild(li);

    // Guarda los datos.

const listadoActual = JSON.parse(localStorage.getItem('lista')) || [];
listadoActual.push(itemValue);
localStorage.setItem('lista', JSON.stringify(listadoActual));
}


// Borar los datos.

function limpiarLista() {
    localStorage.removeItem('lista'); // Elimina de localStorage.
    contenedor.innerHTML = ''; // Elimina a la vista.
}

// Botones.

agregarboton.addEventListener('click', () => {
    const nuevoItem = item.value.trim();
    if(nuevoItem) {
        agregarItem(nuevoItem);
        item.value = '';
    }
});

limpiarboton.addEventListener('click', limpiarLista);

cargarLista();
});