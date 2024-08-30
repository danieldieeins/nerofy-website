function initMenu() {
    const menu = document.getElementById("menu");
    if(innerWidth>1000) {
        if(!menu.classList.contains("active")) {
            menu.classList.add("active");
        }
    } else {
        if(menu.classList.contains("active")) {
            menu.classList.remove("active");
        }
    }
}

addEventListener("DOMContentLoaded", () => {
    initMenu();
});

addEventListener('resize', function() {
    initMenu();
});

addEventListener('contextmenu',function(e){
    e.preventDefault();
});

addEventListener('dragstart', function(e){
    e.preventDefault();
});