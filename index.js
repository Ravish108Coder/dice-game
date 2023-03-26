function randomDice(temp){
    var item =  Math.floor(Math.random()*6)+1;
    document.querySelector(`.${temp}`).setAttribute("src", "images/dice" + item + ".png");
    return item;
}
var value1 = randomDice("img1");
var value2 = randomDice("img2");
if(value1===value2){
    document.querySelector("h1").innerHTML = "Draw!";
}else if(value1 >= value2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
}else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
}