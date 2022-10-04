let nombreB = prompt('NOMBRE DE LA BOLSA');
let bolsaP = prompt('PESO DE LA BOLSA (sin letras)');
let precioB = prompt('PRECIO');
// parseint
let bolsaPeso = parseInt(bolsaP);
let precioBolsa = parseInt(precioB);


const porc = (a)=>{
    let porcentaje = (((a * 25) / (100)) + precioBolsa);
    document.write(`<h2>El precio actual de la bolsa de  ${nombreB} es: <span style= 'color:green'>$ ${porcentaje}</span></h2>`);
}

const kilo = (b)=>{
    let porcentajeKilos = (((b * 40) / (100)) + precioBolsa);
    let precioK = porcentajeKilos / bolsaPeso;
    document.write(`<h2>El precio actual de ${nombreB} por kilogramo es: <span style= 'color:green'>$ ${precioK}</span></h2>`);
}

porc(precioB);
kilo(precioB);