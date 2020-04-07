import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service intl;

  async beforeModel() {
    await super.beforeModel(...arguments);

    let locale = this.handleLocale();
    return this.intl.setLocale([locale]);
  }

  handleLocale() {
    const locales = this.intl.get('locales');
    const userLanguage = navigator.languages[0] || navigator.language || navigator.userLanguage;

    return locales.includes(userLanguage.toLowerCase()) ? userLanguage : 'en-us';
  }
}
