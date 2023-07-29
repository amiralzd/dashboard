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

    // var sidebarfooter = document.getElementsByClassName("sidebar-footer");
    // for (let i = 0; i < sidebarfooter.length; i++) {
    //     sidebarfooter[i].classList.toggle ("sidebarborderr")
    // }
    var sidebarfooter = document.getElementById("sidebar-footer");
    sidebarfooter.classList.toggle("sidebarborderr")
    

    var sidebarwidth = document.getElementsByClassName("sidebar-width");
    for (let i = 0; i < sidebarwidth.length; i++) {
        sidebarwidth[i].classList.toggle ("w-[40%]")
    }

    var sidebarflex = document.getElementsByClassName("stylell");
    for (let i = 0; i < sidebarflex.length; i++) {
        sidebarflex[i].classList.toggle ("stylel")
    }
}




function handleMenu2(){
    var sidebardisplay = document.getElementById("sidebar-card");
    sidebardisplay.classList.toggle ("sidebarShow");
}



function appbox(){
    var x = document.getElementById("app-box");
    x.classList.toggle("appboxdisplay");
}


function Notificationbox(){
    var display = document.getElementById("Notification-box");
    display.classList.toggle("Notificationdisplay");
}