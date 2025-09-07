import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Assets from "./pages/Assets";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/assets" element={<Assets />} />
      </Routes>
    </Router>
  );
}

export default App;
