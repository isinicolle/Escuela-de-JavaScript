function alcancia(cantidadInicial){
    let contenido = cantidadInicial
    return function guardar(monedas){
      contenido = contenido + monedas
      return contenido
    }
  }
  
  const miAlcancia = alcancia(2)
  miAlcancia(5) // 7
  miAlcancia(4) // 11
  
  const otraAlcancia = alcancia(5)
  otraAlcancia(30) // 35
  otraAlcancia(20) // 55


  const fruits = () => { if (true) { var fruit1 = 'apple'; const fruit2 = 'banana'; let fruit3 = 'kiwi'; } }
  console.log(fruit1); // apple
  console.log(fruit2); // ReferenceError: fruit2 is not defined
  console.log(fruit3); // ReferenceError: fruit3 is not defined