import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel(){
        this.replaceWith('landing-page');
    }
});
