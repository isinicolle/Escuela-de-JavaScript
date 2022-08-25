//--save es necesario para llevar a produccion

//--save-dev solo es necesario en el entorno de trabajo no en prdouccion

//-D dependencia de desarrollo

//-S dependencia de produccion

//-G dependencia de produccion y desarrollo osea global ocupa permisos de admin

//nodemon escucha el servidor

//npm list -g  --depth 0
//veo la lista de los paquetes instalados

//-O de opcional

//npm init iniciar el proyecto llenando la iformacion del proyecto

//npm init -y o yes para que no pregunte mas al usuario e instale todo automaticamente

//npm set init-author-name "Juan" 
//npm set init-author-email "juan   @gmail.com"
//npm set init-author-url "
//npm set init-author-license "MIT"
//npm set init-author-license-url "https://opensource.org/licenses/MIT"
//asi guardamos configuracion por terminal

//npm outdate -u actualiza los paquetes que estan desactualizados

//garantizar que el proyecto este bien configurado y actualizado 

//npm outdate --dd vemos como corre por detras

//npm outdate vemos paquetes desactualziados
//npm update actualiza los paquetes que estan desactualizados

//npm install json-server@lastest actualiza la ultima version del paquete

//qutiar un apquete npm uninstall quitar un paquete

//npm unistall webpack --no-save quita el paquete webpack de la lista de paquetes instalados se quita de node pero nod e package.json
/*
{
    "scripts": {
        "start": "webpack-dev-server --open --mode development",
        "build": "webpack --mode production",
        "deploy": "npm run format && npm run build"
    }
}*/


//solucion de errores npm run build --dd vemos que sucede
/*
1. copiar el .log del error
2. colocar code y pegar el log en el terminal


*/

