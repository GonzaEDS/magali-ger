//customAlert
function customPopup(message, type = 'neutral', callback = null) {
  // Create a new div element
  const newDiv = document.createElement('div')

  // Assign classes to the div
  newDiv.classList.add('customPopup')
  newDiv.classList.add(type)

  // Add the alert text
  const alertText = document.createTextNode(message)
  newDiv.appendChild(alertText)

  if (type === 'confirm') {
    // Create button container
    const buttonContainer = document.createElement('div')
    buttonContainer.classList.add('buttonContainer')

    // Create the accept and cancel buttons
    const acceptButton = document.createElement('button')
    acceptButton.textContent = 'Si'
    acceptButton.classList.add('btn', 'acceptButton')

    const cancelButton = document.createElement('button')
    cancelButton.textContent = 'Aun no'
    cancelButton.classList.add('btn', 'cancelButton')

    // When the accept button is clicked, call the callback with true
    acceptButton.addEventListener('click', () => {
      callback(true)
      document.body.removeChild(newDiv)
    })

    // When the cancel button is clicked, call the callback with false
    cancelButton.addEventListener('click', () => {
      callback(false)
      document.body.removeChild(newDiv)
    })

    // Add the accept and cancel buttons to the button container
    buttonContainer.appendChild(acceptButton)
    buttonContainer.appendChild(cancelButton)

    // Add the button container to the alert
    newDiv.appendChild(buttonContainer)
  } else {
    // Create the close button
    const closeButton = document.createElement('span')
    closeButton.innerHTML = '&times;'
    closeButton.classList.add('closeButton')

    // When the close button is clicked, remove the alert from the body
    closeButton.addEventListener('click', () => {
      document.body.removeChild(newDiv)
    })

    // Add the close button to the alert
    newDiv.insertAdjacentElement('afterbegin', closeButton)
  }

  // Add the new div to the body
  document.body.appendChild(newDiv)
}

export default customPopup
