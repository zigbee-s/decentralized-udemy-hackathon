import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import Explore from "./pages/explore/Explore";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Create from "./pages/create/Create";
import Profile from "./pages/profile/Profile";
import BuyCourse from "./pages/BuyCourse/BuyCourse";
import Course from "./pages/course/Course";
import Login from "./pages/auth/Login";

const App = () => {
  return (
   <>
    <Router>
      <div className="py-4">
      <Navbar/>
      </div>
      <main>
        <Routes>
          <Route path="/" element={<Explore/>} exact/>
          <Route path="/buyCourse" element={<BuyCourse/>} exact/>
          <Route path="/course" element={<Course/>} exact/>
          <Route path="/create" element={<Create/>} exact/>
          <Route path="/profile" element={<Profile/>} exact/>
          <Route path="/login" element={<Login/>} exact/>
          <Route path="*" element={<Navigate to='/' replace/>}/>
        </Routes>
      </main>
      <Footer/>
    </Router>
   </>
  )
}

export default App;
