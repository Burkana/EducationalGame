window.addEventListener('DOMContentLoaded', () => {
      const menuItems = document.querySelectorAll('.menu-item');
      const contents = document.querySelectorAll('.tab-content');

      function activateTab(id) {

        menuItems.forEach(item => {
          item.classList.toggle('active', item.dataset.id === id);
        });

        contents.forEach(content => {
          content.classList.toggle('active', content.dataset.id === id);
        });


        localStorage.setItem('activeTab', id);
      }

      menuItems.forEach(item => {
        item.addEventListener('click', () => {
          activateTab(item.dataset.id);
        });
      });


      const saved = localStorage.getItem('activeTab') || 'learn';
      activateTab(saved);
    });