function contar() {
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')

    var res = window.document.querySelector('div#res')

    // for (var inicio = 0; inicio <= fim; inicio++){
    //     res.innerHTML = (inicio)

    // }

    if (inicio.value.lenght == 0 || fim.value.lenght == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam Dados!')
        res.innerHTML = 'Impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo inválido" Considerando PASSO 1')
            p = 1
        }

        if (i < f){ //Contagem Crescente
        // c+=p o contador está recebndo ele mesmo mais o passo
            for (var c = i; c <= f; c += p){
                // += concatenação (Contando: + ${c})
                res.innerHTML += ` ${c} \u{1F449}` 
                // código do emoji unicode U+1F449 mudar para \u{1F449}
            }
        } else { // Contagem Decrescente
            for (var c = i; c >= f; c -= p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }

    // if (inicio == null || fim == null){
    //     res.innerHTML('Impossível contar!')
    // } else if (passo == 0){
    //     window.alert('Passo inválido" Considerando PASSO 1')
    // }
}