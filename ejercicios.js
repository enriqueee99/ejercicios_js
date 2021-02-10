//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10
function holi(){  
    let cadena = prompt('Ingrese una cadena de texto'); 
    if(!cadena){
        console.warn('Ingresaste un valor vacio, intentalo de nuevo')
    } else {
        console.log(`La cadena ${cadena} tiene ${cadena.length} caracteres`);
        }
    }
    
//holi()






//2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
function recorte(){
    let cadena = prompt('Hola, por favor ingresa un texto para ser recortado');
    if(!cadena){
        console.warn('No ingresaste una cadena de texto')
    } else {
        console.log(cadena.slice(0,4));
    }
}

//recorte();






//3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
function myFunction(){
    let arreglo = prompt('Hola, escribe un texto, y lo convertiré en una cadena.');
    if(!arreglo){
        console.log('No ingresó ningún texto')
    } else {
        console.log(arreglo.split(' '))
    } 
}

//myFunction();






//4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
function myFunction(){
    var texto = prompt('¿Qué texto desea repetir?')
    var veces = prompt('¿Cuantas veces desea que se repita el texto: ');
    if(!texto || !veces){
       return console.warn('El texto o el número de veces que ingresó se encontraba vacio, por favor intentelo de nuevo.')
    } else if(veces <=0 ){
        return console.warn('El número de veces no puede ser cero o un número negativo.')
    } else  {
        for(i = 1; i <= veces; i++){
            console.log(`${texto} ${i}`)
        }
    }
}

//myFunction();






//5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".   
function invertirCadena(){
    let cadena = prompt('Ingrese la cadena a ser invertida');
    let cadenaInvertida = cadena.split('').reverse().join('');
    (!cadena) ? console.warn('No ingresó ninguna cadena'): console.log(`La cadena ${cadena} al revez se lee ${cadenaInvertida}`);
}

//invertirCadena()






//6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
function contarVeces(){
    let texto = prompt('Hola, por favor ingresa un texto.');
    let palabra = prompt('¿Qué palabra deseas buscar?');
    if(!texto || !palabra){
        return console.warn('El formulario que llenaste está incompleto, por favor vuelve a llenarlo.')
    } else {
        posicion = 0;
        contador = 0;
        while(posicion!==-1){
            posicion = texto.indexOf(palabra, posicion);
            if(posicion!==-1){
                posicion++;
                contador++
            }
        } 
        console.log(`La palabra ${palabra} se repite ${contador} vez(es).`)
    }
}

//contarVeces()






//7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
function palindromo(){
    var palabra = prompt('Ingrese una palabra: ');
    var palabra = palabra.toLocaleLowerCase();
    let alRevez =  palabra.split('').reverse().join(''); 

    if(!palabra){
        console.warn('No ha ingresado una palabra')
    } else if(palabra === alRevez) {
        console.log(`La pabara ${palabra} si es un palindromo, palabra al revez ${alRevez}`);
    } else {
        console.log(`La palabra ${palabra} no es un palindromo. palabra al revez ${alRevez}`)
    }
}

//palindromo()






//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
const eliminar = (texto = "", patron = "") => {
    (!texto) ?console.warn("No ha ingresado el texto") :(!patron)
    ?console.warn('No ha ingresado el patron') :console.info(texto.replace(new RegExp(patron, "ig"), ""));
}
    
//eliminar('xyz1, xyz2, xyz3', 'xyz');






//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
function aleatorio () {
    console.log(Math.floor(Math.random() * (600 - 501))+501);
    }
//aleatorio()






//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
const capicua = () => {
    var numero = prompt('Por favor ingrese un numero: ');
    var numeroReverse = numero.split('').reverse().join("");
    if(!numero){
        console.warn('No se ha ingresado ni un numero');
    } else if (numero === numeroReverse){
            console.log(`si soy un capicua ${numero}, al revez ${numeroReverse} `);
        } else {
            console.log(`no soy un capicua ${numero}, al revez ${numeroReverse} `);
        }   
    }

//capicua()






//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
const factorialFunc = (numero) => {
    if(!numero) return console.warn('No ha ingresado ni un numero');
    if(typeof numero !== 'number') return console.error(`${numero} no es un numero`);
            let factorial = 1;
            for (let i = numero; i > 0; i--){
                factorial *= i;
            }
            console.log(`El factorial de ${numero} es: ${factorial}`)                   
    }
    
//factorialFunc(3)






