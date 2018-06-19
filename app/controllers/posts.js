import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
	queryParams: ['category'],
  category: null,

  filteredPosts: computed('category', 'model', function() {
    let category = this.get('category');
    console.log(category);
    let posts = this.get('model');
    console.log(posts);

    if (category) {
      return posts.filterBy('category.id', category);
    } else {
      return posts;
    }
  })
});
