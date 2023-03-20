const timeShow = document.querySelector("#time span");
const card1 = document.querySelector("#c1");

let cardStatus = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

(function timeCountdown () {
  let time = 120;
  setInterval(() => {
    time -= 1;
    timeShow.innerHTML = time;
  }, 1000)
})();

function cardClicked (cardNumber, cardId) {
  if (cardStatus[cardId] === 0) {
    cardNumber.classList.add("targeted");
  }
  cardNumber.style.transform = "scale(0, 1)";
  const cardAnimation = setInterval(() => {
    cardNumber.style.transform = "scale(1, 1)";
    clearInterval(cardAnimation);
  }, 250)
}

