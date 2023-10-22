document.addEventListener("DOMContentLoaded", function(event) {

/*
Window width checker -------------- */

let parentMenu = document.querySelectorAll("ul#menu-1 li.child > a");
let subMenu = document.querySelectorAll(".sub-menu");

console.log(parentMenu); // pomoce

for(let i = 0; i < parentMenu.length; ++i){

	parentMenu[i].addEventListener("click", (e) => {
		e.preventDefault();
		
		for(let i = 0; i < subMenu.length; ++i){
			subMenu[i].classList.toggle('sub-menu');
		}
	});
}
	
// } // end for

// window.addEventListener("resize", function(){
// 	if(window.innerWidth < 768 ){

		
// 	} // end if
// });
	


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
