import '../letter-input'

/**
 * The game web component module.
 */
const template = document.createElement('template')
template.innerHTML = `
 <style>
  #container-game {
    background-color: #A876C4;
    width: 100px;
    padding: 50px;
  }
  
 </style>
 <div id="container-game"> 
  <letter-input id="letter-input"></letter-input>
 </div>
 `

customElements.define(
  'hangman-game',
  /**
   * Represents a keyboard
   */
  class extends HTMLElement {
    #currentWord = 'mexico'
    #letterInput

    /**
     * Creates an instance of the current type.
     *
     */
    constructor () {
      super()

      // Attach a shadow DOM tree to this element and
      // append the template to the shadowroot.
      this.attachShadow({ mode: 'open' }).appendChild(
        template.content.cloneNode(true)
      )

      // Get the element in the shadowroot.
      this.#letterInput = this.shadowRoot.querySelector('#letter-input')

      this.#letterInput.addEventListener('letter-entered', (event) => {
        if (this.#isLetterValid(event.detail.letter)) {
          console.log('valid')
        } else {
          console.log('youre hanged!')
        }
      })
    }

    /**
     * Validate the entered letter.
     *
     * @param {string} letter - The letter to valdiate.
     * @returns {boolean} - Does current word include the letter.
     */
    #isLetterValid (letter) {
      return this.#currentWord.includes(letter.toLowerCase())
    }
  }
)
