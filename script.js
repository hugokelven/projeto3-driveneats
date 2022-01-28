let categorias = document.querySelectorAll(".categoria")

let pratos = categorias[0].querySelectorAll(".item-do-menu")

let bebidas = categorias[1].querySelectorAll(".item-do-menu")

let sobremesas = categorias[2].querySelectorAll(".item-do-menu")

function selecionarPrato1(){
    for (let i = 0; i < pratos.length; i++) {
        if (i != 0) {
            pratos[i].classList.remove("selecionado")
        } else {
            pratos[i].classList.add("selecionado")
        }
    }
}
function selecionarPrato2(){
    for (let i = 0; i < pratos.length; i++) {
        if (i != 1) {
            pratos[i].classList.remove("selecionado")
        } else {
            pratos[i].classList.add("selecionado")
        }
    }
}
function selecionarPrato3(){
    for (let i = 0; i < pratos.length; i++) {
        if (i != 2) {
            pratos[i].classList.remove("selecionado")
        } else {
            pratos[i].classList.add("selecionado")
        }
    }
}
function selecionarPrato4(){
    for (let i = 0; i < pratos.length; i++) {
        if (i != 3) {
            pratos[i].classList.remove("selecionado")
        } else {
            pratos[i].classList.add("selecionado")
        }
    }
}

function selecionarBebida1(){
    for (let i = 0; i < pratos.length; i++) {
        if (i != 0) {
            bebidas[i].classList.remove("selecionado")
        } else {
            bebidas[i].classList.add("selecionado")
        }
    }
}
function selecionarBebida2(){
    for (let i = 0; i < pratos.length; i++) {
        if (i != 1) {
            bebidas[i].classList.remove("selecionado")
        } else {
            bebidas[i].classList.add("selecionado")
        }
    }
}
function selecionarBebida3(){
    for (let i = 0; i < pratos.length; i++) {
        if (i != 2) {
            bebidas[i].classList.remove("selecionado")
        } else {
            bebidas[i].classList.add("selecionado")
        }
    }
}
function selecionarBebida4(){
    for (let i = 0; i < pratos.length; i++) {
        if (i != 3) {
            bebidas[i].classList.remove("selecionado")
        } else {
            bebidas[i].classList.add("selecionado")
        }
    }
}

function selecionarSobremesa1(){
    for (let i = 0; i < pratos.length; i++) {
        if (i != 0) {
            sobremesas[i].classList.remove("selecionado")
        } else {
            sobremesas[i].classList.add("selecionado")
        }
    }
}
function selecionarSobremesa2(){
    for (let i = 0; i < pratos.length; i++) {
        if (i != 1) {
            sobremesas[i].classList.remove("selecionado")
        } else {
            sobremesas[i].classList.add("selecionado")
        }
    }
}
function selecionarSobremesa3(){
    for (let i = 0; i < pratos.length; i++) {
        if (i != 2) {
            sobremesas[i].classList.remove("selecionado")
        } else {
            sobremesas[i].classList.add("selecionado")
        }
    }
}
function selecionarSobremesa4(){
    for (let i = 0; i < pratos.length; i++) {
        if (i != 3) {
            sobremesas[i].classList.remove("selecionado")
        } else {
            sobremesas[i].classList.add("selecionado")
        }
    }
}