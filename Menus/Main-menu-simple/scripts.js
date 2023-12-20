/* Mobile submenu mechanism ------------------------------- */
document.addEventListener('DOMContentLoaded', function() {
  
	const menuItems = document.querySelectorAll('.menu-item-has-children');
	let static_window_width = window.innerWidth;
  
	if( static_window_width < 768 ){
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
	}  
  
	window.addEventListener('resize', function(){
	  
	  let dynamic_window_width = this.innerWidth;
  
	  if( dynamic_window_width < 768 ){
	  
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
	
	  } else if( static_window_width >= 768 || dynamic_window_width >= 768 ){
  
		menuItems.forEach(item => {
		  let isOpen = item.getAttribute('aria-expanded');
  
		  if (isOpen == 'true') {
			// first click on parent opens submenu
			item.setAttribute('aria-expanded', 'false');
		  }
		});
		
	  } // end if
  
	}); // end window event listener
  
	// animation when hover on desktop
	// if( static_window_width >= 768 ){
	//   const menuItems = document.querySelectorAll('.menu-item-has-children');
  
	//   // hover arrow animate
	//   menuItems.forEach(item => {
	//     item.addEventListener('mouseover', (event) => {
	//       let isOpen = item.getAttribute('aria-expanded');
  
	//       if (isOpen == 'false') {
	//         // first click on parent opens submenu
	//         item.setAttribute('aria-expanded', 'true');
	//       }
	//     });
  
	//   }); //forEach end
  
	//   menuItems.forEach(item => {
	//     item.addEventListener('mouseout', (event) => {
	//       let isOpen = item.getAttribute('aria-expanded');
  
	//       if (isOpen == 'true') {
	//         // first click on parent opens submenu
	//         item.setAttribute('aria-expanded', 'false');
	//       }
	//     });
  
	//   }); //forEach end
	// }
  
	window.addEventListener('resize', function() {
	  let dynamic_window_width = this.innerWidth;
	  
	  if( dynamic_window_width >= 768 ){
		menuItems.forEach(item => {
		  item.addEventListener('mouseover', (event) => {
			let isOpen = item.getAttribute('aria-expanded');
  
			if (isOpen == 'false') {
			  // first click on parent opens submenu
			  item.setAttribute('aria-expanded', 'true');
			}
		  });
  
		}); //forEach end
  
		menuItems.forEach(item => {
		  item.addEventListener('mouseout', (event) => {
			let isOpen = item.getAttribute('aria-expanded');
  
			if (isOpen == 'true') {
			  // first click on parent opens submenu
			  item.setAttribute('aria-expanded', 'false');
			}
		  });
  
		}); //forEach end
	  }
	  
	});
  
	/* 
	  window.addEventListener('resize', function() {
	  let dynamic_window_width = this.innerWidth;
  
	  // Mouseover function
	  function handleMouseOver(){
		menuItems.forEach(item => {
		  let isOpen = item.getAttribute('aria-expanded');
  
		  if (isOpen == 'false') {
			// first click on parent opens submenu
			item.setAttribute('aria-expanded', 'true');
		  }
		});
	  }
  
	  // Mouseout function
	  function handleMouseOut(){
		menuItems.forEach(item => {
		  let isOpen = item.getAttribute('aria-expanded');
  
		  if (isOpen == 'true') {
			// first click on parent opens submenu
			item.setAttribute('aria-expanded', 'false');
		  }
		});
	  }
  
	  // Lunch hover animation event
	  if( dynamic_window_width >= 768 ){
		menuItems.forEach(item => {
		  item.addEventListener('mouseover', handleMouseOver)
		});
  
		menuItems.forEach(item => {
		  this.addEventListener('mouseout', handleMouseOut)
		});
	  }
	  
	});
	*/
  
  }); // end DOM content loaded
  
  /* BBQ ------------------------------- */
  
  document.addEventListener("DOMContentLoaded", function(event) {
  
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
  
	/* Resize Cleaner ------------------------------- */
  
	window.addEventListener('resize', function(){
  
	  // LD - remove classes for mobile menu when the menu mobile was opened and the user change the size of the screen higher the 768
  
	  let win_width = this.innerWidth;
  
	  if( win_width > 768 ){
		body_html.classList.remove("openedMobileMenu");
		top_menu.classList.remove("mobile");
  
		// bbq btn
		bbq_bar.classList.remove("active-btn");
	  }
	  
	});
  
  }); // end DOM content loaded
  