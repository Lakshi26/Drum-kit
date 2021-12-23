const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");
const img5 = document.getElementById("img5");
const img6 = document.getElementById("img6");
const img7 = document.getElementById("img7");

img1.addEventListener("click", myFunction);
function myFunction(){
    //console.log("1")
    var sound1 = new Audio("./sound1.mp3");
    sound1.play();
}
img2.addEventListener("click", myFunction2);
function myFunction2(){
    var sound2 = new Audio("./sound2.mp3");
    sound2.play();
    //console.log("2")
} 
img3.addEventListener("click", myFunction3);
function myFunction3(){
    var sound3 = new Audio("./sound3.mp3");
    sound3.play();
    //console.log("2")
}
img4.addEventListener("click", myFunction4);
function myFunction4(){
    var sound4 = new Audio("./sound4.mp3");
    sound4.play();
    //console.log("2")
}
img5.addEventListener("click", myFunction5);
function myFunction5(){
    var sound5 = new Audio("./sound10.mp3");
    sound5.play();
    //console.log("2")
}
img6.addEventListener("click", myFunction6);
function myFunction6(){
    var sound6 = new Audio("./sound8.mp3");
    sound6.play();
    //console.log("2")
}
img7.addEventListener("click", myFunction7);
function myFunction7(){
    var sound7 = new Audio("./sound9.mp3");
    sound7.play();
    //console.log("2")
}



