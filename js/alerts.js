import customPopup from './customPopup.js'

const ingresar00 = () => {
  customPopup(
    'Cumples con todos los requisitos?',
    'confirm',
    accesoPermitido => {
      if (accesoPermitido) {
        customPopup(
          'Lo sentimos, esta pagina esta en desarrollo por lo que no se puede acceder',
          'danger'
        )
      } else {
        customPopup('Lo sentimos.', 'neutral')
      }
    }
  )
}

const crearUsuario = () => {
  customPopup('Lo sentimos, aun no hemos desarrolado esta funcion.')
}

document.getElementById('ingresar').addEventListener('click', ingresar00)
document.getElementById('crearUsuario').addEventListener('click', crearUsuario)
document
  .getElementById('olvidarContrasena')
  .addEventListener('click', crearUsuario)
