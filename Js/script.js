const increaseBtn = document.querySelector(".increase");
const restart = document.querySelector(".restart");

let currentNum = 0;

increaseBtn.addEventListener('click', () => {
  if (currentNum < 10) {
    currentNum += 2;
  }
  displayCurrentNum();
});

restart.addEventListener('click', () => {
  currentNum = 0;
  displayCurrentNum();
});

function displayCurrentNum() {
  const numDisplay = document.querySelector('p');
  numDisplay.textContent = currentNum;
}