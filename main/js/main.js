//preloading images
const cardImages = [
  "images/cards/4-of-hearts.png",
  "images/cards/10-of-hearts.png",
  "images/cards/ace-of-clubs.png",
  "images/cards/ace-of-diamonds.png",
  "images/cards/ace-of-spades.png",
  "images/cards/jack-of-hearts.png",
  "images/cards/king-of-hearts.png",
  "images/cards/queen-of-hearts.png",
];
cardImages.map((src) => {
  const img = new Image();
  img.src = src;
});

//query selectors
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

//global variables
let time = 60;
let flip = 0;
let cards = [];
let timeCountdown;
let selectedCard = "";
let selectedCardId = "";
let animationCard = false;
let gameOver = false;

function generateCards() {
  //generating card deck
  for (var looped = 0; looped < 16; looped++) {
    let pickedCard;
    do {
      pickedCard = Math.floor(Math.random() * 8);
    } while (cards.filter((card) => card === pickedCard).length > 1);
    cards.push(pickedCard);
  }
}

function showCard(cardId) {
  //getting "cardId" and showing its picked card from "cards" array which was picked randomly
  //when cardId is 0 it indicates first card element and card[cardId] gets the randomly generated card for this position indexing 0.
  switch (cards[cardId]) {
    case 0:
      return cardImages[0];
      break;
    case 1:
      return cardImages[1];
      break;
    case 2:
      return cardImages[2];
      break;
    case 3:
      return cardImages[3];
      break;
    case 4:
      return cardImages[4];
      break;
    case 5:
      return cardImages[5];
      break;
    case 6:
      return cardImages[6];
      break;
    case 7:
      return cardImages[7];
      break;
  }
}

function timeCount() {
  timeCountdown = setInterval(() => {
    if (time <= 0) {
      // when times up
      gameOver = true;
      time = 0;
      document.querySelector(".score-menu").style.display = "block";
      document.querySelector(".score-menu p").innerHTML = "times up!";
      document.querySelectorAll(".card").forEach((card, cardId) => {
        //making all card visible
        card.classList.add("selected");
        card.classList.add("card-flip");
        card.children[0].src = showCard(cardId); //children[0] selecting the img element
      });
      clearInterval(timeCountdown);
    } else {
      time -= 1;
    }
    timeShow.innerHTML = time;
  }, 1000);
}

function cardClicked(cardNumber, cardId) {
  //figure out urself
  if (selectedCard === "" && cardNumber.classList.contains("hidden")) {
    cardNumber.classList.add("selected");
    selectedCard = cardNumber;
    selectedCardId = cardId;
  } else if (selectedCard === cardNumber) {
    cardNumber.classList.remove("selected");
    selectedCard = "";
    selectedCardId = "";
  } else if (
    selectedCard !== cardNumber &&
    cardNumber.classList.contains("hidden")
  ) {
    if (!gameOver) {
      if (!animationCard) {
        flip += 1;
        flipShow.innerHTML = flip;
        animationCard = true;
        cardNumber.classList.add("selected");
        cardNumber.classList.add("card-flip");
        cardNumber.children[0].src = showCard(cardId);
        selectedCard.classList.add("card-flip");
        selectedCard.children[0].src = showCard(selectedCardId);
        if (cards[cardId] === cards[selectedCardId]) {
          cardNumber.classList.remove("hidden");
          selectedCard.classList.remove("hidden");
          selectedCard = "";
          selectedCardId = "";
          animationCard = false;
          if (
            ![...document.querySelectorAll(".card")].some((card) =>
              card.classList.contains("hidden")
            )
          ) {
            clearInterval(timeCountdown);
            gameOver = true;
            document.querySelector(".score-menu").style.display = "block";
            document.querySelector(
              ".score-menu p"
            ).innerHTML = `your score<br><span id="score">0</span>`;
            document.querySelector("#score").textContent = (60 - flip) * time;
            if ((60 - flip) * time > localStorage.getItem("highScore")) {
              document.querySelector("#highscore span").innerHTML =
                (60 - flip) * time;
              localStorage.setItem("highScore", (60 - flip) * time);
            }
          }
        } else {
          setTimeout(() => {
            cardNumber.classList.add("revealed");
            cardNumber.children[0].src = "images/cards/hide-card.png";
            selectedCard.classList.add("revealed");
            selectedCard.children[0].src = "images/cards/hide-card.png";
          }, 350);
          setTimeout(() => {
            cardNumber.classList.remove("selected");
            cardNumber.classList.remove("card-flip");
            cardNumber.classList.remove("revealed");
            selectedCard.classList.remove("selected");
            selectedCard.classList.remove("card-flip");
            selectedCard.classList.remove("revealed");
            selectedCard = "";
            selectedCardId = "";
            animationCard = false;
          }, 600);
        }
      }
    }
  }
}

function resetGame() {
  //resetting game by setting all default values
  gameOver = false;
  selectedCard = "";
  selectedCardId = "";
  cards = [];
  generateCards();
  clearInterval(timeCountdown);
  timeCount();
  document.querySelector(".score-menu").style.display = "none";
  time = 60;
  timeShow.innerHTML = time;
  flip = 0;
  flipShow.innerHTML = flip;
  document.querySelectorAll(".card").forEach((card) => {
    //hiding all the cards
    animationCard = true;
    card.classList.add("revealed");
    card.children[0].src = "images/cards/hide-card.png";
    setTimeout(() => {
      //idk why tbh
      card.classList.remove("selected");
      card.classList.remove("card-flip");
      card.classList.remove("revealed");
      card.classList.add("hidden");
      animationCard = false;
    }, 250);
  });
}

if (localStorage.getItem("highScore")) {
  //setting initial highscore, when website finish loading
  document.querySelector("#highscore span").innerHTML =
    localStorage.getItem("highScore");
} else {
  localStorage.setItem("highScore", 0);
}

//first game
//start as soon as the website finish loading
//global variables does rest of the settings
generateCards();
timeCount();
