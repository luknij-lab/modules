/* Menu mobilne ------------------------------- */
document.addEventListener('DOMContentLoaded', function() {
  
	const menuItems = document.querySelectorAll('.menu-item-has-children');
	const menuItemslink = document.querySelectorAll('.menu-item-has-children a');
	let static_window_width = window.innerWidth;
  
	// Gdy strona zostanie wyświetlona w wersji mobilnej pierwsze kliknięcie w rodzica, spowoduje otworzenie podmenu, a drugie kliknięcie uruchomi hiperłącze rodzica.
	if( static_window_width < 768 ){
	  menuItems.forEach(item => {
		let subNav = document.querySelector('.menu-item .submenu');
		const menuLink = document.querySelector('.menu-item a');      
		
		item.addEventListener('click', (e) => {
		  let isOpen = item.getAttribute('aria-expanded');
		  
		  if (isOpen == 'false') {
			e.preventDefault();
			item.setAttribute('aria-expanded', 'true');
		  }
		}); // koniec zdarzenia kliknięcie.
	  }); // koniec pętli foreach.
	
	}

	// funkcja zawierająca zdarzenie najechania kursorem myszy na element oraz zdarzenie opuszczenia kursora myszy z obszaru elementu.
	function handleEvent() {
		const elements = document.querySelectorAll('.menu-item-has-children');
		
		elements.forEach(element => {
		  // Dodajemy obsługę zmiany aria-expanded przy najechaniu myszką.
		  element.addEventListener('mouseover', () => {
			element.setAttribute('aria-expanded', 'true');
		  });
  
		  // Dodajemy obsługę zmiany aria-expanded przy opuszczeniu obszaru elementu.
		  element.addEventListener('mouseout', () => {
			element.setAttribute('aria-expanded', 'false');
		  });
		});
	  }
  
	// funkcja sprawdzająca szerokość ekranu i gdy szerokość jest >= 768 px to rejestruje funkcję handleEvent, a gdy szerokość ekranu jest < 768 px to usuwa funkcję handleEvent.
	function checkWindowSize() {
		window.addEventListener('resize', function(){
			let dynamic_window_width = this.innerWidth;
	  
			if( dynamic_window_width >= 768 ){
				window.addEventListener('resize', handleEvent);
			}else{
				window.removeEventListener('resize', handleEvent);
			}
		});
	  }
  
	// uruchomienie funkcji
	checkWindowSize();
	window.addEventListener('resize', checkWindowSize);

	// funkcja która dynamicznie sprawdza szerokość okna
	window.addEventListener('resize', function(){

	  let dynamic_window_width = this.innerWidth;

	  // jeśli szerokość ekranu zostanie zmniejszona i będzie < 768 px. Pierwsze kliknięcie w rodzica otwiera submenu, drugie uruchamia hiperłącze rodzica.
	  if( dynamic_window_width < 768 ){
		menuItems.forEach(item => {
		  let subNav = document.querySelector('.menu-item .submenu');
		  const menuLink = document.querySelector('.menu-item a');

		  item.addEventListener('click', (e) => {
			let isOpen = item.getAttribute('aria-expanded');
			
			if (isOpen == 'false') {
			  e.preventDefault();
			  item.setAttribute('aria-expanded', 'true');
			}
		  }); // koniec zdarzenia
		}); // koniec pętli foreach
	
	// jeśli szerokość ekranu zostanie zwiększona, a wcześniej użytkownik w wersji mobilnej otworzy submenu, submenu zostanie zamknięte.
	}else if( dynamic_window_width >= 768 ){
  
		menuItems.forEach(item => {
		  let isOpen = item.getAttribute('aria-expanded');
  
		  if (isOpen == 'true') {
			// first click on parent opens submenu
			item.setAttribute('aria-expanded', 'false');
		  }
		});
	} // koniec warunków if



	}); // end window event listener
  
  }); // end DOM content loaded
  
  /* BBQ ------------------------------- */
  
  document.addEventListener("DOMContentLoaded", function(event) {
  
	  // Variables - Body targeting
	const body_html = document.querySelector('body');
	const top_menu = document.querySelector('.main-navigation');
  
	  // Variables - BBQ targeting
	  const bbq = document.querySelector('.bbq');
	  const bbq_bar = document.querySelector('.bbq-bar');
  
	  // LD - BBQ event click
	  bbq.addEventListener("click", function(){
  
	  // change btn look
	  bbq_bar.classList.toggle("active-btn");
	  body_html.classList.toggle("openedMobileMenu");
  
	  // close and open menu when clicking BBQ btn
	  top_menu.classList.toggle("mobile");
  
	  // close all opened submenus if main menu is closed
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
  
	/* Resize Cleaner ------------------------------- */
  
	window.addEventListener('resize', function(){
  
	  // LD - remove classes for mobile menu when the menu mobile was opened and the user change the size of the screen higher the 768
  
	  let win_width = this.innerWidth;
  
	  if( win_width > 768 ){
		body_html.classList.remove("openedMobileMenu");
		top_menu.classList.remove("mobile");
  
		// bbq btn
		bbq_bar.classList.remove("active-btn");
	  }
	  
	});
  
  }); // end DOM content loaded