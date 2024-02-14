let addToScreen = (character) => {
    document.getElementById("screen").value += character;
}

let clearScreen = () => {
    document.getElementById("screen").value = "";
}



let calculate = () => {
  let operation = document.getElementById("screen").value;

  let res = "🔥🔥🔥🔥🔥🔥";
  
  let operatorPos = findOperator(operation);

  if (operatorPos != -1){
      let primerOperando = operation.substring(0, operatorPos);
      let segundoOperando = operation.substring(operatorPos + 1, operation.length);
      let operador = operation[operatorPos];
      
      if (comprobarOperando(primerOperando) == true && comprobarOperando(segundoOperando) == true){
          res = operar(primerOperando, segundoOperando, operador);
      }       
  } 

  document.getElementById("screen").value = res;
}


let comprobarOperando = (operando) => {
  console.log(operando);
  let operandoCorrecto = true;

  if (operando[0] == "*" || operando[0] == "/"){
      operandoCorrecto = false;        
  }

  for (let i = 1; i < operando.length && operandoCorrecto == true; i++){
      if (isNaN(operando[i]) == true){
          operandoCorrecto = false;
      }
  }

  return operandoCorrecto;
}


let operar = (primerOperando, segundoOperando, operador) => {
  let res = "E";

  switch(operador){
      case "+":
          res = parseInt(primerOperando) + parseInt(segundoOperando);
          break;
      case "-":
          res = parseInt(primerOperando) - parseInt(segundoOperando);
          break;
      case "*":
          res = parseInt(primerOperando) * parseInt(segundoOperando);
          break;
      case "/":
          res = parseInt(primerOperando) / parseInt(segundoOperando);
          break;
  }

  return res;
}


let findOperator = (operation) => {
  let operatorPos = -1;

  for (let i = 0; i < operation.length && operatorPos == -1; i++){
      //operation[i] y operation[i + 1]
      if (operation[i + 1] != undefined && isNaN(operation[i]) == false
          && isNaN(operation[i + 1]) == true){
              operatorPos = i + 1;
              console.log("Operador: " + operation[i + 1]);
      }
  }

  return operatorPos;
}

  
  
  /*
  let nums = new Array[(1, 2, 3, 4, 5, 6, 7, 8, 9)]();
  let simbols = new Array[("+", "-", "*", "/")]();
  
  const sumar = (num1, num2) => num1 + num2;
  const restar = (num1, num2) => num1 - num2;
  const multiplicar = (num1, num2) => num1 * num2;
  const dividir = (a, b) => {
    let res;
    if (b === 0) {
      res = "No se puede dividir por cero";
    } else {
      res = a / b;
    }
    return res;
  };






/*
    //OPERACIONES CORRECTAS:
    3+4

    55+598

    3*9846

    466464/524154

    +3++3

    -3+-3

    -69*-89

    +6/-2

    //1) buscar el operador
    el operador es el primer simbolo no numerico seguido de un simbolo numerico
    
    isNaN("7") -> false
    isNaN("+") -> true

    -32*+45

    //2) dividir el string en 3 trozos
    primer operando -> -32
    segundo operando -> +45
    operador -> *

    //3) realizar la operación y obtener el resultado que se va a pintar el la variable res


*/


/*
    OPERACIONES INCORRECTAS -> E

    6

    -9

    *9+3

    -9/*9

    3+5+9
    
    /8

    *9+6

    /9+*6

    4-/3

    -*5

    
*/