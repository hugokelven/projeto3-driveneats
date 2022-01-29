const categorias = document.querySelectorAll(".categoria")

// Selecionar o prato
function selecionarPrato(a) {
    const pratos = categorias[0]

    const pratoSelecionado = pratos.querySelector(".selecionado")
    if (pratoSelecionado !== null) {
        pratoSelecionado.classList.remove("selecionado")
    }
    const item = document.querySelector("." + a)
    item.classList.add("selecionado")
}

// Selecionar a bebida
function selecionarBebida(a) {
    const bebidas = categorias[1]

    const bebidaSelecionada = bebidas.querySelector(".selecionado")
    if (bebidaSelecionada !== null) {
        bebidaSelecionada.classList.remove("selecionado")
    }
    const item = document.querySelector("." + a)
    item.classList.add("selecionado")
}

// Selecionar a sobremesa
function selecionarSobremesa(a) {
    const sobremesas = categorias[2]

    const sobremesaSelecionada = sobremesas.querySelector(".selecionado")
    if (sobremesaSelecionada !== null) {
        sobremesaSelecionada.classList.remove("selecionado")
    }
    const item = document.querySelector("." + a)
    item.classList.add("selecionado")
}

let itensSelecionados = document.querySelectorAll(".selecionado")

if (itensSelecionados.length === 3) {
    const botao = document.querySelector(".fechar-pedido")
    botao.innerHTML = "<p>Fechar Pedido</p>"
    botao.classList.remove("fechar-pedido")
    botao.classList.add("fechar-pedido-acionado")
}










/* Codigo que nao deu certo

const categorias = document.querySelectorAll(".categoria")

const pratos = categorias[0].querySelectorAll(".item-do-menu")
const bebidas = categorias[1].querySelectorAll(".item-do-menu")
const sobremesas = categorias[2].querySelectorAll(".item-do-menu")

// Selecionar Prato
pratos.forEach(prato => prato.addEventListener("click", function teste (){
    pratos.forEach(prato => {prato.classList.remove("selecionado")})
    prato.classList.add("selecionado")})
)

// Selecionar Bebida
bebidas.forEach(bebida => bebida.addEventListener("click", function (){
    bebidas.forEach(bebida => {bebida.classList.remove("selecionado")})
    bebida.classList.add("selecionado")})
)

// Selecionar Sobremesa
sobremesas.forEach(sobremesa => sobremesa.addEventListener("click", function (){
    sobremesas.forEach(sobremesa => {sobremesa.classList.remove("selecionado")})
    sobremesa.classList.add("selecionado")})
)

if () {
    const botao = document.querySelector(".fechar-pedido")
    botao.innerHTML = "<p>Fechar Pedido</p>"
    botao.classList.remove("fechar-pedido")
    botao.classList.add("fechar-pedido-acionado")
} */