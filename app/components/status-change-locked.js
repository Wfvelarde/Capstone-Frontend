import Ember from 'ember';

export default Ember.Component.extend({
    ajax: Ember.inject.service(),
    click: function(){
        return this.get('ajax').put('https://sleepy-brushlands-11143.herokuapp.com/lockstatuses/58e69449a1556d0011718c10', {
            data: {
                status: 'closed'
            }
        })
    }
});
