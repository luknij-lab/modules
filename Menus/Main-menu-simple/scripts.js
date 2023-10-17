document.addEventListener("DOMContentLoaded", function(event) {

/*
Window width checker -------------- */

let parentMenu = document.querySelectorAll("ul#menu-1 li.child > a");
let subMenu = document.querySelectorAll("li.child ul.sub-menu");

console.log(parentMenu); // pomoce
console.log(subMenu); // pomoce



window.addEventListener("resize", function(){
	if(window.innerWidth < 768 ){

		for(let i = 0; i < parentMenu.length; i++){
			let click_count = 0;

			parentMenu[i].addEventListener("click", (e) => {

				click_count += 1;
				console.log(click_count);

				if( click_count %2 == 0 ){
					console.log('otworzenie rodzica');
					e.default();
					
				  }else{
					e.preventDefault();
				  }
			});
		} // end for
	} // end if
});
	


/*
BBQ ------------------------------- */

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

    // close and open menu when clicking BBQ btn
    top_menu.classList.toggle("mobile");
	});

});
