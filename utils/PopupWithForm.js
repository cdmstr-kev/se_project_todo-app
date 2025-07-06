import Popup from "./popup.js"; 
import { v4 as uuidv4 } from "https://jspm.dev/uuid";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, submitCallback }) {
    super({ popupSelector });
    this._submitCallback = submitCallback;
  }

  _getInputValues() {
    // const nameInput = this.popupElement.querySelector("#todo-name").value;
    // const dateInput = this.popupElement.querySelector("#todo-date").value;

    // console.log(nameInput);
    // console.log(dateInput);

    // // Create a date object and adjust for timezone
    // // const date = new Date(dateInput);
    // // date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

    // const id = uuidv4();
    // const values = { name: nameInput, dateInput, id };
    // console.log("Values to submit:", values);
    // // return values;
  }

  setEventListeners() {
    super.setEventListeners();

    // this.popupElement.addEventListener("submit", (evt) => {
    //   evt.preventDefault();
    //   const formData = this._getInputValues();
    //   console.log("Form Data:", formData);
    // //   this._submitCallback(formData);
    // });
  }
}

//continue from trying to import the input values from the form in PopupWithForm.js