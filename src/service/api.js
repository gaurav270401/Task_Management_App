// api.js

const localStorageKey = 'taskData';
const generateTaskId = () => {
  const taskIdCounter = parseInt(localStorage.getItem('taskIdCounter')) || 0;
  const taskId = taskIdCounter + 1;
  localStorage.setItem('taskIdCounter', taskId);
  return taskId;
};

export const addTask = (data) => {
  try {
    const storedData = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    const taskId = generateTaskId();
    const newTask = { ...data, taskId };
    const newData = [...storedData, newTask];
    localStorage.setItem(localStorageKey, JSON.stringify(newData));
    return Promise.resolve({ data: newTask }); // Return a resolved Promise with the updated data
  } catch (error) {
    console.error("Error while adding task to localStorage", error);
    return Promise.reject(error); // Return a rejected Promise with the error
  }
};

export const getTasks = () => {
  try {
    const storedData = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    return Promise.resolve({ data: storedData }); 
  } catch (error) {
    console.error("Error while getting task data from localStorage", error);
    return Promise.reject(error); 
  }
};

export const getTaskDetails = (id) => {
  try {
    const storedData = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    
    const task = storedData.find((item) =>{
      
      return item.taskId === Number(id);
    } );
    return Promise.resolve({ data: task }); 
  } catch (error) {
    console.error("Error while getting task details from localStorage", error);
    return Promise.reject(error);
  }
};

export const editTask = (data, id) => {
  try {
    const storedData = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    const updatedData = storedData.map((task) => (task.taskId === Number(id) ? { ...task, ...data } : task));
    localStorage.setItem(localStorageKey, JSON.stringify(updatedData));
    return Promise.resolve({ data: updatedData }); 
  } catch (error) {
    console.error("Error while editing task in localStorage", error);
    return Promise.reject(error); 
  }
};

export const deleteTask = (id) => {
  try {
    const storedData = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    const updatedData = storedData.filter((taskData) => taskData.taskId !== id);
    localStorage.setItem(localStorageKey, JSON.stringify(updatedData));
    return Promise.resolve({ data: updatedData }); 
  } catch (error) {
    console.error("Error while deleting task from localStorage", error);
    return Promise.reject(error); 
  }
};

