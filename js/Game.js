/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      new Phrase("Matcha is life"),
      new Phrase("Pastel violet or nothing"),
      new Phrase("Cats over dogs"),
      new Phrase("do you read webtoons"),
      new Phrase("fried chicken or burgers")
    ];
    this.activePhrase = null;
  }

  /**
   * Selects a random phrase from the phrases array
   * @returns {Object} A random Phrase object
   */
  getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * this.phrases.length);
    return this.phrases[randomIndex];
  }

  /**
   * Starts the game by selecting a random phrase and displaying it
   */
  startGame() {
    // Hides the start screen overlay
    document.querySelector('#overlay').style.display = 'none';
    
    // Chose a phrase
    this.activePhrase = this.getRandomPhrase();

    // Display the phrase to the board
    this.activePhrase.addPhraseToDisplay();
  }

  /**
  * Handles onscreen keyboard button interactions
  * @param {Object} button - The clicked button element
  */
  handleInteraction(button) {
    const letter = button.textContent;
    
    // Disable button after clicking
    button.disabled = true;

    // If the guessed letter is correct, show the matching letters
    if (this.activePhrase.checkLetter(letter)) {
      button.classList.add('chosen');
      this.activePhrase.showMatchedLetter(letter);

      // Check if the player won the game
      if (this.checkForWin()) {
        this.gameOver(true);
      }
    }
    // If the guessed letter is incorrect, remove a life
    else {
      button.classList.add('wrong');
      this.removeLife();
    }
  }


  /**
  * Checks if the player has won the game
  * @returns {boolean} True if all letters are revealed, false otherwise
  */
  checkForWin() {
    return document.querySelectorAll('.hide.letter').length === 0;
  }

  /**
  * Removes a life from the scoreboard
  */
  removeLife() {
    const hearts = document.querySelectorAll('.tries img');
    
    // Replace live heart with lost heart
    hearts[this.missed].src = "images/lostHeart.png";
    this.missed++;

    // If the player is out of lives, end the game
    if (this.missed === 5) {
      this.gameOver(false);
    }
  }

  /**
   * Ends the game and displays the win/loss message
   * @param {boolean} won - True if the player won, false if they lost
   */
  gameOver(won) {
    // Display the start screen overlay
    const overlay = document.querySelector('#overlay');
    overlay.style.display = 'flex';

    // Display a win or loss message
    const message = document.querySelector('#game-over-message');
    if (won) {
      overlay.className = 'win';
      message.textContent = "Congratulations! You Won!";
    } else {
      overlay.className = 'lose';
      message.textContent = "Game Over! Try Again!";
    }
  }
}