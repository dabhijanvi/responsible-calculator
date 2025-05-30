let display = document.getElementById('display');
let currentInput = '';

function clearDisplay() {
    currentInput = '';
    display.value = '';
}

function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

function appendOperator(operator) {
    if (currentInput.length > 0 && !['+', '-', '*', '/'].includes(currentInput[currentInput.length - 1])) {
        currentInput += operator;
        display.value = currentInput;
    }
}

function appendDot() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        display.value = currentInput;
    }
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
    } catch (error) {
        display.value = 'Error';
        currentInput = '';
    }
}
