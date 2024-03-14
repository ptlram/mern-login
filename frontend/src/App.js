
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { useEffect,useState } from 'react';
import Register from "./component/register";
import Login from "./component/login";
import Task from './component/task';

const App = () => {

  const [users, setusers] = useState([]);

  const getdata = async () => {
      try {
          const response = await fetch("http://localhost:5000/api/student");
          const jsonData = await response.json();
          // console.log(jsonData)
          setusers(jsonData);
      } catch (error) {
          console.log(error);
      }
  };


  useEffect(() => {
      getdata();
  }, []);

  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register users={users}/>} />
          <Route path="/login" element={<Login users={users}/>}  />
          <Route path="/task" element={<Task/>}  />
        </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
