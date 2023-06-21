
//Continue, utiliza igualdad esticta para saltar el bucle

const destinos = ['*Ciudad de Mexico','*Bs As Ezeiza','*Rio de Janeiro', '*Chile Region Metropolitana ','*Peru Coscu'];
console.log('Destinos disponibles : ');

for (let i = 0 ; i <destinos.length ; i++){
    if (destinos[i] === 'Chile Region Metropolitana '){
        continue;
    }
    console.log(destinos[i]);
}



//Ciclo forEach recorre el array

const K1 =['HSBC ', 'Amex ', 'NaranjaX'];
K1.forEach((A)=>
{ console.log(` Pagando con ${K1} credito tenes un 15% de descuento  `);
});

//Condicional

const vTotal =(parametro1, parametro2, parametro3) =>{
    if (parametro1 === 'suma345'){
        console.log(`Cupos de descuentos para viajar en primera línea  ${parametro2+parametro3}`);
    }else if (parametro1=== 'resta345'){
        console.log(`Cupos de descuentos para viajar en segunda línea ${parametro2-parametro3}`)
    }
 
    
}
vTotal ('suma345', 15,9);
vTotal ('resta345', 15,7);

