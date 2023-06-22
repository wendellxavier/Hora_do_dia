function carregar(){
    let msg = window.document.getElementById('msg')
   let img = window.document.getElementById('imagem')
   let data = new Date()
   let hora = data.getHours()
   let minutos = data.getMinutes()
   msg.innerHTML = `Agora são ${hora}:${minutos} horas.`
   if(hora >= 0 && hora < 12){
       //dia
       img.src = 'foto/fotomanha.png'
       document.body.style.backgroundColor = '#ezcd9f'
   }else if(hora >= 12 && hora <= 18){
       //tarde
       img.src = 'foto/fototarde.png'
       document.body.style.backgroundColor = '#b9846f'
   }else{
       //noite
       img.src = 'foto/fotonoite.png' 
       document.body.style.backgroundColor = '#515154'
   }
}