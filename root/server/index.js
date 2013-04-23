/**
 * {%= js_test_safe_name %}
 * -------------------------
 * @author: {%= author_name %} <{%= author_email %}>
 * @date: date
 */ 'use strict';

var http = require('http')
  , express = require('express')

var app = express()
var json = require('./data.json')

/* Default configuration */
app.use(express.static(__dirname + '/../app'))
app.set('port', process.env.PORT || 8080)
app.set('name', '{%= js_safe_name %}')

app.get('/api/data.json', function (req, res){
  res.json({
    data: json
  })
})
http.createServer(app).listen(app.get('port'), function(){
  console.log('{%= js_safe_name %} running on %d', this.address().port)
})


