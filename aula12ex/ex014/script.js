function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${ hora} horas`

    if ( hora >= 0 && hora < 12){
        // bom dia
        img.src = 'img/fotomanha.png'        
        document.body.style.background = '#F5E785'
    } else if (hora >= 12 && hora < 18){
        //boa tarde
        img.src = 'img/fototarde.png'
        document.body.style.background = '#EF9A5C'
    } else {
        //boa noite
        img.src = 'img/fotonoite.png'
        document.body.style.background = '#053844'
    }
}

