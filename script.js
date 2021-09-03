function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    let minutes = data.getMinutes();
    
    if (hora >= 5 && hora < 12) {
        msg.innerHTML = `Bom dia, agora são ${hora}h${minutes}min.`;
        img.src = './img/fotoamanhecer.png';
        document.body.style.background = '#f7f381';
    } else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `Boa tarde, agora são ${hora}h${minutes}min.`;
        img.src = './img/fototarde.png';
        document.body.style.background = '#FDA240';
    } else {
        msg.innerHTML = `Boa noite, agora são ${hora}h${minutes}min.`;
        img.src = './img/fotonoite.png';
        document.body.style.background = '#033739';
    }
}