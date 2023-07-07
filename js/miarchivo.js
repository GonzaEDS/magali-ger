// Select the necessary elements
let form = document.getElementById('formulario')
let email = document.getElementById('mail')
let password = document.getElementById('contrasena')
let pais = document.getElementById('pais')
let fecha = document.getElementById('fecha')
let terminos = document.getElementById('terminos')

// Add an event listener to the form submission
form.addEventListener('submit', function (e) {
  e.preventDefault() // prevent the default behavior

  // Apply validation
  if (validateInputs()) {
    // create an object with properties for every input of the user
    let user = {
      id: Math.random().toString(36).substring(7), // generating random id
      email: email.value,
      password: password.value,
      pais: pais.value,
      fecha: fecha.value,
      terminos: terminos.checked
    }

    // parse and save the object to the localstorage
    localStorage.setItem('user', JSON.stringify(user))

    // clear the form inputs
    form.reset()
  }
})

// Define the validation function
function validateInputs() {
  let allValid = true

  if (!validateEmail()) {
    email.classList.add('rojo')
    allValid = false
  } else {
    email.classList.remove('rojo')
  }

  if (!validatePassword()) {
    password.classList.add('rojo')
    allValid = false
  } else {
    password.classList.remove('rojo')
  }

  if (!validatePais()) {
    pais.classList.add('rojo')
    allValid = false
  } else {
    pais.classList.remove('rojo')
  }

  if (!validateFecha()) {
    fecha.classList.add('rojo')
    allValid = false
  } else {
    fecha.classList.remove('rojo')
  }

  if (!validateTerminos()) {
    terminos.classList.add('rojo')
    allValid = false
  } else {
    terminos.classList.remove('rojo')
  }

  return allValid
}

// Helper functions to validate the fields
function validateEmail() {
  let emailRegex = /\S+@\S+\.\S+/
  return emailRegex.test(email.value)
}

function validatePassword() {
  return password.value.length >= 8
}

function validatePais() {
  return pais.value !== ''
}

function validateFecha() {
  return fecha.value !== ''
}

function validateTerminos() {
  return terminos.checked
}
