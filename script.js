
const color = document.getElementById("color");
const button = document.getElementById("button");

/*manejar el evento*/

button.addEventListener("click", cambiarColor)

/* definir Funcion */

function cambiarColor() {

function colores(){
    const opciones = "01234567890ABCDEF";
    let colorHex = "#";

    for (let i = 0 ;i < 6 ; i ++ ){
        let indiceAleatorio = Math.floor(Math.random() * 16);
        colorHex += opciones [indiceAleatorio];
    }

    return colorHex;
}
        
let colorAleatorio = colores();
color.textContent = colorAleatorio;
document.body.style.backgroundColor = colorAleatorio;
}