# Simple Todo App
---

## Functionality

This project is a **To-Do List web application** that allows users to manage their tasks efficiently. The core features and functionality include:

- **Add New Tasks:**  
  Users can add new to-do items by clicking the “Add” button, which opens a popup form. The form collects the task name and an optional due date.

- **Form Validation:**  
  The popup form uses real-time validation. Users receive immediate feedback if they try to submit an empty or invalid field. The submit button is disabled until all fields are valid.

- **Task Rendering:**  
  Each to-do item is rendered as a card in the task list. The card displays the task name, due date, a checkbox to mark completion, and a delete button.

- **Mark as Complete:**  
  Users can check or uncheck the box to mark a task as completed. This updates the task’s state visually and in the underlying data.

- **Delete Tasks:**  
  Each task card has a delete button, allowing users to remove tasks from the list instantly.

- **Popup Management:**  
  The popup can be closed by clicking the close button. When closed, the form resets and validation errors are cleared.

- **Accessibility & UX:**  
  The app uses proper label associations, keyboard accessibility, and smooth transitions for popups and form elements.

---

## Technology

This project is built using modern web technologies and best practices:

- **HTML5:**  
  Semantic markup for structure and accessibility.

- **CSS3 (BEM Methodology):**  
  Modular, reusable CSS using the Block-Element-Modifier convention.  
  Responsive design ensures usability on both desktop and mobile devices.

- **JavaScript:**  
  - **Modular Structure:**  
    Uses ES6 modules to organize code into reusable components (`Todo`, `FormValidator`, etc.).
  - **OOP Principles:**  
    The `Todo` and `FormValidator` classes encapsulate logic for tasks and form validation, respectively.
  - **Event Handling:**  
    Listeners for form submission, popup open/close, keyboard events, and dynamic UI updates.
  - **UUID Generation:**  
    Each task is assigned a unique ID using the `uuid` library for reliable identification.

- **Validation & Error Handling:**  
  Real-time form validation with clear error messages and visual cues.

- **Accessibility:**  
  - Proper use of labels and ARIA attributes.

## Deployment

This project is deployed on GitHub Pages:

- https://cdmstr-kev.github.io/se_project_todo-app/

### Example Screenshots

**Add Task Popup:**  
<img width="2055" alt="Screenshot 2025-06-25 at 13 59 32" src="https://github.com/user-attachments/assets/37cb25ae-6152-413d-bc35-a0b1090df2eb" />
<img width="2055" alt="Screenshot 2025-06-25 at 13 59 14" src="https://github.com/user-attachments/assets/7974c349-43a8-491b-8ac9-238903e90377" />





**Task List Example:**  
<img width="2056" alt="Screenshot 2025-06-25 at 14 11 33" src="https://github.com/user-attachments/assets/e63b067d-d07a-4d48-a675-b6fbe1290bee" />





---

### Techniques Highlighted

- **Separation of Concerns:**  
  UI logic, validation, and data management are separated into different modules/classes.
- **Reusable Components:**  
  The `Todo` class can be used to render any task, and `FormValidator` can be applied to any form with minimal configuration.
- **Responsive & Accessible UI:**  
  CSS ensures the app looks good and works well on all devices and for all users.
---
