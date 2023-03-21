const timeShow = document.querySelector("#time span");
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

let cardStatus = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

let selectedCard = "";

(function timeCountdown () {
  let time = 120;
  setInterval(() => {
    time -= 1;
    timeShow.innerHTML = time;
  }, 1000)
})();

function cardClicked (cardNumber, cardId) {
  if (selectedCard === "") {
    cardNumber.classList.add("selected");
    selectedCard = cardNumber;
  } else if (selectedCard === cardNumber) {
    cardNumber.classList.remove("selected");
    selectedCard = "";
  } else if (selectedCard !== cardNumber) {
    cardNumber.classList.add("selected")
    cardNumber.classList.add("card-flip")
    selectedCard.classList.add("card-flip")
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
