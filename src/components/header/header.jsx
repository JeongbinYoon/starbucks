import React, { useState } from "react";
import styles from "./header.module.css";
import Header_coffee from "./header_coffee";
import Header_menu from "./header_menu";
import Header_store from "./header_store";
import Header_responsibility from "./header_responsibility";
import Header_rewards from "./header_rewards";
import Header_whatsnew from "./header_whatsnew";

const Header = (props) => {
  const [target, setTarget] = useState(null);
  const handleMouseOver = (e) => {
    const target = e.currentTarget;
    e.currentTarget.classList.add(`${styles.active}`);
    if (target.text === "COFFEE") {
      setTarget(0);
    } else if (target.text === "MENU") {
      setTarget(1);
    } else if (target.text === "STORE") {
      setTarget(2);
    } else if (target.text === "RESPONSIBILITY") {
      setTarget(3);
    } else if (target.text === "STARBUCKS REWARDS") {
      setTarget(4);
    } else if (target.text === "WHAT'S NEW") {
      setTarget(5);
    }
  };

  const handleMouseOut = (e) => {
    // e.currentTarget.classList.remove(`${styles.active}`);
  };

  const handleMouseLeave = (e) => {
    setTarget(null);
    document
      .querySelector(`.${styles.active}`)
      .classList.remove(`${styles.active}`);
  };

  return (
    <header className={styles.header} onMouseLeave={handleMouseLeave}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <a href="#">
            <img src="./logo.png" alt="로고" />
          </a>
        </div>
        <nav className={styles.gnb}>
          <div className={styles.utilNav}>
            <ul>
              <li>
                <a href="#">Sign In</a>
              </li>
              <li>
                <a href="#">My Starbucks</a>
              </li>
              <li>
                <a href="#">Customer Service & Ideas</a>
              </li>
              <li>
                <a href="#">Find a Store</a>
              </li>
            </ul>
          </div>
          <div className={styles.gnbNav}>
            <ul>
              <li>
                <a
                  href="#"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  COFFEE
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  MENU
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  STORE
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  RESPONSIBILITY
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  STARBUCKS REWARDS
                </a>
              </li>
              <li>
                <a
                  href="#"
                  onMouseOver={handleMouseOver}
                  onMouseOut={handleMouseOut}
                >
                  WHAT'S NEW
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div className={styles.sub}>
        {target === 0 ? <Header_coffee /> : null}
        {target === 1 ? <Header_menu /> : null}
        {target === 2 ? <Header_store /> : null}
        {target === 3 ? <Header_responsibility /> : null}
        {target === 4 ? <Header_rewards /> : null}
        {target === 5 ? <Header_whatsnew /> : null}
      </div>
    </header>
  );
};

export default Header;
