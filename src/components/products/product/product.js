var clickButton = false;

function addProductToDOM() {
  fetch('../src/components/products/product/product.html')
    .then(response => response.text())
    .then(html => {
      const productContainers = document.getElementsByClassName('product');
      // Itera sobre a coleção de elementos com a classe 'product'
      Array.from(productContainers).forEach(container => {
        container.innerHTML = html;

        // const id = document.getElementById('1');
        // // console.log(id.innerHTML);

  
        // let labelElement = document.getElementById("productNumber");

        // // if (parent.document.getElementById("1").querySelector("#productNumber")) {
        // //     labelElement.innerText = "Produto 1";
        // // } else if (parent.document.getElementById("2").querySelector("#productNumber")) {
        // //     labelElement.innerText = "Produto 2";
        // // }
        //  //const id2 = document.getElementById('2');
        // // console.log(id2)
        // //let labelElement2 = document.getElementById("productNumber");
        // //labelElement2.innerText = "Produto 2";
      });
    })
    .catch(error => console.error('Erro ao carregar o conteúdo do produto:', error));

   

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

