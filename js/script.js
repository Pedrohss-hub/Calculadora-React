const btns = document.querySelectorAll('.op')
const visor = document.querySelector('.visor')
visor.textContent = 0
console.log(btns)


// Atualizar o Valor do Visor
const updateVisor = (val) => {
    
    //Apagar todos os Valores
    if (val == 'AC') {
        visor.textContent = 0

    } else {
    
    //Inserção de Valores
    if((visor.value == 0 && val > 0 && visor.value != '0.') || (val == '0')){
        visor.textContent = val

    } else {
        visor.textContent += val 

    }

    }
    
    visor.value = visor.textContent
    let visualArithmetic = visor.value.split('')

    //Transformação dos operadores
    visualArithmetic.forEach((item, index, array)=>{
        if (item == '/') {
            array[index] = '÷'
        } else if  (item == '*') {
            array[index] = 'X'
        } 
    })

    visor.value = visualArithmetic.join('')
}

//Calcular o Valor
const calculate = () => {
    const visor = document.querySelector('.visor')
    visor.textContent = eval(visor.textContent)
    visor.value = visor.textContent
}