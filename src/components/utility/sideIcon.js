import React from "react";

const SideIcon = ({ onClick }) => {
  const clickme = (key) => {
    localStorage.setItem("sortType", key);
    onClick();
  };
  return (
    <div>
      <div className="social">
        <a onClick={() => clickme("")} className="facebook ">
          ALL
        </a>
      </div>
      <div className="social">
        <a onClick={() => clickme("old age")} className="instagram">
          SENIOR
        </a>
      </div>

      <div className="social">
        <a onClick={() => clickme("youg age")} className="twitter">
          JUNIOR
        </a>
      </div>

      <div className="social">
        <a onClick={() => clickme("high rating")} className="wat">
          <i class="fa-solid fa-star"></i>
        </a>
      </div>

      <div className="social">
        <a onClick={() => clickme("low rating")} className="email">
          <i class="fa-regular fa-star"></i>
        </a>
      </div>
    </div>
  );
};

export default SideIcon;
