import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteGame(game) {
      game.destroyRecord().catch(() => alert("Error deleting game."));
    }
  }
});
