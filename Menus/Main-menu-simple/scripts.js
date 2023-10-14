document.addEventListener("DOMContentLoaded", function(event) {

/*
Window width checker -------------- */

let widthOutput = document.querySelectorAll("#menu-1 .child");

window.addEventListener("resize", function(){
	if(window.innerWidth < 768){
		
		for(let i = 0; i < widthOutput.length; i++){
			let click_count = 0;

			widthOutput[i].addEventListener("click", (e) => {

				click_count += 1;

				if( click_count %2 == 0 ){
					e.default();
				  }else if( click_count >= 3){
					click_count = 1;
					e.preventDefault();
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
