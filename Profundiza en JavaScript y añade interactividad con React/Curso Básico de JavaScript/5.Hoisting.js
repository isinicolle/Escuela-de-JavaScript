// Hoisting es cuando las declaraciones de variables y funciones se procesan antes de ejecutar cualquier código, al momento de qe se genere el hosting, las funciones se declarán primero, y despues las variables.


// Qué resultado esperas que nos aparezca si corremos este ejemplo? "undefined"
console.log(miNombre);

var miNombre = "Diego";

// Lo que sucede con el hoisting

var miNombre = undefined;

console.log(miNombre + "soy hoisting");

miNombre = "Diego";


// ===  Hoisting con funcionts  ===

hey();

function hey() {
    console.log('Hola ' + miNombre);
};

var miNombre = 'Diego';

// Lo que sucede con hoisting 

function hey() {  //La función se declara hasta arriba, y después se declaran las variables.
    console.log('Hola ' + miNombre);
};

var miNombre;

hey();

miNombre = 'Diego';


var entrar = 0;
var altura = 101;
if( altura > 100 || altura < 50){
    entrar = 1;
}
else if(altura > 60 || altura < 40){
    entrar = 2;
}
console.log(entrar);


var z = Math.ceil(4.64);
console.log(z);


varvariable;
if(variable) { console.log("funciona"); 
} 
else{ console.log("no funciona"); 
} 

var a = 10;
var b = "12";
var c = b + a;
console.log(c);
console.log(typeof c);


var billetes = [ [ 1 , 2 , 3 ] ,
              [ 4 , 5 , 6 ] ,
              [ 7 , 8 , 9 ] ];
console.log(billetes[1][2])

var contador = 2;
var na = "na";
while(contador)
{
    na += na;
    contador -= 1;
}
console.log(na + " Freddy ")


declarar(); console.log(variable);


function pakiman(vida)
{
    vida = vida + vida;
    vida++;
    return vida;
}
var vida = 2;
vida = pakiman(vida);
console.log(vida);


console.log(variable);
function declarar() { variable = 12; }


var paki = {
    nombre: "Pakiman",
    ataque: 101
};
paki.ataque = paki.ataque * 2;
console.log(paki.ataque);