document.addEventListener('DOMContentLoaded', function() {
  
  const menuItems = document.querySelectorAll('.menu-item-has-children');
  let static_window_width = window.innerWidth;

  let width_output;

  function check_window_width(){
    width_output = window.innerWidth;
  }
  window.onresize = check_window_width;

  console.log(width_output);

  if( static_window_width < 768 ){ /*|| dynamic_window_width < 768 */
    
    // prevent parent a tag default behavier
    menuItems.forEach(item => {
      
      let subNav = document.querySelector('.menu-item .submenu');
      const menuLink = document.querySelector('.menu-item a');      
      
      item.addEventListener('click', (e) => {

        let isOpen = item.getAttribute('aria-expanded');
        
        if (isOpen == 'false') {

          // first click on parent opens submenu
          e.preventDefault();
          item.setAttribute('aria-expanded', 'true');
        
        }

      });

    }); // end foreach

  } // end if

  window.addEventListener('resize', (event) => {
  // kod w trakcie pisania ***
    menuItems.forEach(item => {

      let isOpen = item.getAttribute('aria-expanded');

      if( isOpen == 'true' && dynamic_window_width > 767 ){
        e.default();
        item.setAttribute('aria-expanded', 'false');
      }
    });
  });  
  
  // kod w trakcie pisania ***

}); // end DOMContentLoaded



document.addEventListener("DOMContentLoaded", function(event) {

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
    body_html.classList.toggle("openedMobileMenu");

    // close and open menu when clicking BBQ btn
    top_menu.classList.toggle("mobile");

    // close all opened submenus if main menu is closed
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

  // remove .mobile if window is heigher the 768
  // window.addEventListener("resize", (event) => {
  //   let dynamic_window_width = window.onresize;
    
  //   console.log(dynamic_window_width);
    

  //   if ( dynamic_window_width >= 768){
  //     top_menu.classList.remove("mobile");
    
  //   }
  // });

});
