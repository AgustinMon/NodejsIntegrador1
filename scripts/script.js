// botones
const borrar = document.getElementById("borrar");
const resumen = document.getElementById("resumen");

// Mensajes
const errorHandler = document.getElementById("errorHandler");

// valores de inputs
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const email = document.getElementById("email");
const cantidad = document.getElementById("cantidad");
const tipo = document.getElementById("tipo");
const total = document.getElementById("total");

// borra valores
borrar.addEventListener("click", (ev)=>{
    ev.preventDefault();
    //borra error
    marcarError("");
    nombre.value="";
    apellido.value="";
    email.value="";
    cantidad.value="0";
})

//calculo
resumen.addEventListener("click", (ev)=>{
    ev.preventDefault();
    let q = parseInt(cantidad.value) | 0;
    let p = parseInt(tipo.options[tipo.selectedIndex].value);
    if (q < 1) marcarError("Error, la cantidad debe ser mayor a 0");
    console.log(q);
    let importe = (q * p).toString() | "error";
    total.innerHTML = importe ;
})

cantidad.addEventListener("change", ()=>{
    //borra error
    marcarError("");
})

function marcarError(texto){
    errorHandler.innerHTML = texto;
}