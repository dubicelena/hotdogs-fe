import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { WelcomeScreen } from "./pages/Welcome/WelcomeScreen";
import { DashboardScreen } from "./pages/Dashboard/DashboardScreen";
import { Navbar } from "./components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/dashboard" element={<DashboardScreen />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
