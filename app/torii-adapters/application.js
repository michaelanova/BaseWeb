import ToriiFirebaseAdapter from 'emberfire/torii-adapters/firebase';
import { inject as service } from '@ember/service';

export default ToriiFirebaseAdapter.extend({
  currentUser: service(),
  open(authorization) {
    return this.get('currentUser').load(authorization.uid);
  },
  close() {
    this.get('currentUser').unload();
    return this._super();
  }
});