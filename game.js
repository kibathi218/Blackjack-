blackjack = {
    dhan: document.querySelector(".dealers-hand"),
    dcard: document.querySelector(".dealers-cards"),
    phan: document.querySelector(".players-hands"),
    pcard: document.querySelector(".players-cards"),
    playBtn: document.querySelector(".play-btn"),




}

gameIsLive = false;
let stood = false

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
standBtn = document.getElementById("stand-btn")
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

    if (gameIsLive === true) {

        shouldDealerDraw();
        let card = randomCard();
        displayCard(card);
        checkScore(card);
        checkWinner();
        console.log(dealerScore)
    } else {
        alert("Please press deal to start")
    }





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
    if (playerScore === 21) {
        alert(`YOU WIN! Great Job! Dealer Score: ${dealerScore}`);
    } else if (playerScore > 21) {
        alert(`BUST! Sorry you lose Your Score: ${playerScore}`);
    } else if (dealerScore > 21) {
        alert(`DEALER BUST You Win! Dealer Score: ${dealerScore}`)
    } else if (dealerScore === 21 && playerScore < 21) {
        alert(`Dealer wins with ${dealerScore}`)
    } else if (stood === true && dealerScore < 21) {
        alert(`YOU WIN! Dealer Score: ${dealerScore}`)
    }

}

function shouldDealerDraw() {
    if (dealerScore < 18 && dealerScore != 0) {
        dealerDraw();
    }
}

function deal() {
    gameIsLive = true;
    bjHit();
    bjHit();
    dealerHiddenCard();
    dealerFirstCard();
    dealerDraw();
    console.log(dealerScore)

}



function bjStand() {
    if (gameIsLive === true) {


        stood = true;
        shouldDealerDraw();
        checkWinner();
    } else {
        alert("Please press deal to start")
    }


}



function dealerHiddenCard() {
    let hiddenCard = document.createElement('img');
    hiddenCard.src = `/images/hiddencard.jpg`
    blackjack.dcard.append(hiddenCard);
}


standBtn.addEventListener("click", bjStand)

dealBtn.addEventListener("click", deal)


hitBtn.addEventListener("click", bjHit);