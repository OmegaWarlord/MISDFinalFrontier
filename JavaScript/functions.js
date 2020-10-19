// Last Updated Beta 1.0.0 build 0119
function goToURL(val){
    window.open(val, "_self");
}

function isPlaying(audelem) { return !audelem.paused; }


$(document).ready(function(){
  $("#searchButton").click(function() {
    var val1 = $("#searchInfo").val();
    console.log(val1);
  })
  var audio = new Audio('otherfiles/audio/thing.mp3');
  $("button").click(function() {
    var int = Math.random(1000000);
    if(int == 1){
      if(isPlaying(audio))
        audio.pause();
      else audio.play();
    }
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