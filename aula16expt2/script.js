let entrada = document.querySelector("#entrada").value
let lista = document.querySelector("#lista").value
let resultado = document.querySelector("#resultado").value
let valores = []

function adicionar (){
    
    if (entrada == ''){

        return false
        alert('Por favor, digite um número!')

    } else if (entrada > 100 || entrada == 0){

        return false
        alert('Este número não é válido!')

    } else if (entrada == lista.value) {

        return false
        alert('Este número já foi adicionado!')

    } else {
        
        return true
        lista.innerHTML = ('Valor ' + entrada + 'adicionado.')
        
    }
}

function finalizar(){
    
    

    // let qntdEntradas = lista.value.length
    // ('Ao todo, temos ' + ${qntdEntradas} 'números cadastrados.')
    // let media = somaTotal / qntdEntradas
}