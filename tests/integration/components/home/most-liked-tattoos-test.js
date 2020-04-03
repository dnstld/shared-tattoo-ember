import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | home/most-liked-tattoos', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    await render(hbs`<Home::MostLikedTattoos />`);

    assert.dom('[data-test-most-liked-tattoos]').exists();
    assert.dom('[data-test-most-liked-tattoos="title"]').hasText('Most liked tattoos');
  });
});
