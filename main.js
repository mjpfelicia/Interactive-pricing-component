const exibicaoValor = [{
        pageView: 10,
        valor: 8,
    },
    {
        pageView: 50,
        valor: 12
    }, {
        pageView: 100,
        valor: 16
    }, {
        pageView: 500,
        valor: 24
    }, {
        pageView: "1k",
        valor: 36
    }
];
const planoAnual = document.getElementById("plano-anual");


document.querySelector("input").addEventListener("change", (ev) => {
    const pageViews = document.querySelector('#pageviews');
    const valor = document.querySelector('#valor');
    const exibicoesDaPagina = Number(ev.target.value);
    pageViews.textContent = exibicaoValor[exibicoesDaPagina].pageView;
    const precoPlano = exibicaoValor[exibicoesDaPagina].valor;
    const precoComDesconto = aplicarDescontoPlanoAnual(precoPlano);
    valor.textContent = precoPlano;

    if (planoAnual.checked) {
        valor.textContent = precoComDesconto;
    }

    console.log({ "valor.textContent": valor.textContent })

})

planoAnual.addEventListener("click", (ev) => {
    const plano = ev;
    const idPlano = document.getElementById("planos");
    const precoPlano = Number(valor.textContent)
    if (planoAnual.checked) {
        const precoComDesconto = aplicarDescontoPlanoAnual(precoPlano);
        valor.textContent = precoComDesconto;
    } else {
        valor.textContent = exibicaoValor[+idPlano.value].valor;
    }


})

function aplicarDescontoPlanoAnual(valorParaDesconto = 1) {
    return valorParaDesconto - (valorParaDesconto * 25 / 100)
}