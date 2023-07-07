function customPrompt(message) {
  return new Promise((resolve, reject) => {
    // create elements
    const popupWrapper = document.createElement('div')
    const popup = document.createElement('div')
    const text = document.createElement('p')
    const input = document.createElement('input')
    const acceptButton = document.createElement('button')
    const cancelButton = document.createElement('button')
    const buttonWrapper = document.createElement('div')

    // assign classes and properties
    popupWrapper.classList.add('customPopup', 'customPrompt')
    popup.className = 'customPopup-box'
    acceptButton.classList.add('btn', 'acceptButton')
    cancelButton.classList.add('btn', 'cancelButton')
    text.textContent = message
    input.type = 'text'
    acceptButton.textContent = 'Accept'
    cancelButton.textContent = 'Cancel'

    // event listeners
    acceptButton.addEventListener('click', () => {
      if (input.value.trim() === '') {
        input.style.border = '2px solid red'
      } else {
        resolve(input.value)
        document.body.removeChild(popupWrapper)
      }
    })

    cancelButton.addEventListener('click', () => {
      reject('User cancelled')
      document.body.removeChild(popupWrapper)
    })

    // append elements
    buttonWrapper.appendChild(acceptButton)
    buttonWrapper.appendChild(cancelButton)
    popup.appendChild(text)
    popup.appendChild(input)
    popup.appendChild(buttonWrapper)
    popupWrapper.appendChild(popup)
    document.body.appendChild(popupWrapper)

    // focus the input
    input.focus()
  })
}

export default customPrompt
