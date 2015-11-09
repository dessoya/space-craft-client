
var Class			= require('class')
  , HashNavigator	= require('HashNavigator')

module.exports = function() {

	document.querySelector('body').innerHTML = require('layout.html')()

	var navigator = new HashNavigator.Navigator

	console.log(navigator)

}
