// Last Updated Beta 1.0.1 build 0119-b
function goToURL(val){
    window.open(val, "_self");
}

function isPlaying(audelem) { return !audelem.paused; }


$(document).ready(function(){
  $("#searchButton").click(function() {
    var val1 = $("#searchInfo").val();
    console.log(val1);
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