import customPopup from './customPopup.js'
import customPrompt from './customPropmt.js'

async function sumarTresValores() {
  try {
    let ticketCost = await customPrompt('Ingresa el valor de tu pasaporte: ')
    let ticketsAmount = await customPrompt('Ingresa la cantidad de pasajes:')
    let line = await customPrompt(
      'Ingresa 1 si es para primere línea, 2 si es para segunda línea'
    )

    if (!['1', '2'].includes(line)) {
      customPopup('Inserte sólo valores válidos', 'danger')
      return // Stops execution if line is not valid
    }

    let pets = await customPrompt('Cantidad de mascotas')

    if (parseInt(pets) > 5) {
      customPopup('No puede viajar con más de cinco mascotas', 'danger')
      return // Stops execution if pets is not valid
    }

    // Now do something with ticketCost, ticketsAmount, line, and pets
    let result = parseInt(ticketCost) * parseInt(ticketsAmount) * parseInt(pets)
    console.log(`El valor total del gasto de su vuelo es de $ ${result}`)
    const resultElement = document.getElementById('h1')

    resultElement.innerHTML = '$' + result
  } catch (err) {
    console.log(err)
  }
}

sumarTresValores()

document.querySelector('#tryAgain').addEventListener('click', sumarTresValores)
