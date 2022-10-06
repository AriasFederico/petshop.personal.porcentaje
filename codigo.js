var name = prompt(`NOMBRE DE LA BOLSA`);
var peso = prompt(`CUÁNTO PESA ${name}?`);
var precio = prompt(`PRECIO DE ${name}`);
// parseInt
var precioP = parseInt(precio);

const bolsa = (a)=>{
    let porcentaje = (a * 25) / 100;
    let res = porcentaje + a;
    document.write(`<H2><span style = 'color:red'>${name}</span> BOLSA <span style = 'color:green'>$ ${res}</span></H2>`);
}

const kilo = (a,b)=>{
    let porcentaje = a * 40 / 100;
    let suma = porcentaje + a;
    let res = suma / b;
    document.write(`<H2><span style = 'color:red'>${name}</span> KILO <span style = 'color:green'>$ ${res}</span></H2>`);
}

bolsa(precioP);
kilo(precioP,peso);