let carrinho = {};

const carrinhoDiv = document.getElementById('listacarrinho');
const carrinhoEmptyDiv = document.getElementById('vazio');
const carrinhoTotalDiv = document.getElementById('dineiro-total');
const carrinhoBotaoDiv = document.getElementById('botao');

function renderizarCarrinho(){
    carrinhoDiv.innerHTML = '';
    if(carrinho.lenght === 0){
        carrinhoEmptyDiv.style.display = 'block';
        carrinhoBotaoDiv.display = true;
    }else{
        carrinhoEmptyDiv.style.display = 'none';
        carrinhoBotaoDiv.display = false;
        carrinho.forEach(element => {
            const itemDiv = document.createElement('div');
            itemDiv.className='items-center';
            itemDiv.innerHTML=`
                <div>
                    <p>${itemDiv.nome}</p>
                    <p>R$ ${ìtem.preco} x ${itemDiv.quantidade}</p>
                </div>
            `
        });
    }
}

document.addEventListener('DOMContentLoaded',() => {
    renderizarCarrinho();
})