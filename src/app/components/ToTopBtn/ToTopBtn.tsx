"use client";

import classNames from "classnames";

import { useEffect, useState } from "react";

import "./ToTopBtn.scss";

const ToTopBtn: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    window.scrollY > 20 ? setIsVisible(true) : setIsVisible(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <button
      className={classNames("top-btn", {
        visible: isVisible,
      })}
      type="button"
      onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
    >
      <span className="top-btn-arrow">&#8593;</span> To top
    </button>
  );
};
export default ToTopBtn;
