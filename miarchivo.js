
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

const select = document.getElementById('pais');
select.addEventListener('change', ()=>{
    const opcionSeleccionada =select.value;
    console.log('Seleccionaste: '+ opcionSeleccionada);
})


const mail00 = document.querySelector('#mail');
const contraseña00 =document.querySelector('#contraseña');
const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
if(mail00.value ===''){
    mail00.classList.add('rojo');
}else{
    mail00.classList.remove('rojo');
    validarCorreo();
}   
});

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
if(contraseña00.value ===''){
    contraseña00.classList.add('rojo');
}else{
    contraseña00.classList.remove('rojo');
    validarContraseña();
}   
});










