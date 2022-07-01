//alert("Bienvenido al Curso de React");

/*
REPASO DE JAVASCRIP:

Dado el arreglo [1,2,3,4,5,6]  

1 - Genere un nuevo arreglo cuyos elementos se obtengan multiplicando por cinco los elementos del arreglo anterior.

2 - Tomando el arreglo resultante del ejercicio 1, genere un nuevo arreglo que contenga sólo los elementos que sean números impares.

3 - Escriba una función flecha del tipo campo público de clase que tome por argumento un nombre y retorne el mensaje "Hola nombre". Usar template string.

4 - Haga una función flecha que calcule el área de un círculo. El valor de pi debe ser constante.

5 - Utilice de destructuring para crear dos variable que almacenen los primeros dos elementos del arreglo resultante del ejercicio 2. 

6 - Cree una clase llamada persona con dos atributos : nombre y apellido. Luego cree otra clase llama empleado que herede de Persona y tenga un atributo adicional llamado salario.

Para entregar esta tarea cree un repositorio en github

console.log("Hola mundo")

*/



/*Dado el arreglo [1,2,3,4,5,6]  

1 - Genere un nuevo arreglo cuyos elementos se obtengan multiplicando por cinco los elementos del arreglo anterior.
*/


console.log("Ejercicio 1")
let arreglo = new Array(1, 2, 3, 4, 5, 6);
var arreglo1 = new Array();
var arreglo2 = new Array();
console.log("arreglo =", arreglo);



//  Función para Validar Contenido a Multiplicar 

/*
function validarValorEscalar(Escalar){
    if (!Number.isInteger(Escalar)){
        return console.log("El contenido no es un Escalar")
    }
    else {
        return console.log("El valor de a es = ",a)
    }
}
*/


// let a ="Hola Mundo";
let a = 5;


//validarValorEscalar(a);

for (i = 0; i < arreglo.length; i++){
    arreglo1[i] = a * arreglo[i]
   // console.log("arr[i] = ", arr[i]);
   // console.log("arr = ", arr);
}

console.log("Arreglo Multiplicado por 5 =", arreglo1);


// 2 - Tomando el arreglo resultante del ejercicio 1, genere un nuevo arreglo que contenga sólo los elementos que sean números impares.
console.log("Ejercicio 2");

console.log("arreglo1 (Resultado Anterior) =", arreglo1)

//console.log(arreglo.length);

for(i = 0; i < arreglo1.length;i++){
    //console.log("i =",i);
    if (arreglo1[i] % 2  == 1 ){
       //console.log("arreglo2 inicial = ", arreglo2)
       //console.log("arreglo1[i] = ", arreglo1[i])
        arreglo2.push(arreglo1[i]);
        //console.log("arreglo2 =", arreglo2);
        
    }
}
   
console.log("arreglo elementos impares = ", arreglo2);



//3 - Escriba una función flecha del tipo campo público de clase que tome por argumento un nombre y retorne el mensaje "Hola nombre". Usar template string.
console.log("Ejercicio 3");

const saludar = nombre => console.log(`Hola ${nombre}`);
var nombre = "ronny"
var nombre2 = "ivan"
saludar(nombre);

saludar(nombre2);


//4 - Haga una función flecha que calcule el área de un círculo. El valor de pi debe ser constante.
console.log("Ejercicio 4");

const pi = 3.1416;
r = 2;

const AreaCirculo = r => console.log(`El Area de un círculo de radio ${r} es `,pi*r*r,"cm2");

AreaCirculo(r);


//5 - Utilice de destructuring para crear dos variable que almacenen los primeros dos elementos del arreglo resultante del ejercicio 2. 
console.log("Ejercicio 5");

console.log("Resultado Arreglo del Ejercicio 2 = ",arreglo2);

var valores = {x: 5, y:15, z:25};

function display(valores){
    let {x, y} = valores;
    console.log(`El primer elemento es ${x} y el segundo elemento es ${y}`);
}

display(valores);



//6 - Cree una clase llamada persona con dos atributos : nombre y apellido. Luego cree otra clase llama empleado que herede de Persona y tenga un atributo adicional llamado salario.
console.log("Ejercicio 6");

var persona = { 
    nombre: "Ronny",
    apellido: "Gerónimo"
}

console.log(persona);
var empleado = {...persona, salario: 100000 };

console.log(empleado);


