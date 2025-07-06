import Popup from "./popup.js";
import { v4 as uuidv4 } from "https://jspm.dev/uuid";

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

    const date = new Date(inputValues.date);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());


    const id = uuidv4();

    return { name: inputValues.name, date: date, id };
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
