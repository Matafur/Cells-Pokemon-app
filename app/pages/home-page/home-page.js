/* eslint-disable no-unused-expressions */
import { CellsPageMixin as cellsPage } from '@cells/cells-page-mixin';
import { html, LitElement } from 'lit-element';
import { BbvaCoreIntlMixin as intl } from '@bbva-web-components/bbva-core-intl-mixin';
import { bbvaInternational } from '@bbva-web-components/bbva-foundations-icons';
import '@bbva-web-components/bbva-core-heading/bbva-core-heading.js';
import '@meraki/pokemones-ui/pokemones-ui.js';
import styles from './home-page-styles.js';

const icons = bbvaInternational();

const DEFAULT_I18N_KEYS = {
  title: 'home-page.title',
};


class HomePage extends intl(cellsPage(LitElement)) {
  static get is() {
    return 'home-page';
  }

  static get properties() {
    return {
      i18nKeys: {
        type: Object,
        attribute: false,
      },
      mainIcon: {
        type: String,
        attribute: 'main-icon',
      },
    };
  }

  static get styles() {
    return [ styles ];
  }

  constructor() {
    super();
    this.mainIcon = icons;
    this.i18nKeys = { ...DEFAULT_I18N_KEYS };
  }


  render() {
    return html`
      <demo-web-template
        page-title="Catalogo Pokemon"
      >
      
        <div slot="app-top-content" >
          
        
          <div class="contenido">
            <bbva-core-icon icon="${this.mainIcon}"></bbva-core-icon>
            <h1>${this.t(this.i18nKeys.title)}</h1>
          </div>
          <pokemones-ui></pokemones-ui>
        </div>

        <div slot="app-main-content"></div>
      </demo-web-template>
    `;
  }

}

window.customElements.define(HomePage.is, HomePage);
