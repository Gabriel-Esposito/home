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
