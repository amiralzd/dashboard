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

    var y = document.getElementsByClassName("svg")
    for (let i = 0; i < y.length; i++) {
        y[i].classList.toggle("hidden")
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

function myFunction() {
    let element = document.body;
    element.classList.toggle("dark");
}

function ProfileMenuDisplay(){
    var menu = document.getElementById("userDropdown");
    menu.classList.toggle("profiledisplay");
}

function sidebardropdown1(){
    var x = document.getElementById("sidebar-dropdown1");
    x.classList.toggle("displayshowsidebar");
}

function sidebardropdown2(){
    var x = document.getElementById("sidebar-dropdown2");
    x.classList.toggle("displayshowsidebar");
}

function sidebardropdown3(){
    var x = document.getElementById("sidebar-dropdown3");
    x.classList.toggle("displayshowsidebar");
}

function sidebardropdown4(){
    var x = document.getElementById("sidebar-dropdown4");
    x.classList.toggle("displayshowsidebar");
}



function sidebarhover(){
    var x= document.getElementById("sidebar-container-hover");
    x.classList.toggle("hoverrsidebar")
}