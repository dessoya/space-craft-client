
var HashNavigator	= require('HashNavigator')
  , Section1		= require('Section1')
  , Menu			= require('Menu')

module.exports = function() {

	document.querySelector('body').innerHTML = require('layout.html')()

	var navigator = new HashNavigator.Navigator

	navigator.addSection(new Section1)

	var menu = new Menu.Menu([ {title: 's1', hash: 's1' }, {title: 's2', hash: 's2' } ])
	navigator.addPlugin(menu)
	menu.place('#section_menu')

	console.log(navigator)

	navigator.start()
}
