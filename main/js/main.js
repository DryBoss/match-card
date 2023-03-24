const timeShow = document.querySelector("#time span");
const flipShow = document.querySelector("#flip span");
const card1 = document.querySelector("#c1");
const card2 = document.querySelector("#c2");
const card3 = document.querySelector("#c3");
const card4 = document.querySelector("#c4");
const card5 = document.querySelector("#c5");
const card6 = document.querySelector("#c6");
const card7 = document.querySelector("#c7");
const card8 = document.querySelector("#c8");
const card9 = document.querySelector("#c9");
const card10 = document.querySelector("#c10");
const card11 = document.querySelector("#c11");
const card12 = document.querySelector("#c12");
const card13 = document.querySelector("#c13");
const card14 = document.querySelector("#c14");
const card15 = document.querySelector("#c15");
const card16 = document.querySelector("#c16");

let time = 6;
let flip = 0;
let cards = [];
let selectedCard = "";
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

function cardClicked (cardNumber, cardId) {
  if (selectedCard === "") {
    cardNumber.classList.add("selected");
    selectedCard = cardNumber;
    selectedCardId = cardId;
  } else if (selectedCard === cardNumber) {
    cardNumber.classList.remove("selected");
    selectedCard = "";
    selectedCardId = "";
  } else if (selectedCard !== cardNumber) {
    if (animationCard) {} else {
      flip += 1;
      flipShow.innerHTML = flip;
      animationCard = true;
      cardNumber.classList.add("selected")
      cardNumber.classList.add("card-flip")
      cardNumber.children[0].src = showCard(cardId)
      selectedCard.classList.add("card-flip")
      selectedCard.children[0].src = showCard(selectedCardId)
      if (cards[cardId] === cards[selectedCardId]) {
        selectedCard = "";
        selectedCardId = "";
        animationCard = false;
      } else {
        setTimeout(() => {
          cardNumber.classList.add("revealed")
          cardNumber.children[0].src = "images/cards/hide-card.png"
          selectedCard.classList.add("revealed")
          selectedCard.children[0].src = "images/cards/hide-card.png"
        }, 750)
        setTimeout(() => {
          cardNumber.classList.remove("selected")
          cardNumber.classList.remove("card-flip")
          cardNumber.classList.remove("revealed")
          selectedCard.classList.remove("selected")
          selectedCard.classList.remove("card-flip")
          selectedCard.classList.remove("revealed")
          selectedCard = "";
          selectedCardId = "";
          animationCard = false;
        }, 1000)
      }
    }
  }
}

(function genarateCards() {
  for(var looped = 0; looped < 16; looped++) {
    let pickedCard;
    do {pickedCard = Math.floor(Math.random() * 8)} while (cards.filter(card => card === pickedCard).length > 1);
    cards.push(pickedCard);
  }
})();

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
  cards = [];
  genarateCards();
  time = 30;
  timeShow.innerHTML = time;
  flip = 0;
  flipShow.innerHTML = flip;
  document.querySelectorAll(".card").forEach(card => {
    animationCard = true;
    card.classList.add("revealed")
    card.children[0].src = "images/cards/hide-card.png"
    setTimeout(() => {
      card.classList.remove("selected")
      card.classList.remove("card-flip")
      card.classList.remove("revealed")
      card.classList.add("shuffle")
      animationCard = false;
    }, 250)
  })
}
