var cards = [{
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
];
var cardsInPlay = [];

function randomizeCards() {

    var randomCards = []
    while (cards.length !== 0) {
        let randomIndex = Math.floor(Math.random() * cards.length);
        randomCards.push(cards[randomIndex]);
        cards.splice(randomIndex, 1);
    }
    cards = randomCards;
}

function createBoard() {

    randomizeCards();
    for (var i = 0; i < cards.length; i++) {

        var cardElement = document.createElement('img');
        cardElement.setAttribute('src', "images/back.png");
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById("game-board").appendChild(cardElement);
    }


}

function checkForMatch() {


    var score = 0;
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert("You Found a Match");
            // score code in here
            // reset code in here


        } else {
            alert("Sorry, try again");
            // score code in here
            // reset code in here
        }

    }
}

function flipCard() {

    var cardId = this.getAttribute('data-id');
    cardsInPlay.push(cards[cardId].rank);
    this.setAttribute('src', cards[cardId].cardImage);
    checkForMatch();

}



createBoard();