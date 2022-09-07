/**
 * The letter-input web component module.
 */
const template = document.createElement('template')
template.innerHTML = `
 <style>
  #container-letter-input {
    background-color: #A3C6C4;
    height: 100px;
    width: 100px;
  }
  
 </style>
 <div id="container-letter-input"> 
  <input id="input-letter" type="text" maxlength="1" />
  <button id="submit-letter" >Submit</button>
 </div>
 `

customElements.define(
  'letter-input',
  /**
   * Represents a letter-input
   */
  class extends HTMLElement {
    #submitButton

    #inputField
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
      this.#inputField = this.shadowRoot.querySelector('#input-letter')
      this.#submitButton = this.shadowRoot.querySelector('#submit-letter')

      this.#submitButton.addEventListener('click', (event) => {
        // NOTE: Add validation here.
        event.preventDefault()
        const letterEntered = new CustomEvent('letter-entered', {
          detail: {
            letter: this.#inputField.value
          }
        })
        this.dispatchEvent(letterEntered)
      })
    }
  }
)
