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


      const saved = localStorage.getItem('activeTab') || 'play';
      activateTab(saved);
    });

    //The hide option
 document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.sidebar');
  const toggle  = document.getElementById('menu-toggle');

  // auto‑collapse on narrow screens (≤900 px)
  if (window.matchMedia('(max-width: 900px)').matches) {
    sidebar.classList.add('collapsed');
  }

  toggle.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
  });
});

