blackjack = {
    dhan: document.querySelector(".dealers-hand"),
    dcard: document.querySelector(".dealers-cards"),
    phan: document.querySelector(".playerss-hand"),
    pcard: document.querySelector(".dealers-cards"),
    playBtn: document.querySelector(".play-btn"),

    standBtn: document.getElementById("stand-btn"),

    deck: ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],

    deckValues: {
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
    },

    stood: false

}

const hitBtn = document.getElementById("hit-btn");



function test() {
    console.log("testnjr med");
}



function randomcard() {
    let idx = Math.floor(Math.random() * 12);
    return blackjack[deck][idx];
}

function displayCard() {
    let cardImg = document.createElement('img');
    cardImg.src = `/images/${card}.png`;

}

function bjHit() {

    let card = randomCard();
    displayCard(card);

}





hitBtn.addEventListener("click", bjHit);
standBtn.addEventListener("click", test);