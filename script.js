
//Paso 1 
var input_nombre = document.getElementById("nombre");
var input_apellido = document.getElementById("apellido");
var input_email = document.getElementById("email");
var input_submit = document.getElementById("boton-enviar");

console.log(input_nombre);
console.log(input_apellido);
console.log(input_email);
console.log(input_submit);

//paso 2 
input_submit.addEventListener("click", enviarFormulario);

function enviarFormulario(event) {
    event.preventDefault();

    //paso 3= obtener valor inputs
    var valor_nombre = input_nombre.value;
    var valor_apellido = input_apellido.value;
    var valor_email = input_email.value;

    console.log(valor_nombre)
    console.log(valor_apellido)
    console.log(valor_email)

    //paso 4 obtener los placeholder
    var placeholder_nombre = document.getElementById("nombre-placeholder");
    var placeholder_apellido = document.getElementById("apellido-placeholder");
    var placeholder_email = document.getElementById("email-placeholder");

    //paso 5: Cambio el contenido de los placeholders
    placeholder_nombre.innerHTML = valor_nombre;
    placeholder_apellido.innerHTML = valor_apellido;
    placeholder_email.innerHTML = valor_email;

    //paso 6: mostrar el feedback
    elemento_feedback = document.getElementById("feedback");
    elemento_feedback.classList.remove("oculto");

    //paso 7: ocultar el formulario
    elemento_formulario = document.getElementById("formulario");
    elemento_formulario.classList.add("oculto");
    
}