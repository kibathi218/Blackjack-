blackjack = {
    dhan: document.querySelector(".dealers-hand"),
    dcard: document.querySelector(".dealers-cards"),
    phan: document.querySelector(".players-hands"),
    pcard: document.querySelector(".players-cards"),
    playBtn: document.querySelector(".play-btn"),

    standBtn: document.getElementById("stand-btn"),
    stood: false

}

gameIsLive = true;

let deck = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]

const deckValues = {
    A: [1, 11],
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: 10,
    J: 10,
    Q: 10,
    K: 10
}

const hitBtn = document.getElementById("hit-btn");
const dealBtn = document.getElementById("deal-btn");
let playerScoreDisplay = document.getElementById('playerScoreDisplay').innerText;
let playerScore = 0;
let dealerScore = 0;



function test() {
    console.log("testnjr med");
}



function randomCard() {
    let idx = Math.floor(Math.random() * 13);
    cardName = deck[idx];
    return cardName

}

function displayCard(card) {
    let cardImg = document.createElement('img');
    cardImg.src = `/images/${card}.png`;
    blackjack.pcard.append(cardImg)

}

function checkScore(card) {
    if (card === "A" && playerScore <= 10) {
        playerScore += deckValues.A[1];
    } else if (card === "A" && playerScore > 10) {
        playerScore += deckValues.A[0];
    } else {
        playerScore += deckValues[cardName];
    }
}

function checkDealerScore(dealerCard) {
    if (dealerCard === "A" && dealerScore <= 10) {
        dealerScore += deckValues.A[1];
    } else if (dealerCard === "A" && playerScore > 10) {
        dealerScore += deckValues.A[0];
    } else {
        dealerScore += deckValues[cardName];
    }
}

function checkFirstCard(firstCard) {
    if (firstCard === "A" && dealerScore <= 10) {
        dealerScore += deckValues.A[1];
    } else if (firstCard === "A" && playerScore > 10) {
        dealerScore += deckValues.A[0];
    } else {
        dealerScore += deckValues[cardName];
    }
}

function bjHit() {

    let card = randomCard();
    displayCard(card);
    checkScore(card);





}


function dealerDraw() {
    let dealerCard = randomCard();
    displayDealerCard(dealerCard);
    checkDealerScore(dealerCard)
}

function displayDealerCard(dealerCard) {
    let dealerCardImg = document.createElement('img');
    dealerCardImg.src = `/images/${dealerCard}.png`
    blackjack.dcard.append(dealerCardImg);
}

function dealerFirstCard() {
    let firstCard = randomCard();
    checkFirstCard(firstCard);
}

function checkWinner() {
    if (playerScore)
}

function deal() {
    bjHit();
    bjHit();
    dealerHiddenCard();
    dealerFirstCard();
    console.log(dealerScore)
    dealerDraw();
    console.log(dealerScore)


}

function dealerHiddenCard() {
    let hiddenCard = document.createElement('img');
    hiddenCard.src = `/images/hiddencard.jpg`
    blackjack.dcard.append(hiddenCard);
}




dealBtn.addEventListener("click", deal)


hitBtn.addEventListener("click", bjHit);