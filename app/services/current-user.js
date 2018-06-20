import Service from '@ember/service';
import { inject as service } from '@ember/service';
import { Promise as EmberPromise } from 'rsvp';
import { bool } from '@ember/object/computed';
import { tryInvoke } from '@ember/utils';

export default Service.extend({
  store: service(),
  user: null,
  verifiedAddress: null,
  load(uid) {
    return new EmberPromise((resolve, reject) => {
      this.get('store').findRecord('user', uid).then(user => {
        this.set('user', user);
      }, reject);
    });
  },
  unload() {
    this.set('user', null);

    /*['order', 'order-item', 'user', 'verified-address'].forEach(modelName => {
      this.get('store').peekAll(modelName).forEach(model => {
        tryInvoke(model, 'unloadRecord');
      });
    });*/
  },
  isAdmin: bool('user.admin')
});
