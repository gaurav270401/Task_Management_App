// import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';
import CRUDforMe from './components/CRUDforMe';
import AddTask from './components/AddTask';
import CrudTasks from './components/TaskList';
import EditTask from './components/EditTask';
import {BrowserRouter,Routes,Route} from 'react-router-dom';  //BrowserRouter package used for change data w.r.t change in url.Routes used to wrap which componenets we have to route.Route package is for mention path for each component where to route.


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <NavBar />
      <Routes>     
        <Route path='/' element={<CRUDforMe />} />
      
        <Route path='/crudtasks' element={<CrudTasks />} />
          <Route path='/edittask/:taskId' element={<EditTask />} />
          <Route path='/addtask' element={<AddTask />} />
      
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}


export default App;