//12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
const primo = (numero) =>{
    if(!numero) return console.warn('No ha ingresado ni un numero');
    if(numero === 0) return console.warn('El numero no puede ser cero');
    if(numero === 1) return console.warn('El numero no puede ser 1');
    if(Math.sign(numero) === -1) console.warn('El numero no puede ser negativo');
    if(typeof numero !== 'number') return console.error(`El caracter ${numero} no es un numero.`);

    let divisible = false;
    for(var i = 2; i < numero; i++){
        if((numero % i) === 0){
            divisible = true;
            break;
        } 
    }
    return(divisible) ? console.log(`El numero ${numero} NO es primo`) : console.log(`El numero ${numero} SI es primo`);
}
//primo(54)






//13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
const par = (numero) =>{
    (typeof numero !== 'number') 
    ? console.log(`El caracter ${numero} no es un numero.`) :
    (numero % 2 == 0) ? console.log(`El numero ${numero} es par`) 
    :console.log(`El numero ${numero} es impar`)
}
 
//par('Hola')






//14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
const convertor = (grados = undefined, unidad = undefined) => {
    if(grados === undefined) return console.warn('No ingresaste el grado.');
    if(typeof grados !== 'number') return console.warn(`El valor ${grados} no es un numero.`);
    if(!unidad) return console.warn(`No ingresaste la unidad a convertir`);
    if( typeof unidad !== 'string') return console.warn(`El valor ${unidad} ingresado no es una unidad de grado`);

    let celsius = Math.round((grados * (9/5)) + 32);
    let farenheit =  Math.round(((grados - 32) * (5/9)));
    if(unidad == 'C' || unidad === 'c') {
        console.log(`${grados}°C = ${celsius}F°`);
    } else if (unidad === 'F' || unidad === 'f'){
        console.log(`${grados}F° = ${farenheit}C°`);
    }

}

//convertor(0,'c')






//15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
const binarioDecimal = (numero = undefined, base = undefined) =>{
    if(!numero && !base) return console.error('No ha ingresado numero ni base.')
    if(numero === undefined) return console.warn('No ha ingresado el numero');
    if(typeof numero !== 'number') return console.error(`El valor ${numero} ingresado no es un numero`);
    if(base === undefined) return console.warn('No ha ingresado la base');
    if(typeof base !== 'number') return console.error(`El valor ${base} ingresado no es un numero de base`);

    if(base === 2){
        let binario = parseInt(numero,base);
        console.log(`${numero} en base ${base} = ${binario} en base 10`)
    } else if (base === 10){
        let diez = numero.toString(2);
        console.log(`${numero} en base ${base} = ${diez} en base 2`)
    } else {
        console.warn('Base incorrecta, solo base 10 o binario')
    }
}

//binarioDecimal(114,10);






//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800. 
const descuento = (precio = undefined, descuento = undefined) =>{
    if(!precio && !descuento) return console.error('No ingresó ni precio ni descuento.');
    if(!precio) return console.warn('No ha ingresado el precio.');
    if(typeof precio !== 'number') return console.warn(`Precio ingresado no es valido ${precio} no es un numero.`);
    if(!descuento) return console.warn('No ha definido el descuento');
    if(typeof descuento !== 'number') return console.warn(`Descuento ingresado no es valido ${descuento} no es un numero.`);
    
    let precioFinal = precio - (precio * (descuento/100));
    console.log(`El precio final a pagar es de $${precioFinal}`)
}

//descuento(100, 10);






//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
const calculateYears = (fecha = undefined) =>{
    if(fecha === undefined) return console.warn('No ha ingresado la fecha.');
    if(!(fecha instanceof Date)) return console.log(`${fecha} no es una fecha.`);

    let todayLessDate = new Date().getTime() - fecha.getTime(); //convierto en milisegundos la fecha de hoy menos la fecha proporcionada
    let yearsInMilliseconds = 1000 * 60 * 60 * 24 * 365;   //expreso los años en milisegundos   1000ms, 60 seg en un min, 60 min, 60 min en una hora, 24 h en un dia, 365 dias en un año
    let humanYears = Math.floor(todayLessDate / yearsInMilliseconds);

    return(Math.sign(humanYears) === -1) ? console.log(`Faltan ${Math.abs(humanYears)} años para el ${fecha.getFullYear()}`) //getFullYear obtiene solo el año ingresado
    :(Math.sign(humanYears) === 1) ? console.log(`Han pasado ${humanYears} desde ${fecha.getFullYear()}`) : console.log(`Estamos en el año actual ${fecha.getFullYear()}`);

}

//calculateYears(new Date(2002,4,22));






//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
const validarVocales = () =>{
    let cadena = prompt('Ingrese una cadena de texto');
    if(!cadena) return console.log('No ha ingresado la cadena.');
    
    let vocales = 0, consonantes = 0;
    for(let letra of cadena){
        if(/[aeiou]/.test(letra)) vocales ++;
        else if (/[bcdfghjklmnñpqrstvwyz]/.test(letra)) consonantes++;
    }
    console.log(`${cadena} tiene ${vocales} vocales y ${consonantes} consonantes.`)    
}

