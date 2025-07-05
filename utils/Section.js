export default class Section {
    //run console.log on the constructor to verify that 
    // you have everything set up correctly when you get on the computer
    constructor ({items,renderer,containerSelector}) {
       console.log(this._items = items);
        console.log(this._renderer = renderer);
        console.log(this._container = document.querySelector(containerSelector));
    }

    renderItems() {
        this._items.forEach(item => {
            this._renderer(item);
        });
    }

    addItem (element) {
        this._container.append(element);
    }

}