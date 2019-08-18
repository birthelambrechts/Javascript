const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
  };
  
  function inputDigit(digit) { //invoer getal
    const { displayValue, waitingForSecondOperand } = calculator;
  
    if (waitingForSecondOperand === true) {
      calculator.displayValue = digit;
      calculator.waitingForSecondOperand = false;
    } else {
      calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
  }
  
  function inputDecimal(dot) { //komma
      if (calculator.waitingForSecondOperand === true) return;
    
    // If the `displayValue` does not contain a decimal point
    if (!calculator.displayValue.includes(dot)) {
      // Append the decimal point
      calculator.displayValue += dot;
    }
  }
  
  function handleOperator(nextOperator) {
    const { firstOperand, displayValue, operator } = calculator
    const inputValue = parseFloat(displayValue);
  
    if (operator && calculator.waitingForSecondOperand)  {
      calculator.operator = nextOperator;
      return;
    }
  
    if (firstOperand == null) {
      calculator.firstOperand = inputValue;
    } else if (operator) {
      const currentValue = firstOperand || 0;
      const result = performCalculation[operator](currentValue, inputValue);
  
      calculator.displayValue = String(result);
      calculator.firstOperand = result;
    }
  
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
  }

  
  const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
  
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
  
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
  
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
  
    '=': (firstOperand, secondOperand) => secondOperand,

    '%': (firstOperand, secondOperand) => firstOperand / 100 * secondOperand,
  };
  
  function resetCalculator() { //C
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
  }
  
  function updateDisplay() { //displayscherm
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
  }
  
  updateDisplay();
  
  const keys = document.querySelector('.calculator-keys');
  keys.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')) { //getallen
      return;
    }
  
    if (target.classList.contains('operator')) { //bewerkingen
      handleOperator(target.value);
          updateDisplay();
      return;
    }
  
    if (target.classList.contains('decimal')) { //komma
      inputDecimal(target.value);
          updateDisplay();
      return;
    }
  
    if (target.classList.contains('all-clear')) { //C
      resetCalculator();
          updateDisplay();
      return;
    }
  
    inputDigit(target.value);
    updateDisplay();
  });

function hovering(item){
    item.style.borderColor="hotpink";
    item.style.backgroundColor="pink";
  }
  function BlackColor(item){
    item.style.borderColor = "";
    item.style.backgroundColor="";
  }

  document.addEventListener("keyup", function (e) {
    if (e.keyCode == 48) {
      updateDisplay(0);
    } else if (e.keyCode == 49) {
      updateDisplay(1);
    } else if (e.keyCode == 50) {
      updateDisplay(2);
    } else if (e.keyCode == 51) {
      updateDisplay(3);
    } else if (e.keyCode == 52) {
      updateDisplay(4);
    } else if (e.keyCode == 53) {
      updateDisplay(5);
    } else if (e.keyCode == 54) {
      updateDisplay(6);
    } else if (e.keyCode == 55) {
      updateDisplay(7);
    } else if (e.keyCode == 56) {
      updateDisplay(8);
    } else if (e.keyCode == 57) {
      updateDisplay(9);
    } else if (e.keyCode == 187) {
      updateDisplay("+");
    } else if (e.keyCode == 189) {
      updateDisplay("-");
    } else if (e.keyCode == 186) {
      updateDisplay("*");
    } else if (e.keyCode == 191) {
      updateDisplay("/");
    } else if (e.keyCode == 192) {
      updateDisplay("%");
    } else if (e.keyCode == 13) {
        let orig = document.getElementById("calc-preview").innerHTML;
        let edit = orig.replace("%", "/100")
        document.getElementById("calc-preview").innerHTML += "<br/>" + eval(edit) +
            "<br/><br/>" + "Reset for new calculation";
    } else if (e.keyCode == 67) {
        document.getElementById("calc-preview").innerHTML = "Make a calculation...";
    }
});


