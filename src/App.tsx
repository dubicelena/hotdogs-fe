import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { WelcomeScreen } from "./pages/Welcome/WelcomeScreen";
import { ProfileScreen } from "./pages/Profile/ProfileScreen";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
