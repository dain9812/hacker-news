import { NavLink } from "react-router-dom";
import { MenuData } from "./MenuData";

const Menu = ({ setTitle }) => {
  return (
    <ul>
      {MenuData.map((menu) => (
        <li>
          <NavLink to={menu.path} onClick={() => setTitle(menu.title)}>
            {menu.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
