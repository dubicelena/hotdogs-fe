import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { WelcomeScreen } from "./pages/Welcome/WelcomeScreen";
import { ChatScreen } from "./pages/ChatScreen";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/chat" element={<ChatScreen />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
