function decirHola() { // Nombrando a la función
    console.log("Hola !!!"); // Incluyendo operación
} // Cierro la función

decirHola(); // Se llama a la función
             // Se ejecuta la función

$(document).ready(function() {  // <--- Verificar jquery
    // $("#num1") == document.getElementById("num1");
    var input1 = $("#num1"); //Captura al elemento

    input1.on("keyup", function() {
        var valor = input1.val(); //retorna el valor del input
        console.log(valor);
    })

    /* Ocultar elementos */
    $(".btn-ocultar").on("click", function() {
        $("#num1").hide();
        $("#num2").hide();
    })

    /*Mostrar elementos */
    $(".btn-mostrar").on("click", function() {
        $("#num1").show();
        $("#num2").show();
    })

})  // <--- Verificar jquery
