
// Atualizar o Valor do Visor
const updateVisor = (val) => {
    let visor = document.querySelector('.visor')

    if (val == 'AC') {
        visor.textContent = 0
    } else {

    if(visor.textContent == 0){
        visor.textContent = val
        // console.log(visor.textContent)

    } else {
        visor.textContent += val
        // console.log(visor.textContent)

    }
    }

    visor.value = visor.textContent    
    return visor
}

//Calcular
const calculate = () => {
    const visor = document.querySelector('.visor')
    visor.textContent = eval(visor.textContent)
    visor.value = visor.textContent
}
