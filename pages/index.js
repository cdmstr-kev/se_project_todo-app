import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import Todo from "../components/Todo.js";
import { initialTodos, validationConfig } from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../utils/Section.js";
import PopupWithForm from "../utils/PopupWithForm.js";

const addTodoButton = document.querySelector(".button_action_add");
// const addTodoPopup = document.querySelector("#add-todo-popup");
const addTodoForm = document.forms["add-todo-form"]


const addTodoPopupWithForm = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  submitCallback: (formData) => {
    // const id = uuidv4();
    // const values = { ...formData, id };
    // renderTodo(values);
  }
});

const newTodoFormValidator = new FormValidator(validationConfig, addTodoForm);


newTodoFormValidator.enableValidation();

// The logic in this function should all be handled in the Todo class.
const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template");
  const todoElement = todo.getView();
  return todoElement;
};

const section = new Section({
  items: initialTodos,
  renderer: function (data) {
    const todoElement = generateTodo(data);
    section.addItem(todoElement);

  },
  containerSelector: ".todos__list"
});

section.renderItems(); // This will render the initial todos

addTodoButton.addEventListener("click", () => {
  addTodoPopupWithForm.open();
});

addTodoPopupWithForm.setEventListeners();
addTodoPopupWithForm._handleEscapeClose(); // Ensure escape key closes the popup

const renderTodo = (data) => {
  const todoElement = generateTodo(data);
  section.addItem(todoElement);

}

addTodoForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const name = evt.target.name.value;
  const dateInput = evt.target.date.value;

  // Create a date object and adjust for timezone
  const date = new Date(dateInput);
  date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

  const id = uuidv4();
  const values = { name, date, id };
  renderTodo(values);

  newTodoFormValidator.resetValidation();
  addTodoPopupWithForm.close();
});
