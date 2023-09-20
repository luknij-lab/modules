document.addEventListener("DOMContentLoaded", () => {

/*
BBQ ------------------------------- */

  const menuBtn = document.querySelector('.hamburger');

  // Zdarzenie klieknięcia
  menuBtn.addEventListener('click', () => {

    // Dodanie sufixu do klasy hamburger elementu <button>
    menuBtn.classList.toggle('hamburger--active');
  });

});
