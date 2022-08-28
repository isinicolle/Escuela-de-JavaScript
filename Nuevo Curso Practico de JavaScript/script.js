//DOM 

const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const parrafito = document.querySelector('.parrafito')
const pid = document.getElementById('#pid')
const input = document.querySelector('input')

h1.innerHTML = 'Hola <br> mundo'
p.innerText = 'Este es un parrafo'

pid.getAttribute('pid')


h1.setAttribute('class', 'rojo')

h1.classList.add('verde')
h1.classList.remove('verde')
