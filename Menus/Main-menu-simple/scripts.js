// Obsługa statyczna
document.addEventListener('DOMContentLoaded', function() {

	/* Deklaracja zmiennych ------------------------------- */
	let static_window_width = window.innerWidth;
	const menuItems = document.querySelectorAll('.menu-item-has-children');

	/* Zapobiega domyślemu zdarzeniu kliknięcia w hiperłącze przycisku menu ------------------------------- */
	function prevFirstClick(){
		menuItems.forEach(item => {
			const preventListener = function(event){
				let isOpen = item.getAttribute('aria-expanded');

				if(isOpen == 'false'){
					item.setAttribute('aria-expanded', 'true');

					if(event.preventDefault){
						event.preventDefault();
						event.stopPropagation();
					}else{
						event.returnValue = false;
					}
				}
			}
			item.addEventListener('click', preventListener, false );
		});
	};

	// Gdy strona zostanie wyświetlona w wersji mobilnej pierwsze kliknięcie w rodzica, spowoduje otworzenie podmenu, a drugie kliknięcie uruchomi hiperłącze rodzica.
	if( static_window_width < 768 ){
		window.addEventListener('DOMContentLoaded', prevFirstClick );
	}
	
});
// koniec obsługi statycznej

// Obsługa dynamiczna
window.addEventListener('resize', function(){

	const menuItems = document.querySelectorAll('.menu-item-has-children');
	let dynamic_window_width = this.innerWidth;
	console.log(dynamic_window_width);

	/* Zapobiega domyślemu zdarzeniu kliknięcia w hiperłącze przycisku menu ------------------------------- */
	function prevFirstClick(){
		menuItems.forEach(item => {
			// prevent default behavior function
			const preventListener = function(event){
				let isOpen = item.getAttribute('aria-expanded');

				if(isOpen == 'false'){
					item.setAttribute('aria-expanded', 'true');

					if(event.preventDefault){
						event.preventDefault();
						event.stopPropagation();
					}else{
						event.returnValue = false;
					}
				}
			}
			item.addEventListener('click', preventListener, true );
		}); // koniec pętli foreach.
	};
	
	if( dynamic_window_width < 768 ){
		window.addEventListener('click', prevFirstClick );
	}else{
		window.removeEventListener('click', prevFirstClick );
		
		menuItems.forEach(item => {
			let isOpen = item.getAttribute('aria-expanded');
	
			if (isOpen == 'true') {
				item.setAttribute('aria-expanded', 'false');
			}
		});
		
	}

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