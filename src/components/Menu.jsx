import { NavLink } from "react-router-dom";

const Menu = ({ setTitle }) => {
  return (
    <ul>
      <li>
        <NavLink to="/" onClick={() => setTitle("hacker news")}>
          hacker news
        </NavLink>
      </li>
      <li>
        <NavLink to="/show" onClick={() => setTitle("show")}>
          show
        </NavLink>
      </li>
      <li>
        <NavLink to="/ask" onClick={() => setTitle("ask")}>
          ask
        </NavLink>
      </li>
      <li>
        <NavLink to="/jobs" onClick={() => setTitle("jobs")}>
          jobs
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" onClick={() => setTitle("about")}>
          about
        </NavLink>
      </li>
    </ul>
  );
};

export default Menu;
