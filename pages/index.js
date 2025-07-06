import { v4 as uuidv4 } from "https://jspm.dev/uuid";
import Todo from "../components/Todo.js";
import { initialTodos, validationConfig } from "../utils/constants.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../utils/Section.js";
import PopupWithForm from "../utils/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoForm = document.forms["add-todo-form"];
const addTodoPopupWithForm = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (formData) => {
    const date = new Date(formData.date);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

    const newTodoData = {
      name: formData.name,
      date: date,
      id: uuidv4(),
    };
    renderTodo(newTodoData);
    newTodoFormValidator.resetValidation();
    addTodoPopupWithForm.close();
  },
});

const newTodoFormValidator = new FormValidator(validationConfig, addTodoForm);
newTodoFormValidator.enableValidation();

const todoCounter = new TodoCounter(initialTodos, ".counter__text");

function handleCheckboxChange(completed) {
  todoCounter.updateCompleted(completed);
}

function handleDelete(completed) {
  todoCounter.updateTotal(false);
  if (completed) {
    todoCounter.updateCompleted(false);
  }
}

const generateTodo = (data) => {
  const todo = new Todo(
    data,
    "#todo-template",
    handleCheckboxChange,
    handleDelete
  );
  const todoElement = todo.getView();
  return todoElement;
};

const section = new Section({
  items: initialTodos,
  renderer: function (data) {
    const todoElement = generateTodo(data);
    section.addItem(todoElement);
  },
  containerSelector: ".todos__list",
});

section.renderItems();

addTodoButton.addEventListener("click", () => {
  addTodoPopupWithForm.open();
});

addTodoPopupWithForm.setEventListeners();

const renderTodo = (data) => {
  const todoElement = generateTodo(data);
  section.addItem(todoElement);
  todoCounter.updateTotal(true);
};
