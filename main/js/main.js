const timeShow = document.querySelector("#time span");
const card1 = document.querySelector("#c1");
const card1Img = document.querySelector("#c1-img");
const card2 = document.querySelector("#c2");
const card2Img = document.querySelector("#c2-img");
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

let selectedCard = "";
let selectedCardImg = "";
let cards = [];

(function timeCountdown () {
  let time = 120;
  setInterval(() => {
    time -= 1;
    timeShow.innerHTML = time;
  }, 1000)
})();

function cardClicked (cardNumber, cardNumberImg) {
  if (selectedCard === "") {
    cardNumber.classList.add("selected");
    selectedCard = cardNumber;
    selectedCardImg = cardNumberImg;
  } else if (selectedCard === cardNumber) {
    cardNumber.classList.remove("selected");
    selectedCard = "";
    selectedCardImg = "";
  } else if (selectedCard !== cardNumber) {
    cardNumber.classList.add("selected")
    cardNumber.classList.add("card-flip")
    cardNumberImg.src = "images/cards/4-of-hearts.png"
    selectedCard.classList.add("card-flip")
    selectedCardImg.src = "images/cards/4-of-hearts.png"
    setTimeout(() => {
      cardNumber.classList.add("revealed")
      selectedCard.classList.add("revealed")
    }, 750)
    setTimeout(() => {
      cardNumber.classList.remove("selected")
      cardNumber.classList.remove("card-flip")
      cardNumber.classList.remove("revealed")
      selectedCard.classList.remove("selected")
      selectedCard.classList.remove("card-flip")
      selectedCard.classList.remove("revealed")
      selectedCard = "";
    }, 1000)
  }
}

function genarateCards() {
  for(let looped = 0; looped < 16; looped++) {
    let pickedCard;
    do {pickedCard = Math.floor(Math.random() * 8)} while (cards.filter(card => card === pickedCard).length > 1);
    cards.push(pickedCard);
  }
}

genarateCards();
