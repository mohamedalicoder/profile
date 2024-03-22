function switching() {
  document.getElementById(`current--${active}`).textContent = 0; //change leater
  active = active === 0 ? 1 : 0; // switching between players
  currentscore = 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
}

function rolling() {
    
    btnRol.addEventListener('click', () => {
        if (playing) {
            // generate random number
            let dice = Math.floor(Math.random() * 6) + 1;
            // display the diced img
            diceEl.classList.remove('hidden');
            diceEl.src = `dice-${dice}.png`;
            // if 1 condition
            if (dice !== 1) {
                currentscore += dice;
                document.getElementById(`current--${active}`).textContent = currentscore; //change leater
            } else {
                switching();
            }
        }
    
  });
}
