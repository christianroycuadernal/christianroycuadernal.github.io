const pdfItems = document.querySelectorAll('.pdf-item');
const pdfViewer = document.querySelector('.pdf-viewer');
const pdfEmbed = document.getElementById('pdfEmbed');

pdfItems.forEach(item => {
  item.addEventListener('click', () => {
    const pdfFile = item.getAttribute('data-pdf');
    pdfEmbed.setAttribute('src', pdfFile);
    pdfViewer.style.display = 'block';
  });
});

pdfViewer.addEventListener('click', () => {
  pdfViewer.style.display = 'none';
  pdfEmbed.setAttribute('src', '');
});