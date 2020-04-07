import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | home/jumbotron', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(8);

    await render(hbs`<Home::Jumbotron />`);

    assert.dom('[data-test-jumbotron]').exists();
    assert.dom('[data-test-jumbotron="neon"]').exists();
    assert.dom('[data-test-jumbotron="title"]').hasText('Sharing daily the world\'s greatest tattoos');
    assert.dom('[data-test-jumbotron="subtitle"]').hasText('Awesome ideas for your next tattoo.');
    assert.dom('[data-test-jumbotron="instagram-link"]').hasText('instagram');
    assert.dom('[data-test-jumbotron="instagram-link"]').hasAttribute('href', 'https://www.instagram.com/sharedtattoo/');
    assert.dom('[data-test-jumbotron="facebook-link"]').hasText('facebook');
    assert.dom('[data-test-jumbotron="facebook-link"]').hasAttribute('href', 'https://www.facebook.com/sharedtattoo/');
  });
});
