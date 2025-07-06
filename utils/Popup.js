export default class Popup {
  constructor({ popupSelector }) {
    this.popupElement = document.querySelector(popupSelector);
    this._popupCloseButton = this.popupElement.querySelector(".popup__close");
    this._handleEscapeClose = this._handleEscapeClose.bind(this);
  }
  open() {
    this.popupElement.classList.add("popup_visible");
    document.addEventListener("keydown", this._handleEscapeClose);
  }
  close() {
    this.popupElement.classList.remove("popup_visible");
    document.removeEventListener("keydown", this._handleEscapeClose);
  }

  _handleEscapeClose(evt) {
    if (evt.key === "Escape") {
      this.close();
    }
  }

  setEventListeners() {
    this.popupElement.addEventListener("mousedown", (evt) => {
      if (evt.target === this.popupElement || evt.target === this._popupCloseButton) {
        this.close();
      }
    });
  }
}
