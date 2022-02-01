import SignIn from "./Pages/SignIn";
import SignUp from "./Pages/SignUp";
import Home from "./Pages/Homepage";
import Export from "./Pages/Export";
import Import from "./Pages/Import";
import Vehicles from "./Pages/Vehicles";
import ContactUs from "./Pages/ContactUs";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Export" element={<Export />} />
        <Route path="/Import" element={<Import />} />
        <Route path="/Vehicles" element={<Vehicles />} />
        <Route path="/Contact" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
