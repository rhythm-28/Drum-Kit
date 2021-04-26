
// waits for mouse click event on the buttons
var drumButtons = document.querySelectorAll(".drum");

for(var i=0; i<drumButtons.length; i++)
drumButtons[i].addEventListener("click",function ()
{
    var buttonText = this.textContent;
    makeSound(buttonText);
    doAnimation(buttonText);
});

// waits for keyboard presses
document.addEventListener("keydown",function(event) {
  makeSound(event.key);
  doAnimation(event.key);
})


function makeSound(character)
{
  switch (character) {

    case "w":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
      break;

    case "a":
    var kickBass = new Audio('sounds/kick-bass.mp3');
    kickBass.play();
      break;

    case "s":
    var snare = new Audio('sounds/snare.mp3');
    snare.play();
     break;

    case "d":
    var tom1 = new Audio('sounds/tom-1.mp3');
    tom1.play();
      break;

    case "j":
    var tom2 = new Audio('sounds/tom-2.mp3');
    tom2.play();
     break;

    case "k":
    var tom3 = new Audio('sounds/tom-3.mp3');
    tom3.play();
      break;

    case "l":
    var tom4 = new Audio('sounds/tom-4.mp3');
    tom4.play();
     break;

    default:
      alert("wrong key pressed");
  }
}

function doAnimation(character)
{
  // finding the object

  var className = "." + character;
  var activeButton = document.querySelector(className);
  activeButton.classList.add("pressed");
  setTimeout(function() { activeButton.classList.remove("pressed"); },100);

}
