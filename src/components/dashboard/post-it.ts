import './post-it.scss';

export class PostItComponent extends HTMLElement {
    private css = `
        .post-it-wrapper {
          display: block;
        
          min-width: 32ch;
          min-height: 5rem;
        
          border-style: solid;
          border-width: 0.5rem;
          border-color: tomato;
        }    
    `;

    constructor() {
        super();
        this.init();
    }

    private init(): void {
        this.attachShadow({mode: 'open'});

        const style = document.createElement('style');
        style.textContent = this.css;
        const wrapper = document.createElement('div');
        wrapper.classList.add('post-it-wrapper');

        if (!this.shadowRoot) {
            return;
        }

        this.shadowRoot.append(style, wrapper);
    }
}

customElements.define('post-it', PostItComponent);