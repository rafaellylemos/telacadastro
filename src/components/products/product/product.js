var clickButton = false;

function addProductToDOM() {
  fetch('../src/components/products/product/product.html')
    .then(response => response.text())
    .then(html => {
      const productContainer = document.getElementById('product');
    
        productContainer.innerHTML = html;
      });

      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '../src/components/products/product/product.css';
      document.head.appendChild(link);
    }

addProductToDOM();

function totalValue() {
  var quantidade = parseFloat(document.getElementById('quantidade').value);
  var valor = parseFloat(document.getElementById('valor').value);

  var valorTotal = quantidade * valor;

  document.getElementById('valorTotal').value = valorTotal.toFixed(2);
}


function coletarDadosDoFormulario() {
  let productValue = document.getElementById('product').value;
  let opcoesValue = document.getElementById('opcoes').value;
  let quantidadeValue = document.getElementById('quantidade').value;
  let valorValue = document.getElementById('valor').value;
  let valorTotalValue = document.getElementById('valorTotal').value;

  if (clickButton) {
    parent.handleFormSubmit(productValue, opcoesValue, quantidadeValue, valorValue, valorTotalValue);
  }else {
    clickButton = true;
  }
}

