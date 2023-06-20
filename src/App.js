// import logo from './logo.svg';
// import './App.css';
import Loginform from './component/Loginform';
 import {
  BrowserRouter as Router,
  Route,
  Routes,
 } from "react-router-dom";
import ValidAccess from "./component/ValidAccess";
 import NotFound from './component/NotFound';

function App() {
  return (
    <Router>
    <div className="React-Form">
      
      
      <Routes>
        <Route path = "/" element={<Loginform/>} />
         <Route path = "/ValidAccess" element={<ValidAccess/>} />
         
         <Route path = "/NotFound" element={<NotFound/>} />
      </Routes>
     
    </div>
    </Router>
  );
}

export default App;
