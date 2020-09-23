function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    if (hora >= 0 && hora <12) {
        msg.innerHTML = `Bom dia, agora são ${hora} horas.`
        img.src = '../img/fotoamanhecer.png' // Bom dia
        document.body.style.background = '#EBE330'
    } else if (hora > 12 && hora <18) {
        msg.innerHTML = `Boa tarde, agora são ${hora} horas.`
        img.src = '../img/fototarde.png' //Boa Tarde
        document.body.style.background = '#FDA240'
    } else {
        msg.innerHTML = `Boa noite, agora são ${hora} horas.`
        img.src = '../img/fotonoite.png' //Boa Noite
        document.body.style.background = '#033739'
    }
}
