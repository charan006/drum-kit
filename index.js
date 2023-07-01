
function playAudio(buttonInnertext){
    switch (buttonInnertext) {
        case "w":
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case "d":
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;      
        case "j":
            var kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;
        case "k":
            var snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;
        case "l":
            var crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;    
        default:
            console.log(buttonInnertext + " is out of scope")
            break;
    }
}

for(i=0; i < document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function (){
        var buttonInnertext = this.innerText;
        console.log(buttonInnertext) + " clicked";   
        playAudio(buttonInnertext);
        buttonAnimation(buttonInnertext);
    });
}

document.addEventListener("keypress", function(event){
    var buttonInnertext = event.key;
        console.log(buttonInnertext) + " clicked";   
        playAudio(buttonInnertext);
        buttonAnimation(buttonInnertext);
})



function buttonAnimation(currentKey) {
    keyActive=document.querySelector("."+currentKey);
    keyActive.classList.add("pressed");

    setTimeout(function() {
        keyActive.classList.remove("pressed");
      }, 50);
      console.log("Animation Completed");
}