import {useState} from "react";
import {Routes, Route} from "react-router";
import Home from "./pages/home/home";
import LandingPage from "./pages/landingpage/Landingpage";
import Detail from "./pages/detail/detail";
import Form from "./pages/form/form";
import "./App.css";
function App() {
  const [active, setActive] = useState(false);
  return (
    <>
      {!active ? (
        <Routes>
          <Route path="/" element={<LandingPage setState={setActive} />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/pokemonUpdate/:id" element={<Form />} />
          <Route path="/pokemonCreate/" element={<Form />} />
        </Routes>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/pokemonUpdate/:id" element={<Form />} />
            <Route path="/pokemonCreate" element={<Form />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
