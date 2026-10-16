let edadesIzquierda = [];
let edadesDerecha = [];


function agregarEdad() {
    let edadRecuperada;
    edadRecuperada = recuperarInt("edad")
    edadesIzquierda.push(edadRecuperada);
    pintarArregloIzquierda();
}

function pintarArregloIzquierda() {
    let cmpTabla = document.getElementById("tablaIzquierda");
    let contenidoTabla = "";
    let Edad;
    
    for (let i = 0; i < edadesIzquierda.length; i++) {
        Edad = edadesIzquierda[i];
        contenidoTabla += "<tr>";
        contenidoTabla += "<td>" + Edad + "</td>";
        contenidoTabla += "<td><button class='btn-eliminar' onclick='eliminarIzquierdo(" + i + ")'>Eliminar</button></td>";
        contenidoTabla += "<td><button class='btn-mover'>➔</button></td>";
        contenidoTabla += "</tr>";
    }
    
    cmpTabla.innerHTML = contenidoTabla;
}

function eliminarIzquierdo(indice) {
    edadesIzquierda.splice(indice, 1);
    pintarArregloIzquierda();
}