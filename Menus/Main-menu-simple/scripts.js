document.addEventListener('DOMContentLoaded', function () {
    const menuItems = document.querySelectorAll('.menu-item');


    menuItems.forEach(item => {
      
      let subNav = document.querySelector('.menu-item .submenu');

      const menuLink = document.querySelector('.menu-item a');      
      
      item.addEventListener('click', (e) => {
        let isOpen = item.getAttribute('aria-expanded');
        
        if (isOpen == 'false') {
          // Otwórz menu po pierwszym kliknieciu

          e.preventDefault();
          item.setAttribute('aria-expanded', 'true');
          subNav.style.display = "block";
          
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
