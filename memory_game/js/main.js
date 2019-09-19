// var cardOne = "king";
// var cardTwo = "king";
// var cardThree = "queen";
// var cardFour = "queen";



var cards = ["king", "king", "queen", "queen"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);
if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You Found a Match");
    } else {
        alert("Sorry, try again");

    }

}