function carregarCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
    let itensDiv = document.getElementById('itensCarrinho');
    itensDiv.innerHTML = '';

    let total = 0;

    carrinho.forEach((item, index) => {
        itensDiv.innerHTML += <div class="item">${item.nome} - R$ ${item.preco.toFixed(2)}</div>;
        total += item.preco;
    });

    document.getElementById('total').innerText = "Total: R$ " + total.toFixed(2);
}

function limparCarrinho() {
    localStorage.removeItem('carrinho');
    carregarCarrinho();
}

carregarCarrinho();