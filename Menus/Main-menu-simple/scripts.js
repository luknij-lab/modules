/* ------------------------------- */
function prevFirstClick(){
	menuItems.forEach(item => {
		// prevent default behavior function
		const preventListener = function(e){
			let isOpen = item.getAttribute('aria-expanded');

			if(isOpen == 'false'){
				item.setAttribute('aria-expanded', 'true');
				e.preventDefault();
				e.stopPropagation();
				return false;
			}
		}
		item.addEventListener('click', preventListener, true );
	}); // koniec pętli foreach.
};

// STATIC
document.addEventListener('DOMContentLoaded', function() {

	/* Deklaracja zmiennych ------------------------------- */
	const menuItems = document.querySelectorAll('.menu-item-has-children');
	let static_window_width = window.innerWidth;

	//const menuItemslink = document.querySelectorAll('.menu-item-has-children a');
	

	/*  ------------------------------- */
	function prevFirstClick(){
		menuItems.forEach(item => {
			// prevent default behavior function
			const preventListener = function(e){
				let isOpen = item.getAttribute('aria-expanded');

				if(isOpen == 'false'){
					item.setAttribute('aria-expanded', 'true');
					e.preventDefault();
					e.stopPropagation();
					return false;
				}
			}
			item.addEventListener('click', preventListener, true );
		}); // koniec pętli foreach.
	};

	// Gdy strona zostanie wyświetlona w wersji mobilnej pierwsze kliknięcie w rodzica, spowoduje otworzenie podmenu, a drugie kliknięcie uruchomi hiperłącze rodzica.
	if( static_window_width < 768 ){
		window.addEventListener('load', prevFirstClick, {once: true} );
	  }
});
// END

// DINAMIC
window.addEventListener('resize', function(){

	const menuItems = document.querySelectorAll('.menu-item-has-children');
	let dynamic_window_width = this.innerWidth;

	console.log(dynamic_window_width);
	
	if( dynamic_window_width >= 768 ){
		//window.removeEventListener('load', prevFirstClick, {once: true});

		menuItems.forEach(item => {
			let isOpen = item.getAttribute('aria-expanded');
	
			if (isOpen == 'true') {
				// first click on parent opens submenu
				item.setAttribute('aria-expanded', 'false');
			}
		});
	}

});
// END




	// // funkcja która dynamicznie sprawdza szerokość okna
	// window.addEventListener('resize', function(){

	//   let dynamic_window_width = this.innerWidth;

	//   // jeśli szerokość ekranu zostanie zmniejszona i będzie < 768 px. Pierwsze kliknięcie w rodzica otwiera submenu, drugie uruchamia hiperłącze rodzica.
	//   if( dynamic_window_width < 768 ){
		
	// 	// nowy kod
	// 		window.addEventListener('resize', prevFirstClick);
	// 	// koniec nowy kod
	
	// 	// jeśli szerokość ekranu zostanie zwiększona, a wcześniej użytkownik w wersji mobilnej otworzy submenu, submenu zostanie zamknięte.
	// 	}else if( dynamic_window_width >= 768 ){
	
	// 		menuItems.forEach(item => {
	// 			let isOpen = item.getAttribute('aria-expanded');
		
	// 			if (isOpen == 'true') {
	// 				// first click on parent opens submenu
	// 				item.setAttribute('aria-expanded', 'false');
	// 			}
	// 		});

	// 		// Nowy kod
	// 		menuItems.forEach(item => {
	// 			// prevent default behavior function
	// 			const preventListener = function(e){
	// 				let isOpen = item.getAttribute('aria-expanded');
		
	// 				if(isOpen == 'false'){
	// 					item.setAttribute('aria-expanded', 'true');
	// 					e.preventDefault();
	// 					e.stopPropagation();
	// 					return false;
	// 				}
	// 			}
	// 			item.addEventListener('click', preventListener, true );
	// 		  }); // koniec pętli foreach.

	// 		// window.removeEventListener('resize', prevFirstClick);
	// 		// Koniec nowy kod

	// 	} // koniec warunków if
	// }); // koniec funkcji dynamicznie sprawdzającej szerokość okna przegladarki.
  
// }); // koniec DOMContentLoaded



















  
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