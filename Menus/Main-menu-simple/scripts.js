document.addEventListener("DOMContentLoaded", () => {

/*
BBQ ------------------------------- */

  // button
  const menuBtn = document.querySelector('.hamburger');
  // menu
  const mainMenu = document.querySelector('#main-menu');

  // Zdarzenie klieknięcia
  menuBtn.addEventListener('click', () => {

    // Dodanie sufixu do klasy hamburger elementu <button>
    menuBtn.classList.toggle('hamburger--active');

    // 
    mainMenu.classList.toggle('mobile--active');
  });

});
