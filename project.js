const colors = ["#f6e58d","#ffbe76","#ff7979","#b33939","#dff9fb","#f9ca24","#f0932b","#eb4d4b","#ffb8b8","#c7ecee","#4834d4","#be2edd","#130f40","#535c68"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    const randomNumber = getRandomNumber();
    document.body.style.backgroundColor =colors[randomNumber];
    color.textContent = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

function copyColor() {
    navigator.clipboard.writeText(color.textContent);
}