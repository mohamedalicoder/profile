'use strict';

// starting conditions

score0.textContent = '0';
score1.textContent = '0';
let active = 0;
let ligt = 0;
let playing = true;
let currentscore = 0;
const scores = [0, 0];
// rolling dice function

rolling();
hold.addEventListener('click', () => {
  if (playing) {
    scores[active] += currentscore;
    document.getElementById(`score--${active}`).textContent = scores[active];
    if (scores[active] >= 20) {
      playing = false;
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${active}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${active}`)
        .classList.remove('player--active');
    } else {
      switching();
    }
  }
});
btnNew.addEventListener('click', () => {
  location.reload();
});
