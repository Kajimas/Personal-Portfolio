/* 
   Title: footer.js (https://github.com/Kajimas/Personal-Portfolio/blob/main/footer.js)
   Author: Richard Krasso 
   Date: 2/2/2023
   Description: A Javascript page that helped with creating the components for my pages
 */

class Footer extends HTMLElement
{
    constructor() {
        super();
    }

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

customElements.define("footer-component", Footer);