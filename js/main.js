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

    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    criaElemento(itemAtual)

    itens.push(itemAtual)

    localStorage.setItem("itens", JSON.stringify(itens))

    nome.value = ""
    quantidade.value = ""
})

function criaElemento(item) {
    //<li class="item"><strong>7</strong>Camisas</li>
    //Cria a tag <li>
    const novoItem = document.createElement('li')
    //Adiciona a classe "item" no <li>
    novoItem.classList.add("item")

    //Cria a tag <strong>
    const numeroItem = document.createElement('strong')
    //Adiciona o valor "quantidade"
    numeroItem.innerHTML = item.quantidade
    //Adiciona o "numeroItem" dentro do "novoItem"
    novoItem.appendChild(numeroItem)
    
    novoItem.innerHTML += item.nome

    //Adiciona no HTML
    lista.appendChild(novoItem)

}

