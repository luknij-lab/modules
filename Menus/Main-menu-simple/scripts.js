document.addEventListener("DOMContentLoaded", function(event) {

/*
BBQ ------------------------------- */

	// LD - Body targeting
  	const body_html = document.querySelector('body');

	// LD - BBQ targeting
	const bbq = document.querySelector('.bbq');
	const bbq_bar = document.querySelector('.bbq-bar');

	// LD - BBQ event click
	bbq.addEventListener("click", function(){
		bbq_bar.classList.toggle("active-btn")
	});

});
