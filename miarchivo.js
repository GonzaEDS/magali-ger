
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





const formulario = document.querySelector('#formulario');
const mail00 = document.querySelector('#mail');
const contraseña00 =document.querySelector('#contraseña');
const pais00 = document.querySelector('#pais');
const fecha00 =document.querySelector('#fecha');
const terminos00 =document.querySelector('#terminos');


formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
if(mail00.value ===''){
    mail00.classList.add('rojo');
}else{
    mail00.classList.remove('rojo');
    validarCorreo();
   mail00.value='';
}   
});

function validarCorreo(){
    const input00 = document.querySelector('#mail');
    const correo = input00.value;
    const expReg =/^[a-zA-Z0-9\_\- ]{4,30}$/;
    if(!expReg.test(correo)){
        input00.classList.add('--error');
    }
}

formulario.addEventListener('submit', function(evento){
    evento.preventDefault();
if(contraseña00.value ===''){
    contraseña00.classList.add('rojo');
}else{
    contraseña00.classList.remove('rojo');
    validarContraseña();
    contraseña00.value='';
} 
});

function validarContraseña(){
    const input000 = document.querySelector('#contraseña');
    const contraseña00 = input000.value;
    const expReg =/^\d+(\.\d+)?$/;
    if(!expReg.test(contraseña00)){
        contraseña00.classList.add('--error');
    }
}

formulario.addEventListener('submit', function(e){
    e.preventDefault();
if(pais00.value ===''){
    pais00.classList.add('rojo');
}else{
    pais00.classList.remove('rojo');
    validarPais();
    pais00.value='';
} 
});
function validarPais(){
    const input = document.querySelector('#pais');
    const pais = input.value;
}

formulario.addEventListener('submit', function(e){
    e.preventDefault();
if(fecha00.value ===''){
    fecha00.classList.add('rojo');
}else{
    fecha00.classList.remove('rojo');
    validarFecha();
   fecha00.value='';
}   
});
function validarFecha(){
    const input000 = document.querySelector('#fecha');
    const fecha00 = input000.value;
    }



formulario.addEventListener('submit', function(e){
    e.preventDefault();
if(validarCorreo() && validarContraseña() && validarPais() && validarFecha()){
    const nuevoReg ={
        id: '1',
      fecha: new Date(),
      correo: mail00.value,
      contraseña: mail00.value,
      pais: pais00.value,
      fecha: fecha00.value
   };
   const registroPasajeros = JSON.parse(window.localStorage.getItem('cont'));

   if(registroPasajeros){
    const nuevosPasajeros = [...registroPasajeros, nuevoReg];
    window.localStorage.setItem('cont', JSON.stringify(nuevosPasajeros));

 }else{
 
 window.localStorage.setItem('cont', JSON.stringify([{...nuevoReg}]));
 }
 } 
});