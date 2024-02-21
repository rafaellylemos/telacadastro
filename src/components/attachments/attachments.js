function addAttachmentsToDOM() {

  fetch('../src/components/attachments/attachments.html')
    .then(response => response.text())
    .then(html => {
      const attachmentsContainer = document.getElementById('attachments');
      attachmentsContainer.innerHTML += html;
    });

    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '../src/components/attachments/attachments.css'
    document.head.appendChild(link);
}

addAttachmentsToDOM();