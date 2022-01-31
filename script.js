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

    const ocultar1 = document.querySelector(".ocultar1")
    ocultar1.classList.remove("ocultar1")
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

    const ocultar2 = document.querySelector(".ocultar2")
    ocultar2.classList.remove("ocultar2")
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

    const ocultar3 = document.querySelector(".ocultar3")
    ocultar3.classList.remove("ocultar3")
}

function codificarTexto(texto) {
    let textoCodificado = encodeURIComponent(texto)
    return textoCodificado
}

function mandarMensagem() {
    const itensSelecionados = document.querySelectorAll(".selecionado")
    const nomeDoPrato = itensSelecionados[0].querySelector(".item-do-menu__nome").innerHTML
    const nomeDaBebida = itensSelecionados[1].querySelector(".item-do-menu__nome").innerHTML
    const nomeDaSobremesa = itensSelecionados[2].querySelector(".item-do-menu__nome").innerHTML

    let precoDoPrato = itensSelecionados[0].querySelector(".item-do-menu__preco").innerHTML.replace("R$" , "")
    precoDoPrato = precoDoPrato.replace("," , ".")

    let precoDaBebida = itensSelecionados[1].querySelector(".item-do-menu__preco").innerHTML.replace("R$" , "")
    precoDaBebida = precoDaBebida.replace("," , ".")

    let precoDaSobremesa = itensSelecionados[2].querySelector(".item-do-menu__preco").innerHTML.replace("R$" , "")
    precoDaSobremesa = precoDaSobremesa.replace("," , ".")

    let valor = +precoDoPrato + +precoDaBebida + +precoDaSobremesa
    valor = valor.toFixed(2)

    const nomeDoCliente = prompt("Por favor, digite seu nome:")
    const endereco = prompt("Por favor, digite seu endereço:")

    let mensagem = "Olá, gostaria de fazer o pedido: \n" + "- Prato: " + nomeDoPrato + "\n" + "- Bebida: " + nomeDaBebida + "\n" + "- Sobremesa: " + nomeDaSobremesa + "\n" + "Total: R$ " + valor + "\n" + "\n" + "Nome: " + nomeDoCliente + "\n" + "Endereço: " + endereco

    const numeroDeCelular = "5581979016264"
    window.open("https://wa.me/" + numeroDeCelular + "?text=" + codificarTexto(mensagem))
}










/* Outra maneira de selecionar os itens do cardapio

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