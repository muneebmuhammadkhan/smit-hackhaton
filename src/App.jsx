import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./AuthPage/login";
import Signup from "./AuthPage/signup";
import Home from "./Pages/home";
import CreatePitch from "./Pages/CreatePitch";
import PitchResult from "./Pages/PitchResult";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Main Pages */}

        <Route path="/home" element={<Home />} />
        
        <Route path="/create-pitch" element={<CreatePitch />} />
        <Route path="/pitch-result" element={<PitchResult />} />
        
      </Routes>
    </Router>
  );
}
