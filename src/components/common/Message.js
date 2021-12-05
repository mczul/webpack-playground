import './Message.scss';
import defaultExport from './Message.txt';

class MessageComponent extends HTMLElement {

    constructor() {
        super();
        console.warn(`Instanciating MessageComponent.`);

        this.init();
    }

    init() {
        const title = this.getAttribute('title');
        const subTitle = this.getAttribute('sub') || null;

        this.attachShadow({mode: "open"});

        const headline = document.createElement('h1');
        headline.textContent = title || '???';

        const infoline = document.createElement("small");
        const linebreak = document.createElement("br");

        if (!!subTitle) {
            infoline.textContent = subTitle;
        } else {
            infoline.textContent = defaultExport;
        }

        headline.append(linebreak, infoline);

        this.shadowRoot.append(headline);
    }

}

customElements.define('my-message', MessageComponent);