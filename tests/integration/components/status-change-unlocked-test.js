import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('status-change-unlocked', 'Integration | Component | status change unlocked', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{status-change-unlocked}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#status-change-unlocked}}
      template block text
    {{/status-change-unlocked}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
