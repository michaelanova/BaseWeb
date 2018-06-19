import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default Component.extend({
	store: service(),
	tagName: 'form',
  classNames: ['category-form', 'form'],
  category: null,
  error: '',
  success: '',
  submit() {
    let category = this.get('category');
    console.log(category);
  	category.save().then(category => {
  		console.log(category);
  		this.set(success, 'Kategorie byla uložena.');
  	}, error => {
  		this.set(error, error);
  	}).finally(() => {
  		console.log('ok');
  	 }
    );
  }
});
