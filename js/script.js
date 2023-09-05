
// Atualizar o Valor do Visor
const updateVisor = (val) => {
    const visor = document.querySelector('.visor')

    if (val == 'AC') {
        visor.textContent = 0
    } else {

    if(visor.textContent == 0){
        visor.textContent = val

    } else {
        visor.textContent += val

    }
    }
    
    visor.value = visor.textContent
    let visualArithmetic = visor.value.split('')
    console.log(visualArithmetic)
    visualArithmetic.forEach()
}

//Calcular o Valor
const calculate = () => {
    const visor = document.querySelector('.visor')
    visor.textContent = eval(visor.textContent)
    visor.value = visor.textContent
}