//validarVocales();






//19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Anthony Candelario") devolverá verdadero.
const validarNombre = () =>{
    let nombre = prompt('Hola, escribe un nombre: ')
    if(!nombre) return console.warn('No ha ingresado un nombre.');
    let RegExp = /^[a-zA-Z\s]+$/g.test(nombre);
    return(RegExp) ? console.log(`Su nombre ${nombre} es valido`) :console.warn(`${nombre} no es un nombre valido.`)
}

//validarNombre()






//20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
const validarCorreo = (correo) =>{
    if(!correo) return console.error('No ha ingresado un correo.');
    let RegExp = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(correo);
    
    return (RegExp) ? console.log(`Su correo ${correo} es valido`) : console.warn(`Su correo ${correo} no es valido`)
}

//validarCorreo('anthonyenrique84@gmail.com');






//21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
const elevarCuadrado = (arr = undefined) => {
    if(arr === undefined) return console.warn('No ingresó un arreglo de numeros.');
    if(!(arr instanceof Array)) return console.error(`El valor ingresado no es un arreglo`);
    if(arr.length === 0) return console.error('El arreglo se encuentra vacio.');

    for(let numero of arr ){
        if(typeof numero !== 'number') return console.warn(`El valor ${numero} no es un número`);
    } const newArr = arr.map(el => el * el);
    return console.log(`Arreglo orgininal: ${arr}\nArreglo al cuadrado: ${newArr}`);
}

//elevarCuadrado([2,5,7]);






//22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
const numeroAltoBajo = (arr = undefined) =>{
    if(arr === undefined) return console.warn('No ingresaste un arreglo de números.');
    if(!(arr instanceof Array)) return console.error('El valor ingresado no es un array');
    if(arr.length === 0) return console.warn('El array se encuentra vacio.');
    if(arr.length === 1) return console.warn('El array debe contener al menos 2 valores.');
    
    for(let numero of arr){
        if(typeof numero !== 'number') return console.warn(`El valor ${numero} no es un número.`);
     }
        let min = Math.min(...arr),  max = Math.max(...arr);
        console.log(`Del arreglo ${arr} \nEl mayor es ${max} y el menor es ${min}`);
}

//numeroAltoBajo([5, 57]);





//23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.

const devolverPares = (arr = undefined) =>{
    if(arr === undefined) return console.warn('No ingresaste un arreglo de números.');
    if(!(arr instanceof Array)) return console.error('El valor ingresado no es un array.')
    if(arr.length === 0) return console.warn('No ha ingresado valores en el array.');

    for(let numero of arr){
        if(typeof numero !== 'number') return console.warn(`El valor ${numero} no es un número.`);   
    } 
        let pares = arr.filter(numero => numero % 2 ===0);
        let  impares = arr.filter(numero => numero % 2 === 1);

    console.log(`De los numeros [${arr}]\nLos pares son: ${pares}\nY los impares son: ${impares}`);
}

//devolverPares([1,2,3,4,5]);





//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
const ascDescendente = (arr = undefined) =>{
    if(arr === undefined) return console.warn('No ingresaste un arreglo de numeros');
    if(!(arr instanceof Array)) return console.error('El valor ingresado no es un array');
    if(arr.length === 0) return console.warn('El array no puede ir vacio');

    for(let numero of arr){
        if(typeof numero !== 'number') return console.warn(`El valor ${numero} no es un numero.`);
    }
        
        console.log({
            ascendente: arr.map(el => el).sort(),
            descendente : arr.map(el => el).sort().reverse()
        })
}

//ascDescendente([5,1,4,5,70]);





//25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
const eliminarDuplicados = (arr = undefined) =>{
    if(arr === undefined) return console.warn('No ingresaste un arreglo de números.');
    if(!(arr instanceof Array)) return console.error('El valor ingresadi no es un array.');
    if(arr.length === 0) return console.warn('El array no puede estar vacio.');
    
    const numArray = new Set(arr);
    let sinDuplicados = [...numArray];

    console.log({
        arr, sinDuplicados
    });
}

//eliminarDuplicados([4,5,7,8,8,8, true, true]);






//26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
const promedioArray = (arr = undefined) =>{
    if(arr === undefined) return console.warn('No ingresaste un arreglo de números.');
    if(!(arr instanceof Array)) return console.error('El valor ingresado no es un array.');
    if(arr.length === 0) return console.warn('El array no puede estar vacio.');

    let suma = arr.reduce((acumulador, valorActual) => valorActual += acumulador);
    let promedio = suma / arr.length;
    console.log(Math.floor(promedio));
    
}

//promedioArray([16,18,20]);