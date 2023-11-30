# Getting Started with Create Task Management App

This project is a simple task management app built using React. It provides basic functionality for users to manage tasks, including adding, editing, and deleting tasks. The app utilizes local storage to persist tasks between sessions.


# Task Management App

## Table of Contents
1. [Introduction](#introduction)
2. [Project Structure](#project-structure)
3. [Frontend Detail Explanation](#frontend)



## Introduction
This project is a simple task management app built using React. It provides basic functionality for users to manage tasks, including adding, editing, and deleting tasks. The app utilizes local storage to persist tasks between sessions.

## Project Structure
The project is structured as follows:
task-management-app/
|-- public/
|-- src/
| |-- components/
| | |-- TaskList.jsx
| | |-- AddTask.jsx
| | |-- Banner.jsx
| | |-- CRUDforme.jsx
| | |-- EditTask.jsx
| | |-- NavBar.jsx
| |-- service/
| | |-- api.js
| |-- App.js
| |-- index.js
|-- .gitignore
|-- package.json
|-- README.md

- **public/**: Contains static assets and the HTML template.
- **src/**: Contains the React components and the main application files.
  - **components/**: Directory for organizing React components.
  - **App.js**: Main application component.
  - **index.js**: Entry point of the application.

 ## Frontend Detail Explaination.
### !.AddTask.jsx 
  The code appears to be a React component for adding a task. Let's break down the key components and functionalities:

#### Styling Components:
The code uses the styled utility from Material-UI (@mui/material) to create styled components like Container, Title, StyledFormControl, etc. This helps maintain a consistent and visually appealing design.

#### State and Hooks:
The component uses the useState hook to manage the state of the task and isDescriptionFocused.
isDescriptionFocused is used to track whether the description input field is currently focused.

#### Event Handling:
onValueChange function updates the task state when the input values change.
handleFocus and handleBlur functions manage the focus state of the description input field.

#### Task Data and Local Storage:
The task state represents the details of the task, including task name, description, and priority.
The addTaskData function checks if the task name is provided and then adds the task using the addTask function from the service file.
The task details are stored in local storage using localStorage.setItem.

#### Navigation:
The useNavigate hook from "react-router-dom" is used to navigate to the "/crudtasks" route after successfully adding the task.

#### Task Form:
The component renders a form with input fields for task name, task description (with a special styling effect for the label), and a dropdown for priority level.

#### Button:
There's a button labeled "Add Task" that triggers the addTaskData function when clicked.

#### Material-UI Components:
Material-UI components like FormControl, Input, InputLabel, Select, MenuItem, Button, and TextareaAutosize are used for building the form with consistent styling.

#### Default Task and Styling:
The default task is initialized with empty values for taskName, description, and a default priority of "low".
The styling includes responsive design and transitions for a smooth user experience.

Overall, this component provides a clean and structured way to add tasks with Material-UI styling and React functionality. For more clarity, you can refer below images:
![image](https://github.com/gaurav270401/Task_Management_App/assets/133756033/783c52df-4ff4-4f53-be23-3e4b6cf7d195)

![image](https://github.com/gaurav270401/Task_Management_App/assets/133756033/60331e1b-bb4e-4048-ac4b-c3752f033df3)

![image](https://github.com/gaurav270401/Task_Management_App/assets/133756033/3bb6bb35-dd9e-4881-984f-26ea1912f7d6)









