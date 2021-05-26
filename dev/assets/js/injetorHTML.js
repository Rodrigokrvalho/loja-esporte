
const produtos = [
    {
        img: "../imgs/camiseta-femenina-01.jpg",
        titulo: 'camiseta',
        valor: 100,
        oferta: true,
        novidade: true,
        freteGratis: true,
    },
    {
        img: "../imgs/camiseta-femenina-02.jpg",
        titulo: 'camiseta',
        valor: 100,
        oferta: true,
        novidade: false,
        freteGratis: false,
    },
    {
        img: "../imgs/camiseta-femenina-03.jpg",
        titulo: 'camiseta',
        valor: 100,
        oferta: true,
        novidade: true,
        freteGratis: false,
    },
    {
        img: "../imgs/camiseta-femenina-04.jpg",
        titulo: 'camiseta',
        valor: 100,
        oferta: true,
        novidade: false,
        freteGratis: false,
    },
    {
        img: "../imgs/camiseta-femenina-05.jpg",
        titulo: 'camiseta',
        valor: 100,
        oferta: true,
        novidade: true,
        freteGratis: false,
    },
    {
        img: "../imgs/camiseta-masculina-01.jpg",
        titulo: 'camiseta',
        valor: 100,
        oferta: false,
        novidade: false,
        freteGratis: true,
    },
    {
        img: "../imgs/camiseta-masculina-02.jpg",
        titulo: 'camiseta',
        valor: 100,
        oferta: false,
        novidade: true,
        freteGratis: true,
    },
    {
        img: "../imgs/camiseta-masculina-03.jpg",
        titulo: 'camiseta',
        valor: 100,
        oferta: false,
        novidade: true,
        freteGratis: true,
    },
    {
        img: "../imgs/camiseta-masculina-04.jpg",
        titulo: 'camiseta',
        valor: 100,
        oferta: true,
        novidade: true,
        freteGratis: false,
    },
    {
        img: "../imgs/camiseta-masculina-05.jpg",
        titulo: 'camiseta',
        valor: 100,
        oferta: true,
        novidade: true,
        freteGratis: false,
    }
]

function novoElemento(tagName, className) {
    const elem = document.createElement(tagName)
    elem.className = className
    return elem
}

function parcela(nParcelas = 5, valor) {
    const p = valor / nParcelas
    return `${nParcelas}x R$${p.toFixed(2).replace('.', ',')}`
}

function valorMonetario(valor) {
    return `R$${valor.toFixed(2).replace('.', ',')}`
}

function gerarHTMLProduto(produto) {
    elem = novoElemento('div', 'produto')
    const img = novoElemento('img', '')
    const descricao = novoElemento('div', 'descricao')
    const titulo = novoElemento('h3', '')
    const containerPreco = novoElemento('div', '')
    const preco = novoElemento('h2', '')
    const parcelado = novoElemento('h4', '')

    img.setAttribute('src', produto.img)
    titulo.innerHTML = produto.titulo
    preco.innerHTML = valorMonetario(produto.valor)
    parcelado.innerHTML = parcela(5, produto.valor)

    elem.appendChild(img)
    elem.appendChild(descricao)
    descricao.appendChild(titulo)
    descricao.appendChild(containerPreco)
    containerPreco.appendChild(preco)
    containerPreco.appendChild(parcelado)

    document.querySelector('[wm-link-destino]').appendChild(elem)

}

function exibirNaTela(produtos) {
    document.querySelector('[wm-link-destino]').innerHTML = ''
    produtos.forEach(produto => {
        gerarHTMLProduto(produto)
    })
}

function selecionarCarrinho() {
    document.querySelector('[wm-link-destino]').innerHTML = '<br><br>Seu carrinho ainda está vazio'
}

function selecionador() {
    const url = document.location.toString().split('/')
    const indice = url.length - 1
    const nomePagina = url[indice]
    const selecionados = []
    switch (nomePagina) {
        case 'ofertas':
            produtos.forEach(produto => {
                if (produto.oferta == true) {
                    selecionados.push(produto)
                }
                exibirNaTela(selecionados)
            })
            break
        case 'frete-gratis':
            produtos.forEach(produto => {
                if (produto.freteGratis == true) {
                    selecionados.push(produto)            
                }
                exibirNaTela(selecionados)
            })
            break
        case 'main.html':
            exibirNaTela(produtos)    
            break
        case 'novidades':
            produtos.forEach(produto => {
                if (produto.novidade == true) {
                    selecionados.push(produto)
                }
                exibirNaTela(selecionados)
            })
            break
        case 'carrinho':
            selecionarCarrinho()
            break
    }
    
}

function listener() {
    window.addEventListener("hashchange", function (e) {
        selecionador()
    }, false)
}

exibirNaTela(produtos)
listener()