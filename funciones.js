
function completarDatos(){
    var nombre = prompt ('Por favor ingrese su nombre y apellido: ');
    var edad =prompt ('por favor ingrese su edad con numeros: ');
    var dni= prompt('Ingrese su DNI solo con numeros');
    
    
   
    
    while (dni < 6){
        dni=prompt('Ingrese un DNI valido');
    }
    
    
    
    switch(true){
        case(edad>=18):
        console.log(`Hola ${nombre}, con DNI ${dni} y edad ${edad} puede acceder a la compra de pasaportes. 
          `);
        break;
        default:
            var permiso= confirm(`Hola ${nombre}, tienes permiso para viajar? Seleccione cancelar en caso negativo`);
            if (permiso){
                console.log(`Hola ${nombre} ya que cuentas con el permiso para viajar puede acceder a la compra de pasaportes.`);
            }else{
                console.log('Necesitas permiso para viajar')
            }
            break;
            }
           
           let precioNeto=
           parseFloat(prompt('Ingresar el precio neto de su pasaje: '));
           let precioConIva= precioNeto *1.21;
           console.log(`El precio final de su pasaje es de $ ${precioConIva}`);



        
        
        }
    
      
    completarDatos();