function addSupplierInfoToDOM() {
  
  fetch('../src/components/supplierInfo/supplierInfo.html')
      .then(response => response.text())
      .then(html => {
          const supplierInfoContainer = document.getElementById('supplierInfo');

          supplierInfoContainer.innerHTML += html;
      });

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '../src/components/supplierInfo/supplierInfo.css';
  document.head.appendChild(link);
}

addSupplierInfoToDOM();