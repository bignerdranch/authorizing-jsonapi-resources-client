import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('video-game-list', 'Integration | Component | video game list', {
  integration: true
});

test('it renders', function(assert) {
  this.set('testGames', [
    {title: 'Foo'},
    {title: 'Bar'},
  ]);

  this.render(hbs`{{video-game-list games=testGames}}`);

  assert.equal(this.$('.video-game').text(), 'FooBar');
});
