import '../../Styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from '../Nav/Nav';
import TaskList from '../TaskList/TaskList';
import CreateTask from '../CreateTask/CreateTask';

function App() {
  return (
    <Router>
      <div className="container">
        <Nav/>
        <Routes>
          <Route path="/" element={<TaskList/>} />
          <Route path="/create" element={<CreateTask/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
