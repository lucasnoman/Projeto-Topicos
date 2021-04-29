// Renderizando o conteúdo do localStorage
const listaWebStorage = JSON.parse(localStorage.getItem('shoppingList'));

// Função para poder formatar os valores digitados na moeda BR
let formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

// Essa é uma função autoexecutável. Com ela eu crio
// cada card que será renderizado com o conteúdo
// "shoppingList" no local storage.
(() => {
  const cardGroup = document.querySelector('.cardGroup');
  for (const iterator of listaWebStorage) {
    let card = document.createElement('div');
    card.setAttribute('class', 'card');

    let cardImage = document.createElement('div');
    cardImage.setAttribute('class', 'cardImage');

    let img = document.createElement('img');
    img.setAttribute('src', 'https://source.unsplash.com/random');

    let cardProductInfo = document.createElement('div');
    cardProductInfo.setAttribute('class', 'cardProductInfo');

    let value = document.createElement('div');
    value.setAttribute('class', 'value');

    let showProductName = document.createElement('p');
    showProductName.setAttribute('class', 'showProductName');
    showProductName.innerText = iterator.productName;

    const priceFormatted = formatter.format(iterator.productPrice);

    let showProductPrice = document.createElement('p');
    showProductPrice.setAttribute('class', 'showProductPrice');
    showProductPrice.innerText = priceFormatted;

    let add = document.createElement('div');
    add.setAttribute('class', 'add');
    add.setAttribute('id', 'cartColor');

    let cart = document.createElement('span');
    cart.setAttribute('class', 'iconify');
    cart.setAttribute('id', 'cart');
    cart.setAttribute('data-icon', 'mdi:cart-minus');
    cart.setAttribute('data-inline', 'false');
    cart.setAttribute('onclick', `remove(${iterator.id})`);

    // Adicionando a imagem
    card.append(cardImage);
    cardImage.append(img);

    // Adicionando a área da informacão
    card.append(cardProductInfo);
    cardProductInfo.append(value);

    // Adicionando a informação
    value.append(showProductName);
    value.append(showProductPrice);

    // Adicionando o botão de remover
    cardProductInfo.append(add);
    add.append(cart);

    cardGroup.append(card);
  }
})();

// Criei um vetor novo para poder manipular os itens da lista
const newWebStorage = new Array();
for (const iterator of listaWebStorage) {
  newWebStorage.push(iterator);
}

// Isso é uma gambiarra para remover os itens da lista
// ao clicar no carrinho.
//* Não consegui pegar o vetor já feito no index.js e exportar para cá
//* para manipular ele. Se alguém souber, comenta para mim por favor.
function remove(id) {
  let index = newWebStorage.findIndex(x => x.id == id);
  newWebStorage.splice(index, 1);
  localStorage.setItem('shoppingList', JSON.stringify(newWebStorage));
  window.location.reload();
}

// Daqui para baixo, só busquei os preços no local storage,
// joguei em um novo vetor e somei para apresentar o resultado.
let total = new Array();
const totalPrice = document.querySelector('#totalPrice');

for (const iterator of listaWebStorage) {
  total.push(Number(iterator.productPrice));
}

let soma = total.reduce((a, va) => a + va);

totalPrice.innerText = formatter.format(soma);
