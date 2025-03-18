// ESERCIZIO 1

// PULSANTE SALVA

const inputName = document.getElementById("inputName")
const saveButton = document.getElementById("salva")
const outputContainer = document.getElementById("output")

function updateDisplay(name) {
  localStorage.setItem("Utente", name)
  outputContainer.innerHTML = `<p class="text-center">Nome salvato: ${name}</p>`
}

const savedName = localStorage.getItem("Utente")
if (savedName) {
  inputName.value = savedName
  updateDisplay(savedName)
} else {
  outputContainer.innerHTML = `<p class="text-center text-muted">Nessun nome salvato.</p>`
}

saveButton.addEventListener("click", function () {
  if (inputName.value.trim() !== "") {
    updateDisplay(inputName.value)
  }
})

// PULSANTE ELIMINA

const deleteButton = document.getElementById("elimina")

deleteButton.addEventListener("click", function () {
  inputName.value = ""

  localStorage.removeItem("Utente")
  outputContainer.classList.add("d-none")
})

// ESERCIZIO 2

let counter

if (sessionStorage.getItem("timeCounter")) {
  counter = parseInt(sessionStorage.getItem("timeCounter"))
} else {
  counter = 0
}

const counterDisplay = document.getElementById("counter")
counterDisplay.textContent = counter

setInterval(() => {
  counter++
  sessionStorage.setItem("timeCounter", counter)
  counterDisplay.textContent = counter
}, 1000)
