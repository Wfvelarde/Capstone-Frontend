import Ember from 'ember';

export default Ember.Component.extend({
    welcome: function(){
            this.$(".message1").fadeIn("slow").delay(3000).fadeOut(3000, () => {
                this.hello();
            });
    }.on("didInsertElement"),
    hello: function(){
        this.$(".message2").fadeIn("slow").delay(3000).fadeOut(3000, () => {
            this.welcome();
        });
    }
});
