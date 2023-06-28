
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
    if (parametro1 === 'ifSuma'){
        console.log(`Cupos de descuentos para viajar en primera línea  ${parametro2+parametro3}`);
    }else if (parametro1=== 'elseIfresta'){
        console.log(`Cupos de descuentos para viajar en segunda línea ${parametro2-parametro3}`)
    }
 
    
}
vTotal ('ifSuma', 15,9);
vTotal ('elseIfresta', 15,7);
 
//Evento 

const boton =
document.querySelectorAll('.btn-agregar');

boton.forEach(boton02=>{
 boton02.addEventListener('click', ()=>{
    console.log('Aun no hemos terminado con esta funcionalidad, disculpe las molestias');
 });
});


const input = document.getElementById('contraseña');

input.addEventListener("blur", (e) =>{
    console.log('saliste de foco')
});

 const mail = document.getElementById('mail00');
mail.addEventListener("blur", (e) =>{
    console.log('saliste de foco')
});
