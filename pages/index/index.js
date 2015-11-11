
var HashNavigator	= require('HashNavigator')
  , Section1		= require('Section1')

module.exports = function() {

	document.querySelector('body').innerHTML = require('layout.html')()

	var navigator = new HashNavigator.Navigator

	navigator.add(new Section1)

	navigator.start()

	console.log(navigator)

}
