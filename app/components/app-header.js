import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
	router: service(),
	tagName: 'nav',
	classNames: ['app-header'],
	categories: null,
	notPrivateCategories: computed('categories', function() {
	    let categories = this.get('categories');
	    console.log(categories);
	    return categories.filterBy('private', false);
	}),
	actions: {
		toCategory(cat) {
			console.log('sfsdaf');
			this.sendAction('transitionTo', 'posts', { queryParams: { category: cat.id } });
			/*this.router.transitionTo('posts', {
		        queryParams: { category: cat }
		    });*/
		}
	}
});
