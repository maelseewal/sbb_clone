import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AusweisPage from "./pages/ausweispage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AusweisPage />} />
      </Routes>
    </Router>
  );
}

export default App;
