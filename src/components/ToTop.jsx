import Up from "../../public/img/ArrowDown.png";

const ToTop = () => {
  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button className="totop" onClick={toTop}>
      <img src={Up} alt="up" />
    </button>
  );
};

export default ToTop;
