import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    saveGame(game, callback) {
      game.save().then(() => callback())
                 .catch(() => alert("Error saving game."));
    },
    cancelEditing(game, callback) {
      game.rollbackAttributes();
      callback();
    },
    deleteGame(game) {
      game.destroyRecord().catch(() => alert("Error deleting game."));
    }
  }
});
