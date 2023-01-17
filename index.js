var btnlist = document.querySelectorAll(".drum");

for (var i=0; i<btnlist.length; i++){
  btnlist[i].addEventListener("click", function(){
  var item = this.innerHTML;
  checkitemSelect(item);
  animation(item);

})}

document.addEventListener("keypress", function(event){

    checkitemSelect(event.key);
    animation(event.key);
  })




function checkitemSelect(key){
  switch (key) {
    case "w":
    var audio = new Audio("sounds/crash.mp3")
    audio.play()
      break;

    case "a":
    var audio = new Audio("sounds/kick-bass.mp3")
    audio.play()
      break;

    case "s":
    var audio = new Audio("sounds/snare.mp3")
    audio.play()
      break;

    case "d":
    var audio = new Audio("sounds/tom-1.mp3")
    audio.play()
      break;

    case "j":
    var audio = new Audio("sounds/tom-2.mp3")
    audio.play()
      break;

    case "k":
    var audio = new Audio("sounds/tom-3.mp3")
    audio.play()
      break;

    case "l":
    var audio = new Audio("sounds/tom-4.mp3")
    audio.play()
      break;
    default:

  }
}

function animation(currentKey){
  var element = document.querySelector("."+currentKey);
  element.classList.add("pressed");
  setTimeout(function(){element.classList.remove("pressed");}, 100);

}
