import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <ul>
      <li>
        <NavLink to="/">Posts</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contacts">Contacts</NavLink>
      </li>
    </ul>
  );
}

export default Navbar;
