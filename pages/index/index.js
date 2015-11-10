
var HashNavigator	= require('HashNavigator')

module.exports = function() {

	document.querySelector('body').innerHTML = require('layout.html')()

	var navigator = new HashNavigator.Navigator

	class Section1 extends HashNavigator.Section {
		getRE() {
			return 's1'
		}
	}

	navigator.add(new Section1)

	navigator.start()

	console.log(navigator)

}
