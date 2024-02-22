var clickButton = false;

function addProduct2ToDOM() {
  fetch('../src/components/products/product2/product2.html')
    .then(response => response.text())
    .then(html => {
      const productContainer2 = document.getElementById('product2');
    
        productContainer2.innerHTML = html;
      });

      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = '../src/components/products/product2/product2.css';
      document.head.appendChild(link);
    }

addProduct2ToDOM();

function totalValue2() {
  var quantidade2 = parseFloat(document.getElementById('quantidade2').value);
  var valor2 = parseFloat(document.getElementById('valor2').value);

  var valorTotal2 = quantidade2 * valor2;

  document.getElementById('valorTotal2').value = valorTotal2.toFixed(2);
}


function coletarDadosDoFormulario2() {
  let productValue2 = document.getElementById('product2').value;
  let opcoesValue2 = document.getElementById('opcoes2').value;
  let quantidadeValue2 = document.getElementById('quantidade2').value;
  let valorValue2 = document.getElementById('valor2').value;
  let valorTotalValue2 = document.getElementById('valorTotal2').value;

  if (clickButton) {
    parent.handleFormSubmit(productValue2, opcoesValue2, quantidadeValue2, valorValue2, valorTotalValue2);
  }else {
    clickButton = true;
  }
}
