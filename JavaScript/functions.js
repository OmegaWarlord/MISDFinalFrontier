// Last Updated Pre-Release 1.0.0 build 0219
function goToURL(val){
    window.open(val, "_self");
}

$(document).scroll(function() {
  if($(document).scrollTop() > 50 || $('html').scrollTop() > 50) {
    $("#headerTitle").css("fontSize", "20px");
    $("#frontierLogo").css("width", "2%");
    $("#logo").css("width", "100px");
  } else {
    $("#headerTitle").css("fontSize", "60px");
    $("#frontierLogo").css("width", "5%");
    $("#logo").css("width", "297px");
  }
});