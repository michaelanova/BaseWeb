import Component from '@ember/component';
import { inject as service } from '@ember/service';
import EmberObject from '@ember/object';

export default Component.extend({
  session: service(),
  modal: service(),
  tagName: 'form',
  classNames: ['signin-form'],
  data: EmberObject.create({ email: '', password: '' }),
  loading: false,
  error: '',
  input() {
    this.set('error', '');
  },
  submit() {
    this.setProperties({ loading: true, error: '' });

    const { email, password } = this.data;

    this.get('session').open('firebase', {
      provider: 'password', email, password
    }).then((usr) => {
      this.close();
      console.log(usr);
    }, error => {
      this.setProperties({
        loading: false, error: error
      });
      this.data.set('password', '');
    });

    return false;
  },
  actions: {
    /*passwordRecovery() {
      this.modal.show(
        'forms/password-recovery-form', null, { isSmall: true }
      );
    }*/
  }
});
