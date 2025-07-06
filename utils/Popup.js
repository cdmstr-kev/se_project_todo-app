export default class Popup {
    constructor({popupSelector}) {
        this.popupElement = document.querySelector(popupSelector);
        this._popupCloseButton = this.popupElement.querySelector(".popup__close");
    }
    open() {
        this.popupElement.classList.add("popup_visible");
    }
    close() {
        this.popupElement.classList.remove("popup_visible");
        document.removeEventListener("keydown", this._handleEscapeClose);
    }

    _handleEscapeClose() {
        document.addEventListener("keydown", (evt) => {
            if (evt.key === "Escape") {
                this.close();
            }
        });
    }


    setEventListeners() {

        this._popupCloseButton.addEventListener("click", () => {
                this.close();
        });

        // Close popup when clicking outside of the content area
        this.popupElement.addEventListener("click", (evt) => {
            if (evt.target === this.popupElement) {
                this.close();
            }
        });
    }

}