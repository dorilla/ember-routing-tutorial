import Ember from 'ember';

export default Ember.Route.extend({

  renderTemplate: function() {
    this.render('loading', { // the loading template
      outlet: 'detail',      // place into the 'detail' outlet
    });
  }

});
