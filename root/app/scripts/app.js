var App = Em.Application.create({
  data: []
});

// wait until data is loaded
App.initializer({
  name: 'data',
  initialize: function (container){
    App.deferReadiness();
    $.get('/api/data.json', function (res){
      res.data.forEach(function (item){
        App.data.push(App.Item.create(item));
      });
      App.advanceReadiness();
    });
  }
});

App.Router.map(function(){
  this.resource('items', function (){
    this.resource('item', {path: ':item_id'});
  });
});

App.IndexRoute = Em.Route.extend({
  redirect: function(){
    this.transitionTo('items');
  }
});

App.ItemsRoute = Ember.Route.extend({
  model: function() {
    return App.data;
  }
});

App.ItemRoute = Ember.Route.extend({
  model: function(id) {
    return App.data[id.item_id - 1];
  }
});

App.Item = Ember.Object.extend({
  id: null,
  name: null,
  link: null,
  description: null
});
