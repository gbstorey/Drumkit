for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", 
        function () {
            var elementClass = this.classList[0]
            var sound = new Audio("sounds/" + elementClass + ".mp3")
            sound.play()
    });
    document.addEventListener("keydown", 
        function(event) {
            var elementClass = document.querySelector("." + event.key).classList[0]
            var sound = new Audio("sounds/" + elementClass + ".mp3")
            sound.play()
    });
}


// for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function() {
//         var buttonName = this.classList[0];
//         drumType(buttonName);
//         });
        
//     document.addEventListener("keydown", function(event) {
//         var buttonName = document.querySelector("." + event.key).classList[0];
//         console.log(event.key);
//         drumType(buttonName);
//         })
// }


// function drumType(buttonName) {
//     switch (buttonName) {
//         case "crash":
//             var crash = new Audio("sounds/crash.mp3");
//             crash.play();
//             break;
//         case "kick-bass":
//             var kickBass = new Audio("sounds/kick-bass.mp3");
//             kickBass.play();
//             break;
//         case "snare":
//             var snare = new Audio("sounds/snare.mp3");
//             snare.play();
//             break;
//         case "tom-1":
//             var tom1 = new Audio("sounds/tom-1.mp3");
//             tom1.play();
//             break;
//         case "tom-2":
//             var tom2 = new Audio("sounds/tom-2.mp3");
//             tom2.play();
//             break;
//         case "tom-3":
//             var tom2 = new Audio("sounds/tom-3.mp3");
//             tom3.play();
//             break;
//         case "tom-4":
//             var tom2 = new Audio("sounds/tom-4.mp3");
//             tom4.play();
//             break;
//         default:
//             console.log(buttonName)
//             break;
//     }


// }