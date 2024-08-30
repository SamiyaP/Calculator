const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');
let currentInput = '';
let operator = null;
let previousInput = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (value === 'C') {
            // Clear the display
            currentInput = '';
            previousInput = '';
            operator = null;
            display.value = '';
        } else if (value === '=') {
            // Perform calculation
            if (operator && previousInput) {
                try {
                    currentInput = eval(previousInput + operator + currentInput).toString();
                    display.value = currentInput;
                    previousInput = '';
                    operator = null;
                } catch (e) {
                    display.value = "Error";
                    currentInput = '';
                    previousInput = '';
                    operator = null;
                }
            }
        } else if (['+', '-', '*', '/'].includes(value)) {
            // Store the operator and move current input to previous
            if (currentInput) {
                operator = value;
                previousInput = currentInput;
                currentInput = '';
            }
        } else {
            // Handle number input
            currentInput += value;
            display.value = currentInput;
        }
    });
});
