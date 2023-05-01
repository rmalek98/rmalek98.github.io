let operator = "";
            let operand1 = 0;
            let operand2 = 0;
            let result = 0;

            const addNumber = (number) => {
                document.getElementById("result").value += number;
            };

            const addOperator = (op) => {
                operator = op;
                operand1 = parseFloat(document.getElementById("result").value);
                document.getElementById("result").value = "";
            };

            const clearResult = () => {
                document.getElementById("result").value = "";
                operator = "";
                operand1 = 0;
                operand2 = 0;
                result = 0;
            };

            const calculateResult = () => {
                operand2 = parseFloat(document.getElementById("result").value);
                switch (operator) {
                    case "+":
                        result = operand1 + operand2;
                        break;
                    case "-":
                        result = operand1 - operand2;
                        break;
                    case "*":
                        result = operand1 * operand2;
                        break;
                    case "/":
                        result = operand1 / operand2;
                        break;
                    default:
                        result = 0;
                }
                document.getElementById("result").value = result;
                operator = "";
                operand1 = 0;
                operand2 = 0;
                result = 0;
            };
