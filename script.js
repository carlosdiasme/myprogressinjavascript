function carregar() {
    var msg = document.getElementById('msg')
    var foto = document.getElementById('foto')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 13

    msg.innerHTML = `Agora são ${hora} horas`

    if ( hora >= 0 && hora < 12 ) {
        //Bom dia!
        foto.innerHTML = '<img src  = "manha.png" width="250px">'
        document.body.style.background = '#e2cd9f'
    }
    else if ( hora >= 12 && hora <= 18 ) {
        //Boa tarde!
        foto.innerHTML = '<img src  = "tarde.png" width="250px">'
        document.body.style.background = '#b9846f'
    } else{
        //Boa noite!
        foto.innerHTML = '<img src  = "noite.png" width="250px">'
        document.body.style.background = '#515154'
    }
}


