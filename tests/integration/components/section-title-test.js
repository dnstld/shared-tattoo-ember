import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | section-title', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(2);

    await render(hbs`
      <SectionTitle @title="template block text" />
    `);

    assert.dom('[data-test-section-title]').hasText('template block text');
    assert.dom('[data-test-section-title="icon"]').doesNotExist('icon is not rendered');
  });

  test('it renders with an icon', async function(assert) {
    assert.expect(2);

    await render(hbs`
      <SectionTitle @title="template block text" @icon="iconName" />
    `);

    assert.dom('[data-test-section-title]').hasText('template block text');
    assert.dom('[data-test-section-title="icon"]').exists('icon is not rendered');
  });
});
