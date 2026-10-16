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
    let unaEdad;
    
    for (let i = 0; i < edadesIzquierda.length; i++) {
        unaEdad = edadesIzquierda[i];
        contenidoTabla += "<tr>";
        contenidoTabla += "<td>" + unaEdad + "</td>";
        contenidoTabla += "<td><button class='btn-eliminar'>Eliminar</button></td>";
        contenidoTabla += "<td><button class='btn-mover'>➔</button></td>";
        contenidoTabla += "</tr>";
    }
    
    cmpTabla.innerHTML = contenidoTabla;
}