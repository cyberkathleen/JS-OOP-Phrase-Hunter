/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Current game instance
let game;

// Event listener for the 'Start Game' button
document.querySelector('#btn__reset').addEventListener('click', () => {
  // Reset the gameboard before starting a new  game
  resetGameboard();
  // Create a new game instance
  game = new Game();
  // Start the game
  game.startGame();
});

// Event listener for the onscreen keyboard
document.querySelector('#qwerty').addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') {
    game.handleInteraction(e.target);
  }
});

/**
 * Resets the gameboard for a new game
 */
function resetGameboard() {
  // Remove all <li> elements from the Phrase <ul> element
  document.querySelector('#phrase ul').innerHTML = '';

  // Enable all of the onscreen keyboard buttons and reset their classes to 'key'
  document.querySelectorAll('#qwerty button').forEach(button => {
    button.disabled = false;
    button.className = 'key';
  });

  // Reset all heart images to liveHeart.png
  document.querySelectorAll('.tries img').forEach(heart => {
    heart.src = 'images/liveHeart.png';
  });

  // Reset overlay classes (removes 'win' or 'lose' from previous game)
  document.querySelector('#overlay').className = 'start';
}