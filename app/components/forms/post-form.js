import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default Component.extend({
	store: service(),
	tagName: 'form',
	classNames: ['post-form', 'form'],
	post: null,
	categories: null,
	error: '',
	success: '',
	submit() {
	  	let post = this.get('post');
	  	console.log(post);
	 	post.save().then(post => {
	  		console.log(post);
	  		this.set(success, 'Kategorie byla uložena.');
	 	}, error => {
	  		this.set(error, error);
	 	}).finally(() => {
	  		console.log('ok');
	  	});
	}
});
