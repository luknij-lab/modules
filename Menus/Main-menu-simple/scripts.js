document.addEventListener('DOMContentLoaded', function() {
	const menuItems = document.querySelectorAll('.menu-item-has-children');
  
	function mobileClickHandler(event) {
	  let isOpen = this.getAttribute('aria-expanded') === 'true';
  
	  if (!isOpen) {
		this.setAttribute('aria-expanded', 'true');
		event.preventDefault(); // Stop the navigation on first click
	  } else {
		this.setAttribute('aria-expanded', 'false'); // Reset for next click
	  }
	}
  
	function addMobileEvents() {
	  menuItems.forEach(item => {
		item.addEventListener('click', mobileClickHandler);
	  });
	}
  
	function removeMobileEvents() {
	  menuItems.forEach(item => {
		item.removeEventListener('click', mobileClickHandler);
		item.setAttribute('aria-expanded', 'false'); // Ensure menus are reset when switching to desktop
	  });
	}
  
	// Initialize event listeners based on the initial width
	if (window.innerWidth < 768) {
	  addMobileEvents();
	}
  
	// Event listeners based window resize
	window.addEventListener('resize', function() {
	  if (window.innerWidth < 768) {
		addMobileEvents();
	  } else {
		removeMobileEvents();
	  }
	});
  });

/* BBQ ------------------------------- */

document.addEventListener("DOMContentLoaded", function(event) {

// Zmienne - ciało HTML
const body_html = document.querySelector('body');
const top_menu = document.querySelector('.main-navigation');

// Zmienne - BBQ
const bbq = document.querySelector('.bbq');
const bbq_bar = document.querySelector('.bbq-bar');

// BBQ zdarzenie kliknięcia
bbq.addEventListener("click", function(){

	// zmiana wyglądu przycisku
	bbq_bar.classList.toggle("active-btn");
	body_html.classList.toggle("openedMobileMenu");

	// // otwieranie i zamykanie menu gdy BBQ zostanie wciśnięty
	top_menu.classList.toggle("mobile");

	// zamknięcie wszystkich otwartych submenu gdy zamknie się całe menu przyciskiem BBQ
	const menuItems = document.querySelectorAll('.menu-item-has-children');

	if(bbq_bar.classList.contains('active-btn') == true){
	menuItems.forEach(item => {
		let isOpen = item.getAttribute('aria-expanded');
	
		if (isOpen == 'true') {
		item.setAttribute('aria-expanded', 'false');
		}
	});
	}
});

/* Zmiana szerokości - czyszczenie klas ------------------------------- */
// zamyka wszystkie menu gdy menu jest otwarte a użytkownik zmienił rozmiar ekranu na większy niż 768 px
window.addEventListener('resize', function(){
	let win_width = this.innerWidth;

	if( win_width > 768 ){
	body_html.classList.remove("openedMobileMenu");
	top_menu.classList.remove("mobile");

	// BBQ przycisk
	bbq_bar.classList.remove("active-btn");
	}
});
}); // koniec DOMContentLoaded