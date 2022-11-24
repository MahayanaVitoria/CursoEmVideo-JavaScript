function finalizar() {
    var entrada = document.getElementById('entrada')
    var resultado = document.getElementById('resultado')

    if (entrada == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        var numero = Number(entrada.value)
        var adicionado = 1
        
        resultado.innerHTML = ' '

        while(adicionado <= 10) {
            var item = document.createElement('option')
            item.text = `Valor ${adicionado} adicionado.`
            item.value = `resultado${adicionado}`
            resultado.appedChild(item)
            c++
        }

    }
}