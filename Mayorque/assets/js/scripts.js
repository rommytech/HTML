$(document).ready(function() {
    $('#comparar').click(function() {
        // Obtener los valores de los inputs
        let numero1 = Number($('#num1').val());
        let numero2 = Number($('#num2').val());

        // Verificar si los valores son números válidos
        if (isNaN(numero1) || isNaN(numero2)) {
            alert("Por favor, ingresa valores numéricos válidos.");
            return;
        }

        // Comparar los números y mostrar el mensaje correspondiente
        if (numero1 > numero2) {
            alert("Esta página dice que " + numero1 + " es mayor que " + numero2);
        } else if (numero1 < numero2) {
            alert("Esta página dice que " + numero1 + " es menor que " + numero2);
        } else {
            alert("Esta página dice que ambos números son iguales.");
        }

    });
});
