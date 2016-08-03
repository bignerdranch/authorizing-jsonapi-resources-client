import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    editGame(game) {
      game.set('beingEdited', true);
    },
    saveGame(game) {
      this.get('saveGame')(game, () => {
        game.set('beingEdited', false);
      });
    },
    cancelEditing(game) {
      this.get('cancelEditing')(game, () => {
        game.set('beingEdited', false);
      });
    },
    deleteGame(game) {
      if(confirm(`Are you sure you want to delete ${game.get('title')}?`)) {
        this.get('deleteGame')(game);
      }
    }
  }
});
