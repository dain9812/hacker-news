import "./Nav.scss";
import logo from "../favicon.png";
import PlusBlack from "../../public/img/Plus_black.png";
import MinusBlack from "../../public/img/Minus_black.png";
import CloseBlack from "../../public/img/Close_black.png";
import Menu from "./Menu";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Nav = () => {
  const [title, setTitle] = useState("hacker news");
  const [userId, setUserId] = useState("");
  const [isOpen, setMenu] = useState(false);
  const [showClose, setCloseBtn] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMenu(false);
    if (pathname.includes("profile")) {
      const userName = pathname.substr(9);
      setUserId(userName);
      setCloseBtn(!showClose);
    } else {
      setCloseBtn(false);
    }
  }, [pathname]);

  return (
    <nav className={isOpen ? "show" : "hide"}>
      <div className="nav">
        <div>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <h3>{pathname.includes("profile") ? userId : title}</h3>
        </div>
        <button
          className={showClose ? "btn hide" : "btn show"}
          onClick={() => setMenu((isOpen) => !isOpen)}
        >
          <img src={isOpen ? MinusBlack : PlusBlack} alt="plus-minus-icon" />
        </button>
        <button
          className={showClose ? "btn show" : "btn hide"}
          onClick={() => navigate(-1)}
        >
          <img src={CloseBlack} alt="close-icon" />
        </button>
      </div>
      <div className="menu">
        <Menu setTitle={setTitle} />
      </div>
    </nav>
  );
};

export default Nav;
