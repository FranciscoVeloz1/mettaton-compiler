import Manejador from './controller/manejadorLexico.js'

const txtArea = document.getElementById("txtArea")
const btnSeparar = document.getElementById("btnSeparar")


const manejador = new Manejador()

let coleccion = []

btnSeparar.addEventListener('click', () => {
    manejador.Separar(txtArea.value)

    for (let i = 0; i < manejador.arreglo.length; i++) {
        coleccion.push(new Manejador(i + 1, manejador.arreglo[i], "descripcion", i + 1))

        document.getElementById("resultado").innerHTML += coleccion[i].Mostrar()
    }
})