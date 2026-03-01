// main.js
document.addEventListener('DOMContentLoaded', () => {
  // Подгрузка хэдера
  fetch('../includes/header.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('header-placeholder').innerHTML = html;
    });

  // Подгрузка футера
  fetch('../includes/footer.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById('footer-placeholder').innerHTML = html;
    });
});