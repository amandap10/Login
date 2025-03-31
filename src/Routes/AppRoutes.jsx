import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import Home from "../page/Home";
import Login from "../page/Login";
import Room from "../page/Room";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path="/" element={<Login />} />
        <Route path='/room' element={<Room /> } />
      </Routes>
    </Router>
  );
}

export default AppRoutes;