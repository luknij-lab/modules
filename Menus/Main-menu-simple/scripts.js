document.addEventListener("DOMContentLoaded", function(event) {

/*
Window width checker -------------- */

const widthOutput = document.querySelector("#width");

function checkWindowWidth(xyz){
	//widthOutput.textContent = window.innerWidth;
	
	browser_width = window.innerWidth;

	return xyz;
}

window.onresize = checkWindowWidth;

/*
First click menu item prevent default behavior ------------------------------- */
let sub_menu_block_default = document.querySelectorAll("#main-menu .child");

console.log(sub_menu_block_default);

if( window.onresize <= 821 ){
	
}

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
