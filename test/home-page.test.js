/* eslint-disable import/no-extraneous-dependencies */
import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing';
import '../app/pages/home-page/home-page.js';

suite('home-page', () => {
  let el;
  let elementShadowRoot;

  teardown(() => fixtureCleanup());

  suite('home-page - with no configuration', () => {
    setup(async () => {
      el = await fixture(
        html`
          <home-page></home-page>
        `,
      );
      elementShadowRoot = el.shadowRoot;
      await el.updateComplete;
    });

    test('a11y', () => assert.isAccessible(el));

    test('SHADOW DOM - Structure test', () => {
      assert.shadowDom.equalSnapshot(el);
    });

    test('LIGHT DOM - Structure test', () => {
      assert.lightDom.equalSnapshot(el);
    });
  });
});
