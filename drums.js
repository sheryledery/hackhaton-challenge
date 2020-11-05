


var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


//banner with time before starting the game
let banner = document.querySelector(".alert")
console.log(banner)

var countdown = document.getElementById("countdown");
var countItDown = function() {
 var currentTime = parseFloat(countdown.textContent);
  if (currentTime > 0) {
     countdown.textContent = currentTime - 1;   
  } else {
      window.clearInterval(timer);
      banner.style.display= "none";

  }
};
var timer = window.setInterval(countItDown, 1000);
var close = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < close.length; i++) {
close[i].onclick = function(){
  var div = this.parentElement;
  div.style.opacity = "0";
  setTimeout(function(){ div.style.display = "none"; }, 600);
}
}

// make the sounds plays when we click on it

function play(event) {
    console.log(event)
    let name = event.target.className
    var audio = document.getElementById(name);
    if (audio.paused) {
        audio.play();
    }else{
        audio.pause();
        audio.currentTime = 0
    }
  }
  var audioTen = document.querySelector('#audio10');
  var audioOne = document.querySelector("#audio1");
  var audioTwo = document.querySelector('#audio2');
  var audioThree = document.querySelector('#audio3');
  var audioFour = document.querySelector('#audio4');
  var audioFive = document.querySelector('#audio5');
  var audioSix = document.querySelector('#audio6');
  var audioSeven = document.querySelector('#audio7');
  var audioEight = document.querySelector('#audio2');
  
  var allAudios = document.querySelectorAll('audio');
  
  function stopAllAudio(){
      allAudios.forEach(function(audio){
          audio.pause();
      });
  }
  
  document.querySelector('#play-10').addEventListener('click', function(){
      stopAllAudio();
      audioTen.play();
  })
  document.querySelector('#play-1').addEventListener('click', function(){
      stopAllAudio();
      audioOne.play();
  })
  document.querySelector('#play-2').addEventListener('click', function(){
    stopAllAudio();
    audioTwo.play();
})
document.querySelector('#play-3').addEventListener('click', function(){
    stopAllAudio();
    audioThree.play();
})
document.querySelector('#play-4').addEventListener('click', function(){
    stopAllAudio();
    audioFour.play();
})
document.querySelector('#play-5').addEventListener('click', function(){
    stopAllAudio();
    audioFive.play();
})
document.querySelector('#play-6').addEventListener('click', function(){
    stopAllAudio();
    audioSix.play();
})
document.querySelector('#play-7').addEventListener('click', function(){
    stopAllAudio();
    audioSeven.play();
})
document.querySelector('#play-8').addEventListener('click', function(){
    stopAllAudio();
    audioEight.play();
})


  // Wrap every letter in a span
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml6 .letter',
    translateY: ["1.1em", 0],
    translateZ: 0,
    duration: 750,
    delay: (el, i) => 50 * i
  }).add({
    targets: '.ml6',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

