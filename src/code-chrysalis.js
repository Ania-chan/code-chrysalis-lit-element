import { LitElement, customElement, html, css } from 'lit-element';
import {Button} from "@material/mwc-button";

@customElement('code-chrysalis')
export class CodeChrysalis extends LitElement {
  static get styles () {
    return css`
    `
  }

  static get properties() { 
    return {
    message: { type: String },
    coding: { type: Boolean },
    text: {type: String}
  };}

  constructor() {
    super();
    this.text = this.textContent;
    this.coding = true;
    this.message = "reengineer yourself"
  }

  colorMessage(message) {
    let wordsArr = message.split(' ');
    let classNames = ["blue", "orange", "green"]
    let count = 0;
    let h2 = document.createElement('h2');
    for(let word of wordsArr) {
      word += " "
      let span = document.createElement('span');
      span.innerHTML = word;
      span.classList.add(classNames[count])
      count++;
      if(count === classNames.length) {
        count = 0;
      }
      h2.appendChild(span)
    }
    return h2;
  }

  showMessage(e) {
    this.coding = !this.coding;
  }

  render() {
    return html`
    <style>

    h1 {
      text-transform: uppercase;
    }
    .blue {
      color: #4992CA;
    }
    .orange {
      color: #DE713B
    }
    .green{
      color: #55B491;
    } 
    :host([hidden]) { display: none; }
    </style>

    <div>
    <div>${this.colorMessage(this.text)}</div>
    <mwc-button @click="${this.showMessage}" unelevated label="Can you code?"></mwc-button>
    </div>
    ${this.coding ? html`` : html`<div>${this.colorMessage(this.message)}<iframe src="https://giphy.com/embed/o0vwzuFwCGAFO" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/cat-hacker-webs-o0vwzuFwCGAFO">via GIPHY</a></p></div>`}
    `;
  }

}

customElements.define('code-chrysalis', CodeChrysalis);

// <style>
//   :host(:focus) {
//     /* style host only if it has received focus */
//   }
 
//   :host(.blue) {
//     /* style host only if has a blue class */
//   }
 
//   :host([disabled]) {
//     /* style host only if it's disabled */
//   }
// </style>