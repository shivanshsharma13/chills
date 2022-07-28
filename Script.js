var myAudio = new Audio('b.mp3')

function load(){
  myAudio.volume = 0.05
  myAudio.play();
  if (typeof myAudio.loop == 'boolean')
  {
      myAudio.loop = true;
  }
  else
  {
      myAudio.addEventListener('ended', function() {
          this.currentTime = 0;
          this.play();
      }, false);
  }
}

document.querySelector('.audioWaves').addEventListener('click', (e)=>{
  if(!myAudio.paused){
      document.querySelectorAll('.loading .x').forEach(element => {
              element.style.animationPlayState = 'paused'
      });
      var vol = 0.05
      var setup = setInterval(() => {
          if (vol >= 0) {
              myAudio.volume = vol
              vol -= 0.01
          }
          else{
              myAudio.pause()
              clearInterval(setup)
          }
      }, 100);
  }
  else{
      document.querySelectorAll('.loading .x').forEach(element => {
              element.style.animationPlayState = 'running'
      });
      var vol = 0.0
      myAudio.play()
      var setup = setInterval(() => {
          if (vol <= 0.08) {
              myAudio.volume = vol
              vol += 0.01
          }
          else{
              clearInterval(setup)
          }
      }, 100);
  }

})

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

// window.onload = function() {
//     document.getElementById("audioplayer").play();
// }





// var source = "b.mp3"
// var audio = document.createElement("audio");
// //
// audio.autoplay = true;
// //
// audio.load()
// audio.addEventListener("load", function() { 
//     audio.play(); 
// }, true);
// audio.src = source;