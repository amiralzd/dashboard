function handleMenu(){
    var sidebarcontainer = document.getElementById("sidebar-container");
    sidebarcontainer.classList.toggle("w-[65px]");

    var sidebarh3 = document.getElementsByClassName("sidebar-h3")
    for (let i = 0; i < sidebarh3.length; i++) {
        sidebarh3[i].classList.toggle("hidden")
    }

    var sidebarsvg = document.getElementsByClassName("sidebar-svg")
    for (let i = 0; i < sidebarsvg.length; i++) {
        sidebarsvg[i].classList.toggle ("w-auto")
    }


    var sidebarborder = document.getElementsByClassName("sidebar-border");
    for (let i = 0; i < sidebarborder.length; i++) {
        sidebarborder[i].classList.toggle ("w-[45px]")
    }

    var sidebarfooter = document.getElementsByClassName("sidebar-footer");
    for (let i = 0; i < sidebarfooter.length; i++) {
        sidebarfooter[i].classList.toggle ("sidebarborderr")
        
    }
}
