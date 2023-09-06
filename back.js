// Obtén los elementos de los botones numéricos y operadores
const buttons = document.querySelectorAll('.botonnum');
const operators = document.querySelectorAll('.operator');
const clearButton = document.querySelector('.clear');
const equalButton = document.querySelector('.equal');
const display = document.getElementById('displaycalculadora');

// Función para manejar los eventos de los botones numéricos y operadores
function handleButtonClick(event) {
    const button = event.target;
    display.value += button.textContent;
}

// Función para borrar el contenido del display
function clearDisplay() {
    display.value = '';
}

// Función para calcular el resultado y mostrarlo en el display
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}

// Agrega eventos a los botones numéricos
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});

// Agrega eventos a los operadores
operators.forEach(operator => {
    operator.addEventListener('click', handleButtonClick);
});

// Agrega eventos al botón de borrar (C)
clearButton.addEventListener('click', clearDisplay);

// Agrega eventos al botón de igual (=)
equalButton.addEventListener('click', calculateResult);