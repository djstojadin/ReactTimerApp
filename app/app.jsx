var React = require('react');
var ReactDOM = require('react-dom');
//object destructuring
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
// old way var Route = require('react-router').Route;
var Main = require('Main');

// Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css')
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      {/* <Route path="timer" component={Timer}/>
      <Route path="countdown" component={Countdown}/> */}
    </Route>
  </Router>,
  document.getElementById('app')
);
