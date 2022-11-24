function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.lenght == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >=0 && idade < 3) {
                // Bebê
                img.setAttribute('src', 'img/bebemenino.png')
            } else if (idade <=10){
                //Criança
                img.setAttribute('src', 'img/criancamenino.png')
            } else if (idade <= 17) {
                // Adolescente
                img.setAttribute('src', 'img/adolescentemenino.png')
            } else if (idade < 30) {
                //Jovem Adulto
                img.setAttribute('src', 'img/adultohomem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'img/adultohomem2.png')
            } else {
                // Idoso
                img.setAttribute('src', 'img/idosohomem.png')
            }

        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >=0 && idade < 3) {
                // Bebê
                img.setAttribute('src', 'img/bebemenina.png')
            } else if (idade <=10){
                //Criança
                img.setAttribute('src', 'img/criancamenina.png')
            } else if (idade <= 17) {
                // Adolescente
                img.setAttribute('src', 'img/adolescentemenina.png')
            } else if (idade < 30) {
                //Jovem Adulto
                img.setAttribute('src', 'img/adultamulher.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'img/adultamulher2.png')
            } else {
                // Idoso
                img.setAttribute('src', 'img/idosamulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
    // var txtano = window.document.getElementById('masc')
    // var txtano = window.document.getElementById('fem')

}