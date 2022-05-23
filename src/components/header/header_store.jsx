import React from "react";
import styles from "./header_sub.module.css";

const Header_store = (props) => (
  <div className={styles.header_sub}>
    <ul className={styles.container}>
      <li>
        <ul>
          <li>
            <a href="#">
              <h2>매장찾기</h2>
            </a>
          </li>
          <li>
            <a href="#">퀵 검색</a>
          </li>
          <li>
            <a href="#">지역 검색</a>
          </li>
        </ul>
      </li>

      <li>
        <ul>
          <li>
            <a href="#">
              <h2>드라이브 스루 매장</h2>
            </a>
          </li>
        </ul>
      </li>

      <li>
        <ul>
          <li>
            <a href="#">
              <h2>
                <h2>스타벅스 리저브™ 매장</h2>
              </h2>
            </a>
          </li>
        </ul>
      </li>

      <li>
        <ul>
          <li>
            <a href="#">
              <h2>커뮤니티 스토어 매장</h2>
            </a>
          </li>
        </ul>
      </li>

      <li>
        <ul>
          <li>
            <a href="#">
              <h2>매장 이야기</h2>
            </a>
          </li>
          <li>
            <a href="#">티바나 바 매장</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
);

export default Header_store;
