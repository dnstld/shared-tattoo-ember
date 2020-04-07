import Controller from '@ember/controller';
import config from '../config/environment';
import { inject as service } from '@ember/service';
import { lookupByFactoryType } from 'ember-intl/hydrate';
import { action } from '@ember/object';
import { computed } from '@ember/object';

const { modulePrefix } = config;

export default class ApplicationController extends Controller {
  @service intl;

  @computed('intl.locale').readOnly()
  get activeLocale() {
    return this.intl.locale;
  }

  @computed().readOnly()
  get locales() {
    return lookupByFactoryType('translations', modulePrefix).map(moduleName => moduleName.split('/').pop());
  }

  @computed('locales.[]', 'activeLocale').readOnly()
  get selections() {
    const active = this.activeLocale;

    return this.locales.map(locale => {
      return {
        locale: locale,
        active: active.indexOf(locale) > -1
      };
    });
  }

  @action
  changeLocale(locale) {
    return this.intl.locale = locale;
  }
}
