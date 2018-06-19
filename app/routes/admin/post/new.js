import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
	model() {
	    return hash({
		    post: this.store.createRecord('post'),
		    categories: this.store.findAll('category')
	    });
	}
});
