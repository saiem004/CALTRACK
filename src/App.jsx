import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./Pages/Landingpage";
import Signin from "./Pages/Signin"; // Make sure this path is correct
import Signup from "./Pages/Signup";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      
      </Routes>
    </Router>
  );
}

export default App;