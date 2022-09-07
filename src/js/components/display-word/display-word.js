/**
 * The display word component module.
 */
const template = document.createElement('template')
template.innerHTML = `
 <style>
  #container-word {
    background-color: #fff;
    width: 80px;
    height: 30px;
  }
  
 </style>
 <div id="container-word"> 
 </div>
 `

customElements.define(
  'display-word',
  /**
   * Represents a keyboard
   */
  class extends HTMLElement {
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
    }
  }
)
