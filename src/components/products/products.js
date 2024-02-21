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

  handleFormSubmit(productValue, opcoesValue, quantidadeValue, valorValue, valorTotalValue);
}

function handleFormSubmit(productValue, opcoesValue, quantidadeValue, valorValue, valorTotalValue) {
  if (!clickButton) {
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

    const itemsContainer = document.querySelector('.item');
    itemsContainer.appendChild(newItem);

    const linkPopup = document.getElementById('item');
    console.log(linkPopup);
    const linkText = linkPopup.innerText;
    console.log(linkText);

    const newLink = document.createElement('a');
    newLink.textContent = 'Documento Anexo';
    newLink.href = '#'; // Define o href como "#" para não redirecionar
    newLink.addEventListener('click', function() {
      showModal(linkText); // Mostra o modal personalizado com o texto do link
    });

    linkPopup.appendChild(newLink);
  }
}

// Função para exibir um modal personalizado
function showModal(content) {
  const modalBackdrop = document.createElement('div');
  modalBackdrop.classList.add('modal-backdrop');
  document.body.appendChild(modalBackdrop);

  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = `
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Conteúdo do Link</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          ${content}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Fechar</button>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  modal.addEventListener('shown.bs.modal', function () {
    const item = document.querySelector('.item');
    //item.classList.remove('hidden'); // Remove a classe hidden para mostrar o item
    console.log(item);
  });

  modal.addEventListener('hidden.bs.modal', function () {
    document.body.removeChild(modal);
    document.body.removeChild(modalBackdrop);
    const item = document.querySelector('.item');
    item.classList.add('hidden'); // Adiciona a classe hidden para esconder o item novamente
  });

  $(modal).modal('show'); // Ativa o modal usando jQuery
}

