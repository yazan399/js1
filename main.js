var changefont = document.querySelector("div");
var changebutton = document.querySelector(".ch_size");

var big_button=document.querySelector(".big") ;
var small_button=document.querySelector(".sml") ;
function ch(){
    changefont.classList.toggle("font");
   
}

changebutton.onclick=ch ;
