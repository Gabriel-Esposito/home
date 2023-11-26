var c1 = 0
var c2 = 0
function Votar(){
    let voto = document.getElementById("voto")
    let erro = document.getElementById("erro")
    let audio = document.querySelector("audio")

    if (Number(voto.value) == 1){
        c1 += 1
        erro.style.display = 'none'
        audio.play()
    }else if (Number(voto.value) == 2){
        c2 += 1
        erro.style.display = 'none'
        audio.play()
    }else if (Number(voto.value) == 999){
        window.alert(`SDE: ${c1} / SPC ${c2}`)
    }else {
        erro.style.display = 'block'
    }
    voto.value = ''
    Ver()
}
function Ver(){
    console.log(`c1 = ${c1} / c2 = ${c2}`)
}