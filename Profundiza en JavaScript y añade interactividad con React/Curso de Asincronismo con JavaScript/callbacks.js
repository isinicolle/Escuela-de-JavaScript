function sum(num1, num2) {
    return num1 + num2;
  }
  
  function calc(num1, num2, sumNumbers) {
    return sumNumbers(num1, num2);
  };
  
  console.log(calc(2, 2, sum));
  
  setTimeout(function () {
    console.log('Hola JavaScript');
  }, 5000)
  
  function gretting(name) {
    console.log(`Hola ${name}`);
  }
  
  setTimeout(gretting, 2000, 'Oscar');


  function sum(num1, num2) {
    return num1 + num2;
}

function rest(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2);
};
