import './teaser-panel.scss';

export class TeaserPanelComponent extends HTMLElement {
    constructor() {
        super();
        this.init();
    }

    private init(): void {
        this.attachShadow({ mode: 'open' });

        const wrapper = document.createElement('div');
        wrapper.classList.add('teaser-panel-wrapper');

        if (!this.shadowRoot) {
            return;
        }

        this.shadowRoot.append(wrapper);
    }
}

customElements.define('teaser-panel', TeaserPanelComponent);