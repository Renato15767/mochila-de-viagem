const form = document.getElementById("novoItem")
const lista = document.getElementById("lista")
//Cria um vetor vazio caso não tiver nada no localStorage
const itens = localStorage.getItem("itens") || []
console.log(itens)

form.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    criaElemento(nome.value, quantidade.value)

    nome.value = ""
    quantidade.value = ""
})

function criaElemento(nome, quantidade) {
    //<li class="item"><strong>7</strong>Camisas</li>
    //Cria a tag <li>
    const novoItem = document.createElement('li')
    //Adiciona a classe "item" no <li>
    novoItem.classList.add("item")

    //Cria a tag <strong>
    const numeroItem = document.createElement('strong')
    //Adiciona o valor "quantidade"
    numeroItem.innerHTML = quantidade
    //Adiciona o "numeroItem" dentro do "novoItem"
    novoItem.appendChild(numeroItem)
    
    novoItem.innerHTML += nome

    lista.appendChild(novoItem)

    const itemAtual = {
        "nome": nome,
        "quantidade": quantidade
    }

    itens.push(itemAtual)

    localStorage.setItem("itens", JSON.stringify(itens))
}
