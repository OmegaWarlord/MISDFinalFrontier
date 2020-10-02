// Last Updated Alpha 1.0.0 build 0102
function goToURL(val){
    window.open(val, "_self");
}

$(document).ready(function(){
  $("#searchButton").click(function() {
    var val1 = $("#searchInfo").val();
    alert(val1);
  })
});

$(document).scroll(function() {
  
  if ($(document).scrollTop() > 50 ||  $('html').scrollTop() > 50) {
    $("#headerTitle").css("fontSize", "20px");
    $("#frontierLogo").css("width", "2%");
  } else {
    $("#headerTitle").css("fontSize", "60px");
    $("#frontierLogo").css("width", "10%");
  }
});