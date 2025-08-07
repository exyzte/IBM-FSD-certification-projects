function multiply() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
                    let result = multiplyFunction(num1, num2);
                    // Display the result
                    displayResult(result);
                } else {
                    displayResult('Please enter valid numbers');
                }
            
            function multiplyFunction(a, b) {
                // Introduce a debugger statement to pause execution
                debugger;
                // Multiply the numbers
                return a * b;
            }
            function displayResult(result) {
                // Display the result in the paragraph element
                const resultElement = document.getElementById('result');
                resultElement.textContent = `The result is: ${result}`;
            }
        }

function divide() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2) && num2 !== 0) {
        let result = divideFunction(num1, num2);
        displayResult(result);
        } else {
            displayResult('Please enter valid numbers and ensure you are not dividing by zero');
        }
        // Perform division
        function divideFunction(num1, num2) {
            debugger;
            return num1 / num2;
        }   
        // Display the result
        function displayResult(result) {
            // Display the result in the paragraph element
            const resultElement = document.getElementById('result');
            resultElement.textContent = `The result is: ${result}`;
        }
    }

function add() {
    const num1 = parseInt(document.getElementById('input1').value);
    const num2 = parseInt(document.getElementById('input2').value);
    if (!isNaN(num1) && !isNaN(num2)) {
        const result = addFunction(num1, num2);
        displayResult(result);
    } else {
        displayResult('Please enter valid numbers');
    }
    function addFunction(num1, num2) {
        debugger;
        return num1 + num2;
    }
    function displayResult(result) {
        const resultElement = document.getElementById('result');
        resultElement.textContent = `tThe result is ${result}`;
    }

}

function subtract() {
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    if (!isNaN(num1) && !isNaN(num2)) {
        let result = subtractFunction(num1, num2);
        displayResult(result);
    } else {
        displayResult('Please enter valid numbers');
    }
    function subtractFunction(num1, num2) {
        debugger;
        // Subtract the numbers
        return num1 - num2;
    }
    function displayResult(result) {
        const resultElement = document.getElementById('result');
        resultElement.innerText = `The result is ${result}`;
    }
}