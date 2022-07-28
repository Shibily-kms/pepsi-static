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

