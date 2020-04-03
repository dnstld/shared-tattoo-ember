import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | home/about-us', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(4);

    await render(hbs`<Home::AboutUs />`);

    assert.dom('[data-test-about-us]').exists();
    assert.dom('[data-test-about-us="title"]').hasText('About us');

    assert.dom('[data-test-about-us="link-denis"]').hasAttribute('href', 'https://www.instagram.com/denistoledo.dev/');
    assert.dom('[data-test-about-us="img-denis"]').hasAttribute('src', 'assets/images/denis-toledo.jpg');
  });
});
