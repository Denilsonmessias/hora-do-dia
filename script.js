function carregar() {
    var msg = window.document.getElementById('msg') //varíavel msg
    var img = window.document.getElementById('imagem') //variável img
   var data = new Date() 
   var hora = data.getHours() // carrega horario atual do usuario
    // var hora = 10 // manipular para testar a página com o horário que quiser
    msg.innerHTML = `Agora são ${hora} horas.` //msg que vai aparecer no texto
    if (hora >=6 && hora <=12) {
        img.src = 'fotomanhã.png'
        document.body.style.background = '#fada45'
    } else if (hora >= 13 && hora < 18) {
        img.src = 'fototarde.png'
        document.body.style.background = '#886c8c'
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#171c2d'
    }
}