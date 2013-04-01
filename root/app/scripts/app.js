var App = Em.Application.create()

App.Router.map(function(){
  this.resource('items', function (){
    this.resource('item', {path: ':item_id'})
  })
})

App.IndexRoute = Em.Route.extend({
  redirect: function(){
    this.transitionTo('items')
  }
})

App.ItemsRoute = Em.Route.extend({
  model: function() {
    return data
  }
});

App.ItemRoute = Ember.Route.extend({
  model: function(id) {
    return data[id.item_id - 1]
  }
});

var data = [
  {
    id: 1,
    name: 'Handlebars',
    link: 'http://handlebarsjs.com',
    description: 'Handlebars provides the power necessary to let you build semantic templates effectively with no frustration.'
  }, {
    id: 2,
    name: 'Ember.js',
    link: 'http://emberjs.com',
    description: 'A framework for creating ambitious web applications'
  }, {
    id: 3,
    name: 'Node.js',
    link: 'http://nodejs.org',
    description:'Node.js is a platform built on Chrome\'s JavaScript runtime for easily building fast, scalable network applications'
  }
]
