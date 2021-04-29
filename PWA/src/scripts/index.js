/* eslint-disable no-unused-vars */
// Essa função faz a adição da imagem escolhida na div ao lado
function loadFile(event) {
  let reader = new FileReader();
  reader.onload = function () {
    let output = document.getElementById('showPicture');
    output.src = reader.result;
  };
  reader.readAsDataURL(event.target.files[0]);
}

document.querySelector('#register').addEventListener('click', addingToList);

// Vetor para manipular os dados
let shoppingList = new Array();

// Pega dados do localStorage
const retrieveData = JSON.parse(localStorage.getItem('shoppingList'));
for (const iterator of retrieveData) {
  shoppingList.push(iterator);
}

// Função para adicionar no Web Storage
function addingToList() {
  const productName = document.querySelector('#productName').value;
  const productPrice = document.querySelector('#productPrice').value;

  // Os dados pegos na DOM pelo input do usuário
  // são transformados em um objeto juntamente a um
  // ID improvisado
  const product = {
    id: Math.floor(Math.random() * Date.now()),
    productName,
    productPrice,
  };

  // Após, são todos adicionados no vetor e no local storage
  shoppingList.push(product);

  localStorage.setItem('shoppingList', JSON.stringify(shoppingList));

  // Isso é só para limpar os campos após cadastrar
  document.querySelector('#productName').value = '';
  document.querySelector('#productPrice').value = '';
}

//! Manter por último
navigator.serviceWorker.register('../sw.js');
