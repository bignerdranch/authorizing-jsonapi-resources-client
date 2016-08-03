import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteGame(game) {
      if(confirm(`Are you sure you want to delete ${game.get('title')}?`)) {
        this.get('deleteGame')(game);
      }
    }
  }
});
