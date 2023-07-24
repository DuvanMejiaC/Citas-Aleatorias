let botonElem = document.getElementById("boton-cambiar-cita");
let citaElem = document.getElementById("cita");
let autorElem = document.getElementById("autor");

function generarEnteroAleatorio(minimo, maximo){
    minimo = Math.ceil(minimo);
    maximo = Math.floor(maximo);
    return Math.floor(Math.random() * (maximo - minimo) + minimo);
}

function cambiarCita(){
    let indiceAleatorio = generarEnteroAleatorio(0, citas.length);
    citaElem.textContent = `"${citas[indiceAleatorio].texto}"`;
    autorElem.textContent = citas[indiceAleatorio].autor;
}

let indiceAleatorio = generarEnteroAleatorio(0, citas.length);
cambiarCita();

botonElem.addEventListener("click", cambiarCita);