
snowFall.snow(document.getElementsByClassName("snow"),{
    round:true,
    minSize:1,
    maxSize:3,
    shadow:true,
    flakeCount:150,
    flakeColor:"#c7dfea"
});


var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 300000);
}

var source = "b.mp3"
var audio = document.createElement("audio");
//
audio.autoplay = true;
//
audio.load()
audio.addEventListener("load", function() { 
    audio.play(); 
}, true);
audio.src = source;