import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createGame() {
      let title = this.get('title');
      this.get('createGame')(title, () => {
        this.set('title', '');
      });
    }
  }
});
