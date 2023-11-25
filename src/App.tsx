import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { WelcomeScreen } from "./pages/Welcome/WelcomeScreen";
import { ChatScreen } from "./pages/ChatScreen";
import { DashboardScreen } from "./pages/Dashboard/DashboardScreen";
import { Navbar } from "./components/Navbar/Navbar";
import { ProfileScreen } from "./pages/Profile/ProfileScreen";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/dashboard" element={<DashboardScreen />} />
          <Route path="/chat" element={<ChatScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
