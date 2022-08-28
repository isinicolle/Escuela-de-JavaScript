//DOM 

const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const parrafito = document.querySelector('.parrafito')
const pid = document.getElementById('pid')
const input = document.querySelector('input')

h1.innerHTML = 'Hola <br> mundo'
p.innerText = 'Este es un parrafo'

pid.getAttribute('pid')


h1.setAttribute('class', 'rojo')

h1.classList.add('verde')
h1.classList.remove('verde')

input.value = 'Hola mundo'

const img = document.createElement('img')
img.setAttribute('src', 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png')

pid.append(img)