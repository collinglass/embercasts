App.SignupRoute = Ember.Route.extend({
  redirect: function() {
    this.transitionTo('index');
  }
});