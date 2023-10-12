document.addEventListener("DOMContentLoaded", function(event) {

/*
Window width ------------------------------- */

const widthOutput = document.querySelector("#width");

function reportWindowSize() {
	widthOutput.textContent = window.innerWidth;

}
window.onresize = reportWindowSize;

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
