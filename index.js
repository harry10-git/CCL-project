
var numOfDrums = document.querySelectorAll(".drum").length;


// Play sounds by clicking

for(var i=0; i<numOfDrums; i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",function() 
{
    var letter= this.innerHTML;
    makesound(letter);
    buttonAnimation(letter);
});
}


// Play sounds by key presses

document.addEventListener("keydown",function(e)
{
    var letter = e.key;
    makesound(letter);
    buttonAnimation(letter);

});


// make sound function

function makesound(letter)
{
    switch (letter) {
        case "w":
            var audio = new Audio('sounds/crash.mp3');
            audio.play(); 
            break;

        case "a":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play(); 
            break;

      case "s":
             var audio = new Audio('sounds/snare.mp3');
              audio.play(); 
               break;   

         case "d":
                var audio = new Audio('sounds/tom-1.mp3');
                audio.play(); 
                break;

        case "j":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play(); 
            break;

        case "k":
                var audio = new Audio('sounds/tom-3.mp3');
                audio.play(); 
                break;

        case "l":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play(); 
            break;

        default: console(this.innerHTML);
            
    }
}


function buttonAnimation(letter)
{
    var activeButton = document.querySelector("."+letter);
    activeButton.classList.add("pressed");

    // removing pressed class after delay
    setTimeout(function()
    {
        activeButton.classList.remove("pressed");
    },100);
}