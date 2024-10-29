/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`
:host {
  display: block;
  box-sizing: border-box;
  font-size: var(--typographyTypeSmall, ${unsafeCSS(foundations.typography.typeSmall)});
  line-height: var(--lineHeightTypeSmall, ${unsafeCSS(foundations.lineHeight.typeSmall)});
}

:host([hidden]),
[hidden] {
  display: none !important;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

.language-settings {
  list-style: none;
  margin: 0;
  padding: 0;
}

.contenido {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
}

h1 {
  margin: 0;
  font-size: 40px;
}
`;
