import 'regenerator-runtime/runtime';
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import React, { useState, useEffect } from 'react';


import Explore from "./pages/explore/Explore";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Create from "./pages/create/Create";
import Profile from "./pages/profile/Profile";
import BuyCourse from "./pages/BuyCourse/BuyCourse";
import Course from "./pages/course/Course";

import './assets/global.css';

import { EducationalText, SignInPrompt, SignOutButton } from './ui-components';
import BuyCourseActual from './pages/BuyCourse/BuyCourseActual';
import CourseActual from './pages/course/CourseActual';


export default function App({ isSignedIn, marketPlace, wallet }) {

  const [uiPleaseWait, setUiPleaseWait] = useState(true);

  // Get blockchian state once on component load
  useEffect(() => {

  }, []);

  /// If user not signed-in with wallet - show prompt
  if (!isSignedIn) {
    // Sign-in flow will reload the page later
    return <SignInPrompt onClick={() => wallet.signIn()} />;
  }


  function getGreeting() {
    // use the wallet to query the contract's greeting
    return wallet.viewMethod({ method: 'get_greeting', contractId })
  }

  return (
    <>
      <SignOutButton accountId={wallet.accountId} onClick={() => wallet.signOut()} />
      <main className={uiPleaseWait ? 'please-wait' : ''}>
        <>
          <Router>
            <Navbar />
            <main>
              <Routes>
                <Route path="/" element={<Explore marketPlace={marketPlace} />} exact />
                <Route path="/buyCourse" element={<BuyCourse />} exact />
                <Route path="/buy/:courseId" element={<BuyCourseActual marketPlace={marketPlace} />} exact />
                <Route path="/course/:courseId" element={<CourseActual />} exact />
                <Route path="/course" element={<Course />} exact />
                <Route path="/create" element={<Create marketPlace={marketPlace} />} exact />
                <Route path="/profile" element={<Profile />} exact />
                <Route path="*" element={<Navigate to='/' replace />} />
              </Routes>
            </main>
            <Footer />
          </Router>
        </>
      </main>
    </>
  );
}