const timeShow = document.querySelector("#time span");
const flipShow = document.querySelector("#flip span");
const card1 = document.querySelector("#c1");
const card1Img = document.querySelector("#c1-img");
const card2 = document.querySelector("#c2");
const card2Img = document.querySelector("#c2-img");
const card3 = document.querySelector("#c3");
const card3Img = document.querySelector("#c3-img");
const card4 = document.querySelector("#c4");
const card4Img = document.querySelector("#c4-img");
const card5 = document.querySelector("#c5");
const card5Img = document.querySelector("#c5-img");
const card6 = document.querySelector("#c6");
const card6Img = document.querySelector("#c6-img");
const card7 = document.querySelector("#c7");
const card7Img = document.querySelector("#c7-img");
const card8 = document.querySelector("#c8");
const card8Img = document.querySelector("#c8-img");
const card9 = document.querySelector("#c9");
const card9Img = document.querySelector("#c9-img");
const card10 = document.querySelector("#c10");
const card10Img = document.querySelector("#c10-img");
const card11 = document.querySelector("#c11");
const card11Img = document.querySelector("#c11-img");
const card12 = document.querySelector("#c12");
const card12Img = document.querySelector("#c12-img");
const card13 = document.querySelector("#c13");
const card13Img = document.querySelector("#c13-img");
const card14 = document.querySelector("#c14");
const card14Img = document.querySelector("#c14-img");
const card15 = document.querySelector("#c15");
const card15Img = document.querySelector("#c15-img");
const card16 = document.querySelector("#c16");
const card16Img = document.querySelector("#c16-img");

let time = 6;
let flip = 0;
let cards = [];
let selectedCard = "";
let selectedCardImg = "";
let selectedCardId = "";
let animationCard = false;

(function timeCountdown () {
  setInterval(() => {
    if (time <= 1) {
      time = 0;
    } else {
      time -= 1;
    }
    timeShow.innerHTML = time;
  }, 1000)
})();

function cardClicked (cardNumber, cardNumberImg, cardId) {
  if (selectedCard === "") {
    cardNumber.classList.add("selected");
    selectedCard = cardNumber;
    selectedCardImg = cardNumberImg;
    selectedCardId = cardId;
  } else if (selectedCard === cardNumber) {
    cardNumber.classList.remove("selected");
    selectedCard = "";
    selectedCardImg = "";
    selectedCardId = "";
  } else if (selectedCard !== cardNumber) {
    if (animationCard) {} else {
      flip += 1;
      flipShow.innerHTML = flip;
      animationCard = true;
      cardNumber.classList.add("selected")
      cardNumber.classList.add("card-flip")
      cardNumberImg.src = showCard(cardId)
      selectedCard.classList.add("card-flip")
      selectedCardImg.src = showCard(selectedCardId)
      if (cards[cardId] === cards[selectedCardId]) {
        selectedCard = "";
        selectedCardImg = "";
        selectedCardId = "";
        animationCard = false;
      } else {
        setTimeout(() => {
          cardNumber.classList.add("revealed")
          cardNumberImg.src = "images/cards/hide-card.png"
          selectedCard.classList.add("revealed")
          selectedCardImg.src = "images/cards/hide-card.png"
        }, 750)
        setTimeout(() => {
          cardNumber.classList.remove("selected")
          cardNumber.classList.remove("card-flip")
          cardNumber.classList.remove("revealed")
          selectedCard.classList.remove("selected")
          selectedCard.classList.remove("card-flip")
          selectedCard.classList.remove("revealed")
          selectedCard = "";
          selectedCardImg = "";
          selectedCardId = "";
          animationCard = false;
        }, 1000)
      }
    }
  }
}

function genarateCards() {
  for(let looped = 0; looped < 16; looped++) {
    let pickedCard;
    do {pickedCard = Math.floor(Math.random() * 8)} while (cards.filter(card => card === pickedCard).length > 1);
    cards.push(pickedCard);
  }
}

function showCard(cardId) {
  switch (cards[cardId]) {
    case 0:
      return "images/cards/4-of-hearts.png"
      break;
    case 1:
      return "images/cards/10-of-hearts.png"
      break;
    case 2:
      return "images/cards/ace-of-clubs.png"
      break;
    case 3:
      return "images/cards/ace-of-diamonds.png"
      break;
    case 4:
      return "images/cards/ace-of-spades.png"
      break;
    case 5:
      return "images/cards/jack-of-hearts.png"
      break;
    case 6:
      return "images/cards/king-of-hearts.png"
      break;
    case 7:
      return "images/cards/queen-of-hearts.png"
      break;
  }
}

function resetGame() {
  genarateCards();
  document.querySelectorAll(".card").forEach(x => {
    console.log(x)
  })
}


genarateCards();
