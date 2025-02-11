document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      const loadingScreen = document.getElementById('loading-screen');
      const carouselWrapper = document.querySelector('.carousel-wrapper');
  
      // Скрыть экран загрузки
      loadingScreen.style.display = 'none';
  
      // Показать основной контент
      carouselWrapper.style.display = 'block';
    }, 3000); // Задержка 3 секунды
  });
  