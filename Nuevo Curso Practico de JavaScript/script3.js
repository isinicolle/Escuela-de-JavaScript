/*const h1 = document.querySelector('h1')
const button = document.querySelector('#calcular')
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')

    //button.addEventListener('click', btnOnclick)

form.addEventListener('submit', btnOnclick())

function btnOnclick(event){
    event.preventDefault()
    var suma = Number(input1.value + input2.value)
    h1.innerHTML = suma
    return "La suma es: " + suma

}*/
const h1 = document.querySelector('h1');
const form = document.querySelector('#form'); 
const input1 = document.querySelector('#calculo1');
const input1 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

// form.addEventListener('submit', sumarInputValues)

// function sumarInputValues(event) {
//   // console.log({event});
//   event.preventDefault();
//   const sumaInputs = input1.value + input2.value;
//   pResult.innerText = "Resultado: " + sumaInputs;
// }

btn.addEventListener('click', sumarInputValues)

function sumarInputValues(event) {
  // console.log({event});
  // event.preventDefault();
  const sumaInputs = input1.value + input2.value;
  pResult.innerText = "Resultado: " + sumaInputs;
}