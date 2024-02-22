var clickButton = false;

function addProductsToDOM() {

  fetch ('../src/components/products/products.html')
    .then(response => response.text())
    .then(html => {
      const productsContainer = document.getElementById('products');

      productsContainer.innerHTML += html;
    });

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '../src/components/products/products.css';
    document.head.appendChild(link);
}

addProductsToDOM();




function handleButtonClick() {
  clickButton = !clickButton;
  let productValue = document.getElementById('product').value;
  let opcoesValue = document.getElementById('opcoes').value;
  let quantidadeValue = document.getElementById('quantidade').value;
  let valorValue = document.getElementById('valor').value;
  let valorTotalValue = document.getElementById('valorTotal').value;

  let productValue2 = document.getElementById('product2').value;
  let opcoesValue2 = document.getElementById('opcoes2').value;
  let quantidadeValue2 = document.getElementById('quantidade2').value;
  let valorValue2 = document.getElementById('valor2').value;
  let valorTotalValue2 = document.getElementById('valorTotal2').value;

  handleFormSubmit(productValue, opcoesValue, quantidadeValue, valorValue, valorTotalValue, productValue2, opcoesValue2, quantidadeValue2, valorValue2, valorTotalValue2);
}

function handleFormSubmit(productValue, opcoesValue, quantidadeValue, valorValue, valorTotalValue, productValue2, opcoesValue2, quantidadeValue2, valorValue2, valorTotalValue2) {
  if (!clickButton) {

    const produto1 = {
      produto: productValue,
      medida: opcoesValue,
      estoque: quantidadeValue,
      valorUnitario: valorValue,
      valorTotal: valorTotalValue
  };

  const produto2 = {
      produto: productValue2,
      medida: opcoesValue2,
      estoque: quantidadeValue2,
      valorUnitario: valorValue2,
      valorTotal: valorTotalValue2
  };

  // Converte os objetos em strings JSON
  const jsonProduto1 = JSON.stringify(produto1);
  const jsonProduto2 = JSON.stringify(produto2);

  // Cria arquivos JSON dinamicamente com os dados dos produtos
  createJSONFile('anexo1.json', jsonProduto1);
  createJSONFile('anexo2.json', jsonProduto2);

  const url = 'data:text/plain;charset=utf-8,' + encodeURIComponent(jsonProduto1);

  const url2 = 'data:text/plain;charset=utf-8,' + encodeURIComponent(jsonProduto2);

    const newItem = document.createElement('div');
newItem.classList.add('item');
newItem.classList.add('hidden');
newItem.innerHTML = `
  <p>Produto: ${productValue}</p>
  <p>UND. Medida: ${opcoesValue}</p>
  <p>QTDE. em Estoque: ${quantidadeValue}</p>
  <p>Valor Unitário: ${valorValue}</p>
  <p>Valor Total: ${valorTotalValue}</p>
`;

const itemsContainer = document.getElementById('product').querySelector('.itemP');
itemsContainer.appendChild(newItem);

const linkPopup = document.getElementById('product').querySelector('.itemP');
const linkText = linkPopup.innerText;
console.log(linkText);

const newLink = document.createElement('a');
newLink.textContent = 'Documento Anexo';
newLink.href = '#';
//newLink.setAttribute('download', 'anexo1.json');

linkPopup.appendChild(newLink);


const newItem2 = document.createElement('div');
newItem2.classList.add('item');
newItem2.classList.add('hidden');
newItem2.innerHTML = `
  <p>Produto: ${productValue2}</p>
  <p>UND. Medida: ${opcoesValue2}</p>
  <p>QTDE. em Estoque: ${quantidadeValue2}</p>
  <p>Valor Unitário: ${valorValue2}</p>
  <p>Valor Total: ${valorTotalValue2}</p>
`;

const itemsContainer2 = document.getElementById('product2').querySelector('.item2P');
console.log(itemsContainer2);
itemsContainer2.appendChild(newItem2);

const linkPopup2 = document.getElementById('product2').querySelector('.item2P');
const linkText2 = linkPopup2.innerText;
console.log(linkText2);

const newLink2 = document.createElement('a');
newLink2.textContent = 'Documento Anexo 2';
newLink2.href = '#';
//newLink.setAttribute('download', 'anexo2.json');

linkPopup2.appendChild(newLink2);
  }
}

function createJSONFile(filename, content) {
  const blob = new Blob([content], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  return {url, filename};
}

// Função para exibir um modal personalizado
// function showModal(content) {
//   const modalBackdrop = document.createElement('div');
//   modalBackdrop.classList.add('modal-backdrop');
//   document.body.appendChild(modalBackdrop);

//   const modal = document.createElement('div');
//   modal.classList.add('modal');
//   modal.innerHTML = `
//     <div class="modal-dialog">
//       <div class="modal-content">
//         <div class="modal-header">
//           <h5 class="modal-title">Conteúdo do Link</h5>
//           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
//             <span aria-hidden="true">&times;</span>
//           </button>
//         </div>
//         <div class="modal-body">
//           ${content}
//         </div>
//         <div class="modal-footer">
//           <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
//         </div>
//       </div>
//     </div>
//   `;
//   document.body.appendChild(modal);

//   modal.addEventListener('shown.bs.modal', function () {
//     const item = document.querySelector('.item');
//     //item.classList.remove('hidden'); // Remove a classe hidden para mostrar o item
//     console.log(item);
//   });

//   modal.addEventListener('hidden.bs.modal', function () {
//     document.body.removeChild(modal);
//     document.body.removeChild(modalBackdrop);
//     const item = document.querySelector('.item');
//     item.classList.add('hidden'); // Adiciona a classe hidden para esconder o item novamente
//   });

//   $(modal).modal('show'); // Ativa o modal usando jQuery
// }

