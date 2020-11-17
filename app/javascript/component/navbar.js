
const updateNavbarState = (navbar) => {
  if (window.scrollY) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}
const navbar = document.querySelector('#mainNavbar');
window.addEventListener('scroll', () => updateNavbarState(navbar));
updateNavbarState(navbar);

export {updateNavbarState}