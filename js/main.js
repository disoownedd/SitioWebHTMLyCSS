// Ubicamos elemento dentro del DOM
const fecha = document.querySelector ('#fecha');

/* 
    Mostrar la fecha
    formato: 2/02/2023
*/

/* Creamos un objeto de fecha almacenado en una variable */

let fechaObjeto = new Date ();


//  Obtenemos el numero del dia mes

let diaMes = fechaObjeto.getDate();

//Obtenemos el numero del mes actual

let mesActual = fechaObjeto.getMonth() + 1;

let anioActual = fechaObjeto.getFullYear();

// Mostramos el objeto en el span

//fecha.innerText = diaMes + '/'+ mesActual + '/' + anioActual; 

fecha.innerText =  ` ${diaMes}/${mesActual}/${anioActual}`
// `${VARIABLE}string{VARIABLE}`


// Reloj

let relojhtml = document.querySelector('#relojhtml')


function reloj()
{
    /* Reloj digital con formato 14:55:56  */

    const horario = new Date();
    console.log (horario);

    // Obtenemos las horas

    horas = horario.getHours();
    console.log(horas)

    minutos = horario.getMinutes()
    console.log(minutos)

    segundos = horario.getSeconds();
    console.log(segundos)

    relojhtml.innerText = `${horas}:${minutos}:${segundos}`
    //relojhtml.innerHTML = horas + ':' + minutos + ':' + segundos;
    //reloj.innerText = ` ${horas}:${minutos}:${segundos} `
}
reloj();
//minuto 54 
setInterval (reloj, 1000)

/* Actualizamos el llamado a la funcion del reloj */

//relojhtml.innerText = ` ${horas}:${minutos} `

//relojhtml.innerHTML = horas + ':' + minutos + ':' + segundos;
