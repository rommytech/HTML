// Sample tasks array
var tareas = [
    { tarea: "Pintar la fachada de la casa" },
    { tarea: "Comprar comida para el perro" },
    { tarea: "Pagar la tarjeta de crédito" }
];

// Function to render the tasks in the table
function renderTareas() {
    const cuerpoTabla = document.getElementById('cuerpo-tabla');
    cuerpoTabla.innerHTML = ''; // Clear the table before rendering

    tareas.forEach((item, index) => {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${item.tarea}</td>
            <td><button class="btn btn-danger" onclick="eliminarTarea(${index})">Finalizar</button></td>
        `;
        cuerpoTabla.appendChild(fila);
    });
}

// Function to add a new task
function agregarTarea() {
    const nuevaTareaInput = document.getElementById('nuevaTarea');
    const nuevaTareaTexto = nuevaTareaInput.value.trim();

    if (nuevaTareaTexto !== '') {
        tareas.push({ tarea: nuevaTareaTexto });
        nuevaTareaInput.value = ''; // Clear the input field
        renderTareas(); // Re-render the tasks
        toggleFormulario(); // Hide the form
    } else {
        alert('Por favor ingresa una tarea.');
    }
}

// Function to remove a task
function eliminarTarea(index) {
    tareas.splice(index, 1); // Remove the task from the array
    renderTareas(); // Re-render the tasks
}

// Function to toggle the task input form
function toggleFormulario() {
    const formulario = document.getElementById('formulario');
    formulario.style.display = formulario.style.display === 'none' ? 'block' : 'none';
}

// Set up event listeners once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initially hide the form
    document.getElementById('formulario').style.display = 'none';

    // Show/hide the form when clicking the "Agregar tarea" button
    document.querySelector('.btn-success').addEventListener('click', toggleFormulario);

    // Add a task when clicking the "Agregar" button
    document.querySelector('.btn-primary').addEventListener('click', agregarTarea);

    // Render the initial list of tasks
    renderTareas();
});

