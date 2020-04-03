import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | neon', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    await render(hbs`<Neon />`);

    assert.dom('[data-test-neon]').hasText('TATTOO');
    assert.dom('[data-test-neon]').hasClass('neon');
  });
});
