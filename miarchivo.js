
//Continue, utiliza igualdad esticta para saltar el bucle

const destinos = ['*Ciudad de Mexico','*Bs As Ezeiza','*Rio de Janeiro', '*Chile Region Metropolitana ','*Peru Coscu'];
console.log('Destinos disponibles : ');

for (let i = 0 ; i <destinos.length ; i++){
    if (destinos[i] === 'Chile Region Metropolitana '){
        continue;
    }
    console.log(destinos[i]);
}



//Ciclo forEache recorre el array

const K1 =['HSBC ', 'Amex ', 'NaranjaX'];
K1.forEach((A)=>
{ console.log(` Pagando con ${K1} credito tenes un 15% de descuento  `);
});

