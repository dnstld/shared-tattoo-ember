import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | card-most-liked', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(9);

    await render(hbs`
      <CardMostLiked
        @href="href value"
        @src="src value"
        @alt="alt value"
        @year="year value"
        @description="description value"
        @date="date value"/>
    `);

    assert.dom('[data-test-card-most-liked="img"]').hasClass('card-most-liked_img');
    assert.dom('[data-test-card-most-liked="img"]').hasAttribute('style', 'background-image: url(src value);');
    assert.dom('[data-test-card-most-liked="img"]').hasAttribute('role', 'img');
    assert.dom('[data-test-card-most-liked="img"]').hasAttribute('aria-label', 'alt value');

    assert.dom('[data-test-card-most-liked="year"]').hasText('year value');

    assert.dom('[data-test-card-most-liked="description"]').hasText('description value');

    assert.dom('[data-test-card-most-liked="date"]').hasText('date value');

    assert.dom('[data-test-card-most-liked="link"]').hasAttribute('href', 'href value');
    assert.dom('[data-test-card-most-liked="link"]').hasText('See post');
  });
});
