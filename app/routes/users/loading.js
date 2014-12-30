import Ember from 'ember';

export default Ember.Route.extend({

  renderTemplate: function() {
    this.render('loading', { // the loading template
      outlet: 'master',      // place into the 'master' outlet
    });
  }

});
