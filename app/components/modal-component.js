import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default Component.extend({
  modal: service(),
  classNames: ['modal-component'],
  classNameBindings: ['isOpen', 'options.isSmall', 'options.isBig'],
  name: alias('modal.name'),
  model: alias('modal.model'),
  options: alias('modal.options'),
  isOpen: alias('modal.isOpen'),
  actions: {
    close() {
      this.get('modal').close();
    }
  }
});
