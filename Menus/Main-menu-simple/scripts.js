document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
      let isOpen = false;

      item.addEventListener('click', function () {
        if (!isOpen) {
          // Open submenu on the first click
          const submenu = this.querySelector('.submenu');
          if (submenu) {
            submenu.style.display = 'block';
            isOpen = true;
          }
        } else {
          // Navigate to the specified page on the second click
          const page = this.getAttribute('data-page');
          if (page) {
            window.location.href = `${page}.html`; // Change this to your actual page URL
          }
        }
      });
    });
  });

document.addEventListener("DOMContentLoaded", function(event) {

/*
Window width checker -------------- */

// let parent_item = document.querySelectorAll("#menu-1 .menu-item-has-children");

// parent_item.forEach( (element) => addEventListener("click", (e) => {
	
// 	// let click_aria_change = parent_item.getAttribute('li[aria-expanded]');
// 	// console.log(click_aria_change);

// 	// if( click_aria_change.getAttribute(false') ){
// 	// 	e.preventDefault();
// 	// }
// }) );

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
