import {useState} from "react";
import "./App.css";
import Home from "./pages/home/home";
import LandingPage from "./pages/landingpage/Landingpage";
import Detail from "./pages/detail/detail";
import {Routes, Route} from "react-router";
function App() {
  const [active, setActive] = useState(false);
  return (
    <>
      {!active ? (
        <Routes>
          <Route path="/" element={<LandingPage setState={setActive} />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
