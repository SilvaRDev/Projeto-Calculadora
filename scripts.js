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