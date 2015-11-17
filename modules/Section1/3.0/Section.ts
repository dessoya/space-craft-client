
var i = 1

export class Section extends HashNavigator.Section {
	public hashRE: string = 's1'

	_activate() {
		console.log('Section1 ' + i++)
	}
}
 