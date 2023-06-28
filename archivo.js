

function sumarTresValores(){
    let valor1 =prompt('Ingresa el valor de tu pasaporte: ');
    let valor2=prompt('Ingresa la cantidad de pasajes: ');
    let valor3 =prompt('Ingresa 1 si espara primera linea y 2 si es para segunda linea: ');
 if(valor3 !== '1' && valor3 !=='2'){
    alert('Ingrese solo valores validos');
 }
    let valor4 =prompt('Cantidad de mascotas ');
   
 

     let resultado =parseInt(valor1)* parseInt(valor2)* parseInt(valor4);
     console.log(`El valor total del gasto de su vuelo es de $ ${resultado}`);


var resultadoElemento= document.getElementById('h1');

resultadoElemento.innerHTML = resultado;
}
sumarTresValores();