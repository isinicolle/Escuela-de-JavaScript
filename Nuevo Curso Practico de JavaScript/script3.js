const h1 = document.querySelector('h1')
const button = document.querySelector('#calcular')

const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')


function btnOnclick(){
    var suma = Number(input1.value + input2.value)
    h1.innerHTML = suma
    return "La suma es: " + suma

}