import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('fadein-fadeout', 'Integration | Component | fadein fadeout', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{fadein-fadeout}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#fadein-fadeout}}
      template block text
    {{/fadein-fadeout}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
