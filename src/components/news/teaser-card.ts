import './teaser-card.scss';

export class TeaserCardComponent extends HTMLElement {
    constructor() {
        super();
        this.init();
    }

    private init(): void {
        this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        wrapper.classList.add('teaser-card-wrapper', 'with-border');

        if (!this.shadowRoot) {
            return;
        }

        this.shadowRoot.append(wrapper);
    }
}

customElements.define('teaser-card', TeaserCardComponent);