import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default Route.extend({
	model() {
	    return hash({
		    post: this.store.findRecord('post', params.post_id),
		    categories: this.store.findAll('category')
	    });
	}
});
