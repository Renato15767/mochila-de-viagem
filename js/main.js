const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
//Cria um vetor vazio caso não tiver nada no localStorage
//O "JSON" transforma de string para um objeto
const itens = JSON.parse(localStorage.getItem("itens")) || []

//Irá percorrer o array
itens.forEach(elemento => {
    criaElemento(elemento)
});

form.addEventListener("submit", (evento) => {
    evento.preventDefault()
    
    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    //Vê se existe o nome do elemento que o usuário digitou
    const existe = itens.find( elemento => elemento.nome === nome.value)
    
    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    //Se "existe" existe
    if(existe){
        //Se existir um novo item
        itemAtual.id = existe.id

        atualizaElemento(itemAtual)
        //Irá receber o valor atualizado do item recebido na posição certa
        itens[existe.id] = itemAtual
    }else{
        itemAtual.id = itens.length

        criaElemento(itemAtual)
        //Coloca "itemAtual" dentro de "itens"
        itens.push(itemAtual)
    }
    //Guarda no localStorage
    localStorage.setItem("itens", JSON.stringify(itens))

    nome.value = ""
    quantidade.value = ""
})

function criaElemento(item) {
    //objetivo -> <li class="item"><strong>7</strong>Camisas</li>
    //Cria a tag <li>
    const novoItem = document.createElement('li')
    //Adiciona a classe "item" no "novoItem" 
    novoItem.classList.add("item")

    //Cria a tag <strong>
    const numeroItem = document.createElement('strong')
    //innerHTML adiciona o valor na tag -> <strong>7</strong>
    numeroItem.innerHTML = item.quantidade
    //Adiciona um id ao elemento
    numeroItem.dataset.id = item.id
    //Adiciona o numeroItem dentro de novoItem -> <li class="item"><strong>7</strong></li>
    novoItem.appendChild(numeroItem)
    
    novoItem.innerHTML += item.nome

    //Adiciona um botão em cada <li>
    novoItem.appendChild(botaoDeleta())

    //Adiciona no HTML
    lista.appendChild(novoItem)
}

function atualizaElemento(item){
    //Muda o valor da quantidade do item, caso ele ja existir
    document.querySelector("[data-id='"+item.id+"']").innerHTML = item.quantidade
}

function botaoDeleta(){
    const elementoBotao = document.createElement("button")
    elementoBotao.innerText = "X"

    return elementoBotao
}


