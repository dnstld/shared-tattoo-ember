import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | card-most-liked', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(8);

    await render(hbs`
      <CardMostLiked
        @href="href value"
        @src="src value"
        @title="title value"
        @description="description value"
        @date="date value"/>
    `);

    assert.dom('[data-test-card-most-liked="img"]').hasClass('card-most-liked_img');
    assert.dom('[data-test-card-most-liked="img"]').hasAttribute('style', 'background-image: url(src value);');
    assert.dom('[data-test-card-most-liked="img"]').hasAttribute('alt', 'title value');

    assert.dom('[data-test-card-most-liked="title"]').hasText('title value');

    assert.dom('[data-test-card-most-liked="description"]').hasText('description value');

    assert.dom('[data-test-card-most-liked="date"]').hasText('date value');

    assert.dom('[data-test-card-most-liked="link"]').hasAttribute('href', 'href value');
    assert.dom('[data-test-card-most-liked="link"]').hasText('See post');
  });
});
