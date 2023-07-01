import 'regenerator-runtime/runtime';
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

import './assets/global.css';

import { EducationalText, SignInPrompt, SignOutButton } from './ui-components';


export default function App({ isSignedIn, contractId, wallet }) {
  const [valueFromBlockchain, setValueFromBlockchain] = React.useState();

  const [uiPleaseWait, setUiPleaseWait] = React.useState(true);

  // Get blockchian state once on component load
  React.useEffect(() => {
    getGreeting()
      .then(setValueFromBlockchain)
      .catch(alert)
      .finally(() => {
        setUiPleaseWait(false);
      });
  }
    , []);

  /// If user not signed-in with wallet - show prompt
  if (!isSignedIn) {
    // Sign-in flow will reload the page later
    return <SignInPrompt greeting={valueFromBlockchain} onClick={() => wallet.signIn()} />;
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
      <Navbar/>
      <main>
        <Routes>
          <Route path="/" element={<Explore/>} exact/>
          <Route path="/buyCourse" element={<BuyCourse/>} exact/>
          <Route path="/course" element={<Course/>} exact/>
          <Route path="/create" element={<Create/>} exact/>
          <Route path="/profile" element={<Profile/>} exact/>
          <Route path="*" element={<Navigate to='/' replace/>}/>
        </Routes>
      </main>
      <Footer/>
    </Router>
   </>
      </main>
    </>
  );
}