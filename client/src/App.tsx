import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { SignIn, SignUp, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignInPage from "./pages/SignInPage";


function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <Router>
      <div className={isDarkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"}>
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route
            path="/protected"
            element={
              <SignedIn>
                <Home />
              </SignedIn>
            }
          />
          <Route
            path="/protected"
            element={
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
