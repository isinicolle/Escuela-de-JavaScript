// Truthy y Falsy 

// Son valores que son verdaderos o falsos 

// Falsy (False)

"" // un string vacío 
0 -0
null
NaN
false
undefined

//Truthy (true)

"hola"
30
{a:1}
[1,3]
true
function a(){}
más 

// Para que podemos utilizar esto, para generar condiciones segun el valor que demos. 

if(InputEvent.value) {
   
}

//Ejemplos en los que Boolean devuelve Falso:
Boolean(0); //false
Boolean(null); //false
Boolean(NaN); //false
Boolean(undefined); //false
Boolean(false); //false
Boolean(""); //false

//Ejemplos en los que Boolean devuelve verdadero:
Boolean(1); //true para 1 o cualquier número diferente de cero (0)
Boolean("a"); //true para cualquier caracter o espacio en blanco en el string
Boolean([]); //true aunque el array esté vacío
Boolean({}); //true aunque el objeto esté vacío
Boolean(function(){}); //Cualquier función es verdadera también