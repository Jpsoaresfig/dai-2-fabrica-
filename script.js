async function minhaFuncao() {
    const local = document.getElementById('meuContent')

    const response = await fetch('https://api.randomuser.me/?results=10')//receber a api
    const data = await response.json()//converter para json

    const meuArray = data.results

    for(i = 0; i < meuArray.length; i++) {//for para leitura de cada intem que ele pede no array
        const email = meuArray[i].email//item email
        const name = meuArray[i].name.first//item primeiro nome
        const secondName = meuArray[i].name.last//item ultimo nome

        const divMeuCard = document.createElement('div')//criaçao de div 
        local.appendChild(divMeuCard)//quero colocar divmeucard em local
    
        const meuH1 = document.createElement('h1')//criando h1
        meuH1.innerText = `${name} ${secondName}`//inserir váriaveis do array 
        meuH1.style.color = 'red'//css
        meuH1.style.fontSize = '1rem'//css
        divMeuCard.appendChild(meuH1)//quero colocar h1 no divMeuCard
    
        const meuParagrafo = document.createElement('p')//criando paragrafo
        meuParagrafo.innerText = email//no maragrafo bote o email da array
        divMeuCard.appendChild(meuParagrafo)//dentro do Meu paragrafo quero colocar o divMeucard
    }
    
    
}
minhaFuncao()
