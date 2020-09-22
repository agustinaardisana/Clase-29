const cards = document.querySelectorAll('.card')
const checkboxesFiltro = document.querySelectorAll('.filtro-boton')
const filtroNombre = document.querySelector('#filtro-nombre')
const checkboxSexo = document.querySelectorAll('input[type="radio"]')

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

//FILTRO POR BOTON EDAD (PRIMERA SOLUCION)//
// for (let checkbox of checkboxesFiltro) {
//     checkbox.onclick = () => {
//         for (card of cards) {
//             if (card.dataset.edad === checkbox.dataset.edad) {
//                 card.classList.remove('hidden')
//             }
//             else if (checkbox.dataset.edad === "todos") {
//                 card.classList.remove('hidden')
//             }
//             else {
//                 card.classList.add('hidden')
//             }
//         }
//     }
// }

//FILTRO POR BOTON EDAD (SOLUCION FUNCIONALIZADA)//
for (checkbox of checkboxesFiltro) {
    checkbox.onclick = () => {
        filtrarPorEdad()
    }
}

const checkboxSeleccionado = () => {
    for (checkbox of checkboxesFiltro) {
        if (checkbox.checked) {
            return true
        }
    }
}

const checkboxYEdadCoinciden = () => {
    const edad = card.dataset.edad 
    for (checkbox of checkboxesFiltro) {
        if (checkbox.checked && checkbox.value === edad) {
            return true
        }
        else if (checkbox.checked && checkbox.value === "todos") {
            console.log('hola')
            card.classList.remove('hidden')
        }
    }
}

const filtrarPorEdad = () => {
    for (card of cards) {
        card.classList.add('hidden')
        if (checkboxSeleccionado()) {
            if(checkboxYEdadCoinciden()) {
                card.classList.remove('hidden')
            }
        }
        else {
            card.classList.remove('hidden')
        }
    }
}


// FILTRO POR RADIO SEXO (MI SOLUCION)//
for (checkbox of checkboxSexo) {
    checkbox.onclick = () => {
        filtrarPorSexo()
    }
}

const radioSeleccionado = () => {
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
        if (radioSeleccionado()) {
            if (checkboxYSexoCoinciden()) {
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