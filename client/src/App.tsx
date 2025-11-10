import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import { SignIn, SignUp, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";
import Home from "./pages/Home";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <Router>
      <div className={isDarkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"}>
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
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
