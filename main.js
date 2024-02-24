let links_icon = document.getElementById("links_icon");
let links_ul  = document.getElementById("links_list")
links_icon.onclick = function () {
    links_ul.style.setProperty("display", "block");
   };
let hide = document.getElementById("hide");   
hide.onclick = function () {
    links_ul.style.setProperty("display", "none");
   };
   
