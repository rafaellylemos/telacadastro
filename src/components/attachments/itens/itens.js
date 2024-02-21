
function addItensToDOM() {

  fetch ('../src/components/attachments/itens/itens.html')
    .then(response => response.text())
    .then(html => {
      const itensContainer = document.getElementById('itens');

      itensContainer.innerHTML += html;
    });

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '../src/components/attachments/itens/itens.css'
    document.head.appendChild(link);
}

addItensToDOM();



