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



function test() {
    console.log("testnjr med");
}



function randomCard() {
    let idx = Math.floor(Math.random() * 12);
    return deck[idx];
}

function displayCard(card) {
    let cardImg = document.createElement('img');
    cardImg.src = `/images/${card}.png`;
    blackjack.pcard.append(cardImg)

}

function bjHit() {



    let card = randomCard();
    displayCard(card);



}

function startGame() {

}

function deal() {
    bjHit();
    bjHit();
}


dealBtn.addEventListener("click", deal)


hitBtn.addEventListener("click", bjHit);