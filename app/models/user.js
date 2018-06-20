import DS from 'ember-data';

export default DS.Model.extend({
	admin: DS.attr('boolean', { defaultValue: false }),
	email: DS.attr('string'),
	name: DS.attr('string')
});
