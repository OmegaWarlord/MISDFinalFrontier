// Last updated Pre Alpha 2.1.0 build 0030-d
function $(x) {return document.getElementById(x);} 
function c(x) {return document.getElementsByClassName(x);}

function goToURL(val){
    window.open(val, "_self");
}

window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    $("headerTitle").style.fontSize = "20px";
    $("frontierLogo").style.width = "2%";
  } else {
    $("headerTitle").style.fontSize = "60px";
    $("frontierLogo").style.width = "10%";
  }
}

