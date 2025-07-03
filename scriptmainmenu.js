window.addEventListener('DOMContentLoaded', () => {
      const menuItems = document.querySelectorAll('.menu-item');
      const contents = document.querySelectorAll('.tab-content');

      function activateTab(id) {
        // Активира бутон
        menuItems.forEach(item => {
          item.classList.toggle('active', item.dataset.id === id);
        });

        // Показва съответното съдържание
        contents.forEach(content => {
          content.classList.toggle('active', content.dataset.id === id);
        });

        // Запазва избора
        localStorage.setItem('activeTab', id);
      }

      // Добавяме слушатели
      menuItems.forEach(item => {
        item.addEventListener('click', () => {
          activateTab(item.dataset.id);
        });
      });

      // Стартиране: ако има запазено, активирай го
      const saved = localStorage.getItem('activeTab') || 'learn';
      activateTab(saved);
    });