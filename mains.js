function coletarCep() {
    let cep = document.querySelector("#cep").value
    console.log(cep)
    receberDados(cep)
}

async function receberDados(cep) {
    let dados = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then(x => x.json())
    console.log(dados)
    dadosTela(dados)
}

function dadosTela(dados) {
    document.querySelector("#logradouro").innerHTML = dados.logradouro
    document.querySelector("#bairro").innerHTML = dados.bairro
    document.querySelector("#cidade").innerHTML = dados.localidade
    document.querySelector("#uf").innerHTML = dados.uf
    document.querySelector("#regiao").innerHTML = dados.regiao
}