var divlenght = document.querySelectorAll('.song').length;
console.log(divlenght);
for (var i = 0; i < divlenght; i++) {
    var demo = document.querySelectorAll('.song')[i].addEventListener('click', playsong);
    var demo1 = document.querySelectorAll('.song')[i].addEventListener('dblclick', pausesong);

}
var song1 = new Audio();
song1.src = "01 - ONS - Do Peg Maar [DJMaza.Info].mp3";
var song2 = new Audio();
song2.src = "01 - Tere Sang Yaara - Rustom [DJMaza.Cool].mp3";
var song3 = new Audio();
song3.src = "02 - ONS - Ijazat [DJMaza.Info].mp3";
var song4 = new Audio();
song4.src = "03 - ONS - Ishq Da Sutta [DJMaza.Info].mp3";
var song5 = new Audio();
song5.src = "03 - ONS - Ishq Da Sutta [DJMaza.Info].mp3";
var song6 = new Audio();
song6.src = "03 - Tay Hai - Rustom [DJMaza.Cool].mp3";
var song7 = new Audio();
song7.src = "06 - Jab Tum Hote Ho - Rustom [DJMaza.Cool].mp3";
var song8 = new Audio();
song8.src = "05 - Dhal Jaun Main - Rustom [DJMaza.Cool].mp3";
var song9 = new Audio();
song9.src = "04 - ONS - Ki Kara [DJMaza.Info].mp3";



function playsong() {
    var songId = this.innerHTML;

    switch (songId) {
        case "a":
            song1.play();
            break;
        case "b":
            song2.play();
            break;

        case "c":
            song3.play();
            break;
        case "d":
            song4.play();
            break;
        case "e":
            song5.play();
            break;
        case "f":
            song6.play();
            break;
        case "g":
            song7.play();
            break;
        case "h":
            song8.play();
            break;
        case "i":
            song9.play();
            break;
        default:
            console.log("hello");
            break;

    }

}


function pausesong() {
    var songId = this.innerHTML;


    switch (songId) {
        case "a":
            song1.pause();
            break;
        case "b":
            song2.pause();
            break;

        case "c":
            song3.pause();
            break;
        case "d":
            song4.pause();
            break;
        case "e":
            song5.pause();
            break;
        case "f":
            song6.pause();
            break;
        case "g":
            song7.pause();
            break;
        case "h":
            song8.pause();
            break;
        case "i":
            song9.pause();
            break;
        default:
            console.log("hello");
            break;

    }

}