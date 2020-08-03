
var botao = document.querySelector("input");
botao.addEventListener("click", clicar);

function clicar(){
    var ano = window.prompt("Qual é o ano que você quer verificar? (Caso deixe em branco será verificado o ano atual.");

    if (ano.length == 0){
        var data = new Date();
        var ano = data.getFullYear();
    }

    var res = document.querySelector("div.res");
    res.innerHTML = `<strong>Analisando o ano de ${ano}</strong>`;

    var validacao = document.createElement("p");

    if (ano % 4 == 0){
        validacao.innerHTML = `O ano de ${ano} <span style="background-color: #76e070;">É BISSEXTO</span> &#9989;`;
    } else{
        validacao.innerHTML = `O ano de ${ano} <span style="background-color: #d16d5a;">NÃO É BISSEXTO</span> &#10060;`;
    }

    res.appendChild(validacao);
}