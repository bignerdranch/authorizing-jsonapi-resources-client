import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createGame(title, callback) {
      let game = this.store.createRecord('video-game', {title: title});
      game.save().then(() => callback());
    },
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
