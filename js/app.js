/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Element selectors
const resetBtn = document.querySelector('#btn__reset');
const onscreenKeyboard = document.querySelector('#qwerty');
const phraseUl = document.querySelector('#phrase ul');
const keyboardButtons = Array.from(document.querySelectorAll('#qwerty button'));
const heartImages = document.querySelectorAll('.tries img');

// Current game instance
let game;

// Event listener for the 'Start Game' button
resetBtn.addEventListener('click', () => {
  // Reset the gameboard before starting a new  game
  resetGameboard();
  // Create a new game instance
  game = new Game();
  // Start the game
  game.startGame();
});

// Event listener for the onscreen keyboard
onscreenKeyboard.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') {
    game.handleInteraction(e.target);
  }
});

// Event listener for physical keyboard input
document.addEventListener('keydown', e => {
  // Ensure the game has started
  if (!game) return;

  // Convert key to lowercase
  const keyPressed = e.key.toLowerCase();

  // Only allow letters a-z
  if (/^[a-z]$/.test(keyPressed)) {
    // Get the matching onscreen button
    const button = keyboardButtons.find(btn => btn.textContent === keyPressed);

    // If the button exists and is not already selected, handle the interaction
    if (button && !button.disabled) {
      game.handleInteraction(button);
    }
  }
});

/**
 * Resets the gameboard for a new game
 */
function resetGameboard() {
  // Remove all <li> elements from the Phrase <ul> element
  phraseUl.innerHTML = '';

  // Enable all of the onscreen keyboard buttons and reset their classes to 'key'
  keyboardButtons.forEach(button => {
    button.disabled = false;
    button.className = 'key';
  });

  // Reset all heart images to liveHeart.png
  heartImages.forEach(heart => {
    heart.src = 'images/liveCat.png';
  });

  // Reset overlay classes (removes 'win' or 'lose' from previous game)
  document.querySelector('#overlay').className = 'start';
}