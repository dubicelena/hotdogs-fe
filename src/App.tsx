import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { WelcomeScreen } from "./pages/Welcome/WelcomeScreen";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
