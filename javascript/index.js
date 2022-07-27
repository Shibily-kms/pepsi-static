function showMenu() {

    let item = document.getElementById('nav-item');
    let icon = document.getElementById('menu-icon');
    let hide = document.getElementById('menu-hide-icon');
    
        item.style.display = "flex";
        icon.style.display = 'none';
        hide.style.display = 'block';
   
    

}

function hideMenu() {
    let item = document.getElementById('nav-item');
    let icon = document.getElementById('menu-icon');
    let hide = document.getElementById('menu-hide-icon');
   
        item.style.display = "none";
        icon.style.display = 'block';
        hide.style.display = 'none';

   

}


// function reveal() {
//     var reveals = document.querySelectorAll(".reveal");
  
//     for (var i = 0; i < reveals.length; i++) {
//       var windowHeight = window.innerHeight;
//       var elementTop = reveals[i].getBoundingClientRect().top;
//       var elementVisible = 150;
  
//       if (elementTop < windowHeight - elementVisible) {
//         reveals[i].classList.add("active");
//       } else {
//         reveals[i].classList.remove("active");
//       }
//     }
//   }
  
//   window.addEventListener("scroll", reveal);

// Change section four backgorund image
