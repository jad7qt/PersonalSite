
function opentab(tabname){
    // hide previous tab and display new tab
    var tablinks = document.getElementsByClassName("tab-links");
    var tabcontents = document.getElementsByClassName("tab-contents");
    for(tablinks of tablinks){
        tablinks.classList.remove("active-link");
    }
    for(tabcontents of tabcontents){
        tabcontents.classList.remove("active-content");
    }
    document.getElementById(`${tabname}-title`).classList.add("active-link");
    document.getElementById(tabname).classList.add("active-content");
}

addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY>0)
});