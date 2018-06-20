import Service from '@ember/service';

export default Service.extend({
  name: '',
  model: null,
  options: null,
  isOpen: false,
  show(name = '', model = null, options = {}) {
    this.setProperties({ name, model, options, isOpen: true });
    document.body.classList.add('no-scroll');
  },
  close() {
    this.setProperties({ name: '', model: null, options: {}, isOpen: false });
    document.body.classList.remove('no-scroll');
  }
});
