const btns = document.querySelectorAll('.op')
const visor = document.querySelector('.visor')
let percentage = false
visor.textContent = 0

// Atualizar o Valor do Visor
const updateVisor = (val) => {
        if(val == '%'){
            percentage = true
        }
        
            //Apagar todos os Valores
        if (val == 'AC') {
            visor.textContent = 0
            //Ativar Operadores
            btns.forEach((item)=>{
                item.disabled = true
            })

            //Inserção de Valores
        } else {
            
            //Desabilitando Operadores
            if (['.', '/', '*', '-', '+', '%'].includes(val)) {
                visor.textContent += val
                btns.forEach((item) => {
                console.log('desativado');
                item.disabled = false;
                console.log(item)
                });

            } else {
                //Adição Inicial de Números
                if((visor.value == 0 && val > 0 && visor.value != '0.') || (val == '0' && visor.value == '0')){
                    visor.textContent = val
                    //Ativar Operadores
                    btns.forEach((item)=>{
                        item.disabled = false
                    })

                //Adição de Números
                } else {
                    visor.textContent += val 
                    //Ativar os operadores
                    btns.forEach((item)=>{
                        item.disabled = false
                    })
                }
            }
        }
    
    
    //Tranformando dados em Array
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
    if (percentage){
        percentage = visor.textContent.split('')
        console.log(percentage)
        percentage.forEach((item,index,array)=>{
            if (item == '%') {
                array[index] = '/100*'
            }
        })

        visor.textContent = percentage.join('')
        console.log(percentage)
        percentage = false
    }
    visor.textContent = eval(visor.textContent)
    console.log(visor.textContent)
    visor.value = visor.textContent
}