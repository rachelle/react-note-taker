var React = require('react'); 
var Main = require('../components/Main'); 
var Home = require('../components/Home'); 
var Router = require('react-router'); 
var DefaultBrowser = Router.DefaultRoute; 
var Route = Router.route; 

module.exports = ( 
  <Route name="app" path="/" handler={Main}>

  </Route> 
); 