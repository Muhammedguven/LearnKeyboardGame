function generateRandomLetter() {
    const alphabet = "ABCÇDEFGĞHIJKLMNOÖPRSŞTUÜVYZ"

    return alphabet[Math.floor(Math.random() * alphabet.length)]
}
document.getElementById("MainLetter").innerHTML = generateRandomLetter();
document.addEventListener("keypress", run);
let point = 0;
let health = 0;

function run(e) {

    let letter = e.key;
    if (document.getElementById("MainLetter").innerHTML === letter.toUpperCase()) {
        document.getElementById("MainLetter").innerHTML = generateRandomLetter();
        point += 1;
        document.getElementById("Total").innerHTML = point;
        random_bg_color();
    } else {
        health += 1;
        document.getElementById("Heart").innerHTML = health;
    }

}

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);

    document.body.style.background = bgColor;
}

var timeLeft = 30;
var elem = document.getElementById('count');

var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        var answer = window.confirm("Game Over! \nYour score is: " +
            point + " \nPlay again?");
        if (answer) {
            location.reload();
        } else {
            document.getElementById("MainLetter").innerHTML = "👋"
        }
    } else {
        elem.innerHTML = timeLeft + ' seconds';
        timeLeft--;
        if (timeLeft < 5) {
            document.getElementById('count').style.color = 'red'
        }
    }
}