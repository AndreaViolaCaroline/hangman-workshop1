/**
 * The keyboard web component module.
 */
 const template = document.createElement('template')
 template.innerHTML = `
 <style>
  #container-keyboard {
    background-color: #A3C6C4;
    height: 100px;
    width: 100px;
  }
  
 </style>
 <div id="container-keyboard"> 
  <input id="input-letter" type="text" maxlength="1" />
  <button id="submit-letter" >Submit</button>
 </div>
 `
 
 customElements.define('key-board',
  /**
   * Represents a keyboard
   */
  class extends HTMLElement {
    #submitBtn

    #inputField
    /**
     * Creates an instance of the current type.
     *
     */
       constructor () {
        super()
  
        // Attach a shadow DOM tree to this element and
        // append the template to the shadowroot.
        this.attachShadow({ mode: 'open' }).appendChild(template.content.cloneNode(true))
  
        // Get the element in the shadowroot.
        this.#inputField = this.shadowRoot.querySelector('#input-letter')
        this.#submitBtn = this.shadowRoot.querySelector('#submit-letter')

        this.#submitBtn.addEventListener('click', () => {
          console.log(this.#inputField.value)
        })
      }
  }
   
 )