function addHeaderToDOM() {
  
  fetch('../src/components/header/header.html')
      .then(response => response.text())
      .then(html => {
          const appContainer = document.getElementById('app');

          appContainer.innerHTML += html;
      });

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = '../src/components/header/header.css';
  document.head.appendChild(link);
}

addHeaderToDOM();

