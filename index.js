const cards = document.querySelectorAll('.card')
const botonesFiltro = document.querySelectorAll('.filtro-boton')
const filtroNombre = document.querySelector('#filtro-nombre')
const checkboxSexo = document.querySelectorAll('input[type="radio"]')



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
        if (card.dataset.nombre.toLowerCase().includes(filtroNombre.value.toLowerCase())) {
            card.classList.remove('hidden')
        }
        else {
            card.classList.add('hidden')
        }
    }
}

// FILTRO POR RADIO SEXO (MI SOLUCION)//

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

// FILTRO POR RADIO SEXO (SOLUCION DE MALE)//
// for (let radio of checkboxSexo) {
//     radio.oninput = () => {
//         for (let card of cards) {
//            if (radio.value === 'i') {
//                card.classList.remove('hidden')
//            }
//            else if (radio.checked) {
//                if (card.dataset.sexo === radio.value) {
//                 card.classList.remove('hidden')
//                }
//                else {
//                 card.classList.add('hidden')
//                }
//            }
//            else {
//             card.classList.remove('hidden')
//            }
//         }
//     }
// }