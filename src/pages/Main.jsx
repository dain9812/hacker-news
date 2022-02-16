import { useState } from "react";
import CardList from "../components/CardList";
import ToTop from "../components/ToTop";
import "./Main.scss";

const Main = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const tabClickHandler = (index) => {
    setTabIndex(index);
  };
  const tabArr = [
    {
      title: (
        <li
          className={tabIndex === 0 ? "on" : ""}
          onClick={() => tabClickHandler(0)}
        >
          top
        </li>
      ),
      content: <CardList type="top" />
    },
    {
      title: (
        <li
          className={tabIndex === 1 ? "on" : ""}
          onClick={() => tabClickHandler(1)}
        >
          new
        </li>
      ),
      content: <CardList type="new" />
    }
  ];

  return (
    <>
      <div className="main">
        <ul className="view-type">{tabArr.map((menu) => menu.title)}</ul>
        {tabArr[tabIndex].content}
      </div>
      <ToTop />
    </>
  );
};

export default Main;
