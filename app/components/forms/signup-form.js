import Component from '@ember/component';
import { inject as service } from '@ember/service';
import EmberObject from '@ember/object';

export default Component.extend({
  store: service(),
  firebaseApp: service(),
  session: service(),
  tagName: 'form',
  classNames: ['signup-form'],
  data: EmberObject.create({
    name: '', email: '', password: '', passwordConfirm: ''
  }),
  loading: false,
  error: '',
  input() {
    this.set('error', '');
  },
  resetPassword() {
    this.data.setProperties({ password: '', passwordConfirm: '' });
  },
  submit() {
    this.setProperties({ loading: true, error: '' });

    const { name, email, password, passwordConfirm } = this.data;

    if (password !== passwordConfirm) {
      this.setProperties({ loading: false, error: 'Hesla se musí shodovat!' });
      this.resetPassword();
      return false;
    }

    const auth = this.get('firebaseApp').auth();
    auth.createUserWithEmailAndPassword(email, password).then(response => {
      const user = this.get('store').createRecord('user', {
        name, email, id: response.uid
      });
      user.save().then(() => {
        this.get('session').open('firebase', {
          provider: 'password', email, password
        });
        this.close();
      }, () => {
        this.set('loading', false);
      });
    }, error => {
      this.setProperties({
        loading: false, error: error
      });
      if (error.code === 'auth/weak-password') {
        this.resetPassword();
      }
    });

    return false;
  }
});
