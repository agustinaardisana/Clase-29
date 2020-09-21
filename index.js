const cards = document.querySelectorAll('.card')
const botonesFiltro = document.querySelectorAll('.filtro-boton')
const filtroNombre = document.querySelector('#filtro-nombre')


//FILTRO POR BOTON EDAD//
for (let boton of botonesFiltro) {
    boton.onclick = () => {
        for (card of cards) {
            if (card.dataset.edad === boton.dataset.edad) {
                card.classList.remove('hidden')
            }
            else if (boton.dataset.edad === "todos") {
                card.classList.remove('hidden')
            }
            else {
                card.classList.add('hidden')
            }
        }
    }

}

// FILTRO POR INPUT //
filtroNombre.oninput = () => {
    for (card of cards) {
        const nombreTarjeta = card.dataset.nombre
        const inputBusqueda = filtroNombre.value

        if (nombreTarjeta.includes(inputBusqueda)) {
            card.classList.remove('hidden')
        }
        else {
            card.classList.add('hidden')
        }
    }
}

// FILTRO POR CHECKBOX SEXO//
const checkboxSexo = document.querySelectorAll('input[type="radio"]')

for (checkbox of checkboxSexo) {
    checkbox.onclick = () => {
        filtrarPorSexo()
    }
}

const checkboxSeleccionado = () => {
    for (checkbox of checkboxSexo) {
        if (checkbox.checked) {
            return true
        }
    }
}

const checkboxYSexoCoinciden = () => {
    const sexo = card.dataset.sexo

    for (checkbox of checkboxSexo) {
        if (checkbox.checked && checkbox.value === sexo) {
            return true
        }
    }
}

const filtrarPorSexo = () => {
    for (card of cards) {
        card.classList.add('hidden')
        if (checkboxSeleccionado) {
            if (checkboxYSexoCoinciden(card)) {
                card.classList.remove('hidden')
            }
        }
        else {
            card.classList.remove('hidden')
        }
    }
}