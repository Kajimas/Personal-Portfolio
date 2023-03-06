/* 
   Title: footer.js (https://github.com/Kajimas/Personal-Portfolio/blob/main/footer.js)
   Author: Richard Krasso 
   Date: 2/2/2023
   Description: A Javascript page that helped with creating the components for my pages
 */

// Defines a new class named "Footer" that extends the built-in "HTMLElement" class
class Footer extends HTMLElement {
  constructor() {
    super();
  }

  // Defines a new method named "connectedCallback" that will be called when the element is added to the document
  // Contains the content of the footer
  connectedCallback() {
    this.innerHTML = `
            <div id="footer">
                <p>
                    Copyright &copy; 2021 <a href="#">Bellevue University</a>
                </p>
            </div>
        `;
  }
}

// Registers the new custom element with the name "footer-component" using the "customElements" API
customElements.define("footer-component", Footer);
