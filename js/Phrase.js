/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }

  /**
   * Adds letter placeholders to the display when the game starts.
   * Each letter is presented by an empty box, onle <li> element for each letter.
   */
  addPhraseToDisplay() {
    const phraseUl = document.querySelector('#phrase ul');
    phraseUl.innerHTML = '';

    for (let char of this.phrase) {
      const li = document.createElement('li');
      
      // Use the 'letter' or the 'space' CSS class depending on the character
      if(char === ' ') {
        li.classList.add('space');
        li.textContent = ' ';
      } else {
        li.classList.add('hide', 'letter', char);
        li.textContent = char;
      }

      phraseUl.appendChild(li);
    }
  }

  /**
   * Check if the selected letter is in the phrase
   * @param {string} letter - Letter to check
   * @returns {boolean} - True if the letter is in the phrase, otherwise false
   */
  checkLetter(letter) {
    return this.phrase.includes(letter);
  }

  /**
   * Reveal the matched letter on the board
   * @param {string} letter - Letter to reveal
   */
  showMatchedLetter(letter) {
    const matchingLetters = document.querySelectorAll(`.letter.${letter}`);

    // Change the CSS class from 'hide' to 'show'
    matchingLetters.forEach(letter => {
      letter.classList.replace('hide', 'show');
    });
  }
}