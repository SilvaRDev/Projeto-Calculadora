document.addEventListener("keydown", function(event) { /* Verifica se as teclas digitadas correspondem as teclas da calculadora */
  const teclasPermitidas = [
      "Numpad0", "Numpad1", "Numpad2", "Numpad3", "Numpad4", 
      "Numpad5", "Numpad6", "Numpad7", "Numpad8", "Numpad9",
      "Digit0", "Digit1", "Digit2", "Digit3", "Digit4",
      "Digit5", "Digit6", "Digit7", "Digit8", "Digit9",
      "NumpadDecimal", "NumpadAdd", "NumpadSubtract", 
      "NumpadMultiply", "NumpadDivide", "NumpadEnter", "Enter", "Backspace"
  ];

  if (!teclasPermitidas.includes(event.code)) {
      event.preventDefault();
      console.log(`Tecla "${event.key}" bloqueada!`);
  }
});

document.addEventListener('keydown', function(event) { /* Quando o usuário aperta enter, o calculo é feito. */
  if (event.key === 'Enter') {
    calcular()
  }
});

function adicionarCaracter(caracter) {
  const valorInput = document.querySelector('.display').value
  document.querySelector('.display').value = valorInput + caracter
}

function limparTela() {
  document.querySelector('.display').value = ''
}

function calcular() {
  const valorInput = document.querySelector('.display').value

  document.querySelector('.display').value = eval(valorInput)
}

function inverte() {
  const valorInput = document.querySelector('.display').value

  document.querySelector('.display').value = valorInput * -1
}

function aoClicarNoInput() {
  const valorInput = document.querySelector('.display').value

  if (valorInput == '') {
    const input = document.querySelector('.display')
    input.style.border = "solid 1px white"

    setTimeout(() => {
      input.style.border = 'none'
    }, "1000");
  } else {
    return false
  }
}