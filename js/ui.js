document.addEventListener('DOMContentLoaded', () => {
  // NAV MENU
  const menus = document.querySelectorAll('.side-menu');
  M.Sidenav.init(menus, { edge: 'right' });
  // ADD FORM POST
  const forms = document.querySelectorAll('.side-form');
  M.Sidenav.init(forms, { edge: 'left' });
});