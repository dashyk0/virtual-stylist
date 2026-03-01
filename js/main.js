// main.js
document.addEventListener('DOMContentLoaded', () => {
 // Подгрузка хэдера
fetch('/virtual-stylist/includes/header.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('header-placeholder').innerHTML = html;
  })
  .catch(err => console.error('Ошибка загрузки хэдера:', err));

// Подгрузка футера
fetch('/virtual-stylist/includes/footer.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('footer-placeholder').innerHTML = html;
  })
  .catch(err => console.error('Ошибка загрузки футера:', err));
