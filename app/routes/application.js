import Route from '@ember/routing/route';
import { hash } from 'rsvp';
import { inject as service } from '@ember/service';

export default Route.extend({
	firebaseApp: Ember.inject.service(),
	session: service(),
	modal: service(),
	currentUser: service(),
	beforeModel() {
		console.log('beforeModel');
	  	this.get('session').fetch().catch(() => {});
	 
    	//return this.get('session').fetch().catch(function() {});  
	},
	model() {
		return hash({
			categories: this.store.findAll('category')
		});
	},
	activate() {
	  	//document.querySelector('body > .loader').classList.remove('active');
	},
	setupController(controller) {
	  	this._super(...arguments);
	  	controller.set('currentUser', this.get('currentUser'));
	},
	actions: {
		transitionTo() {
	      	this.transitionTo(...arguments);
	    },
	    signOut() {
	      this.get('session').close();
	    }
	}
});
