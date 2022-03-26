import {NavLink, Outlet} from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/pokemonCreate">Create a Poke</NavLink>
      <Outlet />
    </nav>
  );
};

export default Nav;
