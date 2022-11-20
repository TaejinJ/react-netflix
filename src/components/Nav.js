import React, { useEffect, useState } from "react";
import "./Nav.css";
export default function Nav() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);

  return (
    <nav className={`nav ${show && "nav_black"} `}>
      {/**show가 false일땐 nav true일땐 nav_black */}
      <img
        alt="Netflix logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1280px-Netflix_2015_logo.svg.png"
        className="nav_logo"
        onClick={() => {
          window.location.reload();
        }}
      />
      {/* 여기 드롭다운메뉴통해서 옵션넣기 */}
      <img
        alt="User logged"
        src="https://img.freepik.com/premium-vector/ok-and-good-luck-sign-concept_140689-3644.jpg"
        className="nav_avatar"
      />
      {/* 로그인안되어있을때는 로그인 / 로그인되어있을땐 로그아웃 버튼기능 */}
    </nav>
  );
}
