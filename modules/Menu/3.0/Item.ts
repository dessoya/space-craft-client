
// use: IItem.ts

export class Item extends UI_Control.Control {

	private _item: IItem
	constructor(item: IItem) {
		super()
		this._item = item
	}

	onHashChange(hash: string) {
		console.log('Menu.Item.onHashChange ' + this._item.title + ' ' + hash)
	}

	render(): string {
		return require('Item.html')({ item: this._item, id: this.elemId })
	}

}