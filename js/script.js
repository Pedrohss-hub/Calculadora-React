const btns = document.querySelectorAll('.op')
const visor = document.querySelector('.visor')
visor.textContent = 0

// Atualizar o Valor do Visor
const updateVisor = (val) => {


            //Apagar todos os Valores
        if (val == 'AC') {
            visor.textContent = 0
            //Ativar Operadores
            btns.forEach((item)=>{
                item.disabled = false
            })

        } else {
            
            //Desabilitando Operadores
            if (['.', '/', '*', '-', '+', '%'].includes(val)) {
                visor.textContent += val
                btns.forEach((item) => {
                console.log('desativado');
                item.disabled = true;
                console.log(item)
            });

            } else {
            //Inserção de Valores
            if((visor.value == 0 && val > 0 && visor.value != '0.') || (val == '0' && visor.value == '0')){
                visor.textContent = val
                //Ativar Operadores
                btns.forEach((item)=>{
                    item.disabled = false
                })

            } else {
                visor.textContent += val 
                //Ativar os operadores
                btns.forEach((item)=>{
                    item.disabled = false
                })

            }

        }
    }
    
    
    visor.value = visor.textContent
    let visualArithmetic = visor.value.split('')

    //Transformação dos operadores
    visualArithmetic.forEach((item, index, array)=>{
        if (item == '/') {
            array[index] = '÷'
        } else if  (item == '*') {
            array[index] = 'x'
        } 
    })

    visor.value = visualArithmetic.join('')
}

//Calcular o Valor
const calculate = () => {
    visor.textContent = eval(visor.textContent)
    visor.value = visor.textContent
}