import './teaser.scss';

import './teaser-panel.scss';

export class TeaserComponent extends HTMLElement {
    constructor() {
        super();
        this.init();
    }

    private init(): void {
        this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        wrapper.classList.add('teaser-wrapper');

        if (!this.shadowRoot) {
            return;
        }

        this.shadowRoot.append(wrapper);
    }
}

customElements.define('teaser', TeaserComponent);