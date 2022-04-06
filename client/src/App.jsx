import {useState} from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/home/home";
import LandingPage from "./pages/landingpage/Landingpage";
import Detail from "./pages/detail/detail";
import Form from "./pages/form/form";
import Pokedex from "./pages/pokedex/pokedex";
import "./App.css";
import Nav from "./components/nav/nav";
import {Redirect} from "./components/redirect/redirect";
function App() {
  const [active, setActive] = useState(false);
  return (
    <>
      {!active ? (
        <>
          <Routes>
            <Route path="/" element={<LandingPage setState={setActive} />} />
            <Route path="*" element={<Redirect />} />
          </Routes>
        </>
      ) : (
        <>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pokedex/:gen" element={<Pokedex />} />
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
