import {Route, Routes} from "react-router-dom";
import "./App.css";
import Home from "./pages/home/home";
import LandingPage from "./pages/landingpage/Landingpage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
