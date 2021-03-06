import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('landing-page');
  this.route('lock-login');
  this.route('lock-control');
});

export default Router;
