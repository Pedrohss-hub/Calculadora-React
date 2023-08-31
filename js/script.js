let updateVisor = (val) => {
    let visor = document.querySelector('.visor')

    visor.textContent += val
}

let calculate = () => {
    //Funções Aritméticas
    let soma = (n1,n2)=>{
        return n1+n2
    }
    let sub = (n1,n2)=>{
        return n1-n2
    }
    let mul = (n1,n2)=>{
        return n1*n2
    }
    let div = (n1,n2)=>{
        return n1/n2
    }

    //Guardando os dados em um array
    let visorFinal = document.querySelector('.visor')
    let valor = visorFinal.textContent
    valor = valor.split("")
    valorFim = []

    //Trantando os dados
    for (i = 0; i < valor.length; i++){
        //Tratando operadores lógicos
        if (valor[i] == "+" || valor[i] == "-" || valor[i] == "/" || valor[i] == "X"){
            if (valor[i] == "+"){
                valorFim.push(soma(valor[i-1],valor[i+1]))
            }
            if (valor[i] == "-"){
                valorFim.push(sub(valor[i-1],valor[i+1]))
            }
            if (valor[i] == "X"){
                valorFim.push(mul(valor[i-1],valor[i+1]))
            }
            if (valor[i] == "/"){
                valorFim.push(div(valor[i-1],valor[i+1]))
            }

        //Tratando números
        }else{
            valorFim.push(parseInt(valor[i]))
            if (valorFim[i-1] == Number){
                valorFim[i] += valor[i-1]
            }
        
        }
    }
    
    console.log(valorFim)
    console.log(typeof valorFim)
}