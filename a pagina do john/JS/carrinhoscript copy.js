document.addEventListener("DOMContentLoaded", () => {
    atualizarCarrinho();
    restaurarQuantidades();
});


function adicionarCarrinho(id, botao) {
    let bloco = botao.closest("ul");
    let qtd = parseInt(bloco.querySelector("input[type='number']").value);

    // pega carrinho existente ou cria objeto novo
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || {};

    // adiciona quantidade ao item
    carrinho[id] = (carrinho[id] || 0) + qtd;

    // salva no navegador
    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    // atualiza número do carrinho na tela
    atualizarCarrinho();
}

function atualizarCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || {};
    let total = 0;

    // soma todas as quantidades
    for (let id in carrinho) {
        total += carrinho[id];
    }

    document.querySelectorAll("#carrinho-numero").forEach(span => {
        span.textContent = total;
    });
}

function resetarCarrinho() {
    localStorage.removeItem("carrinho");
    atualizarCarrinho();
}



document.addEventListener("DOMContentLoaded", () => {
    atualizarCarrinho();
    carregarCarrinho();
});

function carregarCarrinho() {
    let area = document.querySelector(".listacarrinho");
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || {};

    // area.innerHTML = ""; 

    for (let id in carrinho) {
        let qtd = carrinho[id];

        let bloco = document.createElement("div");
        bloco.classList.add("listacarrinho");
        bloco.innerHTML = `
            <h3>${id}</h3>
            <p>Quantidade: <span>${qtd}</span></p>
            <button onclick="removerUnidade('${id}')">Remover 1</button>
        `;

        area.appendChild(bloco);
    }
}

function removerUnidade(id) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || {};

    if (!carrinho[id]) return;

    carrinho[id]--;

    if (carrinho[id] <= 0) {
        delete carrinho[id];
    }

    localStorage.setItem("carrinho", JSON.stringify(carrinho));

    atualizarCarrinho();
    carregarCarrinho();
}

function restaurarQuantidades() {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || {};

    // pega todos os inputs do cardápio
    document.querySelectorAll("ul").forEach(bloco => {
        let input = bloco.querySelector("input[type='number']");
        let id = bloco.getAttribute("data-id"); // você PRECISA disso

        if (carrinho[id]) {
            input.value = carrinho[id];
        }
    });
}


// function resetarCarrinho() {
//     localStorage.removeItem("carrinho");
//     atualizarCarrinho();
//     carregarCarrinho();
// }
