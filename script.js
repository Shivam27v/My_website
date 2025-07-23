document.addEventListener('DOMContentLoaded', function() {
  const menuIcon = document.querySelector('.menu-icon');
  const sidebar = document.querySelector('.sidebar');
  const closeIcon = document.querySelector('.close-icon');

  if(menuIcon && sidebar && closeIcon) {
    menuIcon.addEventListener('click', function() {
      sidebar.classList.add('open-sidebar');
      sidebar.classList.remove('close-sidebar');
    });
    closeIcon.addEventListener('click', function() {
      sidebar.classList.remove('open-sidebar');
      sidebar.classList.add('close-sidebar');
    });
  }
});
