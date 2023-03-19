const hex = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
const song =document.getElementById("song");
const click_me = document.getElementById("click-me");

btn.addEventListener("click", function () {
    let hexColor = "#";
    for(let i = 0; i < 6; i++){
        hexColor += hex[getRandomNumber()];
    } 
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
    click_me.play();
});

function getRandomNumber() {
    return Math.floor(Math.random()*hex.length);
}

function copyColor() {
    navigator.clipboard.writeText(color.textContent);
    song.play();
}