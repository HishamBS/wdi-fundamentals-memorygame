// var cardOne = "king";
// var cardTwo = "king";
// var cardThree = "queen";
// var cardFour = "queen";



var cards = ["king", "king", "queen", "queen"];
var cardsInPlay = [];

function checkForMatch() {
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            console.log("You Found a Match");
        } else {
            console.log("Sorry, try again");

        }

    }
}

function flipCard(cardId) {

    console.log("user flipped " + cards[cardId])
    cardsInPlay.push(cards[cardId]);
    checkForMatch();

}
flipCard(0);
flipCard(2);