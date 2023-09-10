const inputValue = document.querySelector('.visor');
const btnOperators = document.querySelectorAll('[name="operator"]');
const btnParenthese = document.querySelector('[name="parenthese"]');
let tokenParenteshe = 0;
let arrayToCut;
let arrayParenthese;

const updateInput = (value) => {
    //Inserção Númerico
    if(value >= 0){
        inputValue.textContent += value
 
        //Ativando btnOperators
        btnOperators.forEach((item) => {
            item.disabled = false
        })
    }

    //Inserção Operadores & Destivação
    if(['%','/','*','-','+','.'].includes(value) && inputValue.textContent != ''){
        inputValue.textContent += value
        btnOperators.forEach((item) => {
            item.disabled = true
        })

        //Ativa btnParenthese
        btnParenthese.disabled = false
    }

    //Parênteses Abertura
    console.log(btnOperators.disabled)
    if (value == '('){
        arrayParenthese = inputValue.textContent.split('');
        console.log(arrayParenthese)
        if(!['%','/','*','-','+','.'].includes(arrayParenthese[inputValue.textContent.length-1])){
            arrayParenthese.push('*');
        }
        inputValue.textContent = arrayParenthese.join('');
        inputValue.textContent += '(';

        tokenParenteshe += 1;
        btnParenthese.disabled = true;
    }

    //Parênteses Fechamento
    if (value == ')' && tokenParenteshe > 0){
        inputValue.textContent += ')';
        tokenParenteshe -= 1
    }


    //Apagar Item
    if(value == 'AC'){
        arrayToCut = inputValue.textContent.split('');
        if(arrayToCut[arrayToCut.length-1] == '('){
            tokenParenteshe -= 1;
            btnParenthese.disabled = false;
        }

        if(arrayToCut[arrayToCut-1] == ')'){
            tokenParenteshe += 1;
        }

        arrayToCut.pop();
        inputValue.textContent = arrayToCut.join('')
    }

    //Tranformando dados em Array
    inputValue.value = inputValue.textContent
    let visualArithmetic = inputValue.value.split('')

    //Transformação dos operadores
    visualArithmetic.forEach((item, index, array)=>{
        if (item == '/') {
            array[index] = '÷'
        } else if  (item == '*') {
            array[index] = 'x'
        } 
    })
    inputValue.value = visualArithmetic.join('')

    if (inputValue.textContent == ''){
        inputValue.value = 0
    }
}

//Calcular
const calculate = () => {
    inputValue.value = eval(inputValue.textContent);
    inputValue.textContent = inputValue.value
}