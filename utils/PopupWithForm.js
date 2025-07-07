import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, handleFormSubmit }) {
    super({ popupSelector });
    this._handleFormSubmit = handleFormSubmit;
    this._form = this.popupElement.querySelector(".popup__form");
    this.inputValues = this._form.querySelectorAll(".popup__input");
  }

  _getInputValues() {
    const inputValues = {};

    this.inputValues.forEach((input) => {
      inputValues[input.name] = input.value;
    });

    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      const formData = this._getInputValues();

      this._handleFormSubmit(formData);
    });
  }
}
