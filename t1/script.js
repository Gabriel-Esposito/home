var on = 0
function fechar(){
    var box1 = window.document.getElementById("logo")
    var entrar = window.document.getElementById("entrar")
    var sair = window.document.getElementById("sair")
    var box2 = window.document.getElementById("texts")
    var icon = window.document.getElementById("icons")


    if (on == 0){
        box1.style.display = "block"
        box2.style.display = "flex"
        entrar.style.display = "none"
        sair.style.display = "inline"
        icon.style.width = "30%"
        on++
    }else if(on == 1){
        box1.style.display = "flex"
        entrar.style.display = "block"
        sair.style.display = "none"
        box2.style.display = "none"
        icon.style.width = "100%"
        on--
    }
}

var ativo = 0
var desativar = 0

function ativar(num){
    ativo = num
    var home = window.document.getElementById('home')
    var search = window.document.getElementById('search')
    var settings = window.document.getElementById('settings')
    var logout = window.document.getElementById('logout')

    var list = [home,search,settings,logout]

    if (ativo == 1){
        home.style.background ="aquamarine"

        search.style.background = "white"
        settings.style.background = "white"
        logout.style.background = "white"

    }else if (ativo == 2){
        search.style.background ="aquamarine"

        home.style.background = "white"
        settings.style.background = "white"
        logout.style.background = "white"

    }else if (ativo == 3){
        settings.style.background ="aquamarine"

        home.style.background = "white"
        search.style.background = "white"
        logout.style.background = "white"

    }else if (ativo == 4){
        logout.style.background ="aquamarine"

        home.style.background = "white"
        search.style.background = "white"
        settings.style.background = "white"

    }
}

