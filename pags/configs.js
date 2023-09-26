var c1 = 0
function circulo(){
    var div = window.document.getElementById("teste1")
    if (c1 == 0){
        div.style.borderRadius = "20px"
        c1 += 1
    }else if (c1 == 1){
        div.style.borderRadius = "0px"
        c1 -= 1
    }
    
}
var b1 = 0
function b_animado(){
    var botao = window.document.getElementById("b-Animado")
    var escondido = window.document.getElementById("escondido")
    var card = window.document.getElementById("class-id")
    if (b1 == 0){
        escondido.style.display = "block"
        botao.style.color = "orange"
        botao.innerText = "Red"
        b1 += 1
    }else if (b1 == 1){
        botao.style.background = "red"
        botao.style.color = "blue"
        botao.innerText = "AMARELO!!!!!!"
        b1 += 1
    }else if (b1 == 2){
        escondido.style.display = "none"
        card.style.background = "yellow"
        botao.innerText = ">:)!"
        b1 += 1
    }else if (b1 == 3){
        card.style.color = "white"
        botao.innerText = "Retornar? :c"
        b1 += 1
    }else if (b1 == 4){
        botao.innerText = "Botão 2"
        card.style.background = "#1374BD"
        card.style.color = "black"
        botao.style.background = "white"
        botao.style.color = "black"
        b1 = 0
    }
}