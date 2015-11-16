
// use: IItem.ts
// use: Item.ts

export class Menu extends UI_Control.Control {

	private _items: Array<IItem>

	constructor(items: Array<IItem>) {
		super()
		this._items = items
	}

	render(): string {
		return require('Menu.html')({ items: this._items, id: this.elemId })
	}

	ap_item(index: number, element: HTMLElement): void {
		var item = new Item(this._items[index])
		item.place(element)
		this.addPlugin(item)
	}
	
}
