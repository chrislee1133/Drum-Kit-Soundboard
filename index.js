//alert("Sandwich");

/* document.querySelectorAll("button")[0].addEventListener("click", handleClick); //passess function handleClick as an input
document.querySelectorAll("button")[1].addEventListener("click", handleClick);
document.querySelectorAll("button")[2].addEventListener("click", handleClick);
document.querySelectorAll("button")[3].addEventListener("click", handleClick);
document.querySelectorAll("button")[4].addEventListener("click", handleClick);
document.querySelectorAll("button")[5].addEventListener("click", handleClick);
document.querySelectorAll("button")[6].addEventListener("click", handleClick); */ //runs the DOM manipulation on each and every button manually


/////////Detects button press
var numberOfDrumButtons = document.querySelectorAll(".drum").length; //sets variable to the number of drum buttons with the class drum for loop iteration

for (var i = 0; i < numberOfDrumButtons; i++) {     //loop to iterate through the number of drums to pass eventListener for each drum
document.querySelectorAll("button")[i].addEventListener("click", function () {

    //console.log(this.innerHTML);                   //identity of whichever button object that is pressed for the eventListener
    this.style.color = "white";


    var buttonInnerHTML = this.innerHTML; //if button is pressed it sends that information to makeSound to process the corresponding sound

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML); //calls button animation to show animation when button is clicked


    //switch statement takes code down different track depending on the corresponding variable
  /*  switch (buttonInnerHTML) {
      case "w":  //does this depending on the case, i.e. what was pressed
          var tom1 = new Audio("sounds/tom-1.mp3"); //creates new audio object to play audio on event
          tom1.play();
        break; //tells code to exit the switch statement

      case "a":
          var tom2 = new Audio("sounds/tom-2.mp3"); //creates new audio object to play audio on event
          tom2.play();
        break;

      case "s":
          var tom3 = new Audio("sounds/tom-3.mp3"); //creates new audio object to play audio on event
          tom3.play();
        break;

      case "d":
          var tom4 = new Audio("sounds/tom-4.mp3"); //creates new audio object to play audio on event
          tom4.play();
        break;

      case "j":
          var snare = new Audio("sounds/snare.mp3"); //creates new audio object to play audio on event
          snare.play();
        break;

      case "k":
          var crash = new Audio("sounds/crash.mp3"); //creates new audio object to play audio on event
          crash.play();
        break;

      case "l":
          var kickbass = new Audio("sounds/kick-bass.mp3"); //creates new audio object to play audio on event
          kickbass.play();
      break;


      default: console.log();     ///similar to else statement, covers all cases not covered by the switch
      */

/*  var audio = new Audio("sounds/crash.mp3"); //creates new audio object to play audio on event
  audio.play(); */

  });
 /* function handleClick() {
  alert("I got clicked!");
} */
}

////////////////Detects keyboard press
document.addEventListener("keydown", keyPress);      //entire page listen for keyboard streoks

function keyPress(event) {
  makeSound(event.key); //if key is pressed then event property of th key is sent
}

document.addEventListener("keydown", keyAnimate); //entire page listen for keyboard strokes
function keyAnimate(event) {
  buttonAnimation(event.key); //if key is pressed then event property of key is sent and animation for pressed key begins
}

function makeSound(key) {
  switch (key) {
     case "w":  //does this depending on the case, i.e. what was pressed
         var tom1 = new Audio("sounds/tom-1.mp3"); //creates new audio object to play audio on event
         tom1.play();
       break; //tells code to exit the switch statement

     case "a":
         var tom2 = new Audio("sounds/tom-2.mp3"); //creates new audio object to play audio on event
         tom2.play();
       break;

     case "s":
         var tom3 = new Audio("sounds/tom-3.mp3"); //creates new audio object to play audio on event
         tom3.play();
       break;

     case "d":
         var tom4 = new Audio("sounds/tom-4.mp3"); //creates new audio object to play audio on event
         tom4.play();
       break;

     case "j":
         var snare = new Audio("sounds/snare.mp3"); //creates new audio object to play audio on event
         snare.play();
       break;

     case "k":
         var crash = new Audio("sounds/crash.mp3"); //creates new audio object to play audio on event
         crash.play();
       break;

     case "l":
         var kickbass = new Audio("sounds/kick-bass.mp3"); //creates new audio object to play audio on event
         kickbass.play();
     break;


     default: console.log();     ///similar to else statement, covers all cases not covered by the switch
      break;
  }
}

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey); //query selects current key and concatenates a . on it to accurately query the required class
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed"); //removes the pressed class from the buttonAnimation after a time delay of 100 mllliseconds to give animation
  }, 100);

}
