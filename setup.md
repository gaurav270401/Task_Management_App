# Project Setup and Run Documentation
## Introduction
Welcome to the documentation for the Task Management App built with React, utilizing localStorage for data persistence. This guide will walk you through the setup process and running the application locally.

## Prerequisites
Before getting started, ensure you have the following installed on your machine:

1. Node.js: Download Node.js
2. npm (Node Package Manager): Comes with Node.js installation.
3. You need to have a good editor to work with the project files. You can install, use, and create a React app in Visual Studio Code.

## Steps to Build React App with Create React App
### Step 1: Install Create React App
For Create React App installation, you need to follow this step-by-step tutorial.

First, you need to open the command line to use create-react-app.

You can use npx to create new React app.

npm version >= 5.2

Well, using npx, you can use the create-react-app package without installing it first on your system. This is very convenient for newbie React developers.

Utilizing npx guarantees that we will be using the most recent Create React App version to create a React project:

**npx create-react-app my-first-react-app**

The execution of the above command will help you create a folder name with “my-first-react-app” automatically on your system. And all the required packages will be installed, too.

### Step 2: Overview of React App Structure
After the installation of the required project files, your project structure may look something like this:

my-first-react-app

├── README.md

├── node_modules

├── package.json

├── .gitignore

├── public

│ ├── favicon.ico

│ ├── index.html

│ ├── logo192.png

│ ├── logo512.png

│ ├── manifest.json

│ └── robots.txt

└── src

├── App.css

├── App.js

├── App.test.js

├── index.css

├── index.js

├── logo.svg

├── serviceWorker.js

└── setupTests.js

### Step 3: Starting the React App Development Server
To run your React project, we need to open the command line. Go to the View option in VSCode and then click on Terminal.

Execute the below command to run a React project:

npm start

When we run create-react-app, we just have to run npm start in the app directory to start serving the development server. We will see a new browser opening with localhost:3000.

You will see something like the image below on the screen:
![image](https://github.com/gaurav270401/Task_Management_App/assets/133756033/7516020b-4180-4380-9607-7744d66b81cf)


New real-time window of React App

Any changes to the source code will be updated in real-time here.
