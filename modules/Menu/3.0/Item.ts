
// use: IItem.ts

export class Item extends UI_Control.Control {

	private _item: IItem
	private _state: boolean = false

	constructor(item: IItem) {
		super()
		this._item = item
	}

	onHashChange(hash: string) {
		var state: boolean = this._item.hash === hash
		if (this._state !== state) {			
			this.el.classList[ (this._state = state) ? 'add' : 'remove']('active')
		}
	}

	render(): string {
		return require('Item.html')({ item: this._item, id: this.elemId })
	}

}