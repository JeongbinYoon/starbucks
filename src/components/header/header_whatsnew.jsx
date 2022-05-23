import React from "react";
import styles from "./header_sub.module.css";

const Header_whatsnew = (props) => (
  <div className={styles.header_sub}>
    <ul className={styles.container}>
      <li>
        <ul>
          <li>
            <a href="#">
              <h2>이벤트</h2>
            </a>
          </li>
          <li>
            <a href="#">전체</a>
          </li>
          <li>
            <a href="#">스타벅스 카드</a>
          </li>
          <li>
            <a href="#">스타벅스 리워드</a>
          </li>
          <li>
            <a href="#">온라인</a>
          </li>
          <li>
            <a href="#">e-프리퀀시 증정품</a>
          </li>
        </ul>
      </li>

      <li>
        <ul>
          <li>
            <a href="#">
              <h2>뉴스</h2>
            </a>
          </li>

          <li>
            <a href="#">전체</a>
          </li>
          <li>
            <a href="#">상품출시</a>
          </li>
          <li>
            <a href="#">스타벅스와 문화</a>
          </li>
          <li>
            <a href="#">스타벅스 사회공헌</a>
          </li>
          <li>
            <a href="#">스타벅스 카드출시</a>
          </li>
        </ul>
      </li>

      <li>
        <ul>
          <li>
            <a href="#">
              <h2>매장별 이벤트</h2>
            </a>
          </li>
          <li>
            <a href="#">일반 매장</a>
          </li>
          <li>
            <a href="#">신규 매장</a>
          </li>
        </ul>
      </li>

      <li>
        <ul>
          <li>
            <a href="#">
              <h2>e-프리퀀시</h2>
            </a>
          </li>
          <li>
            <a href="#">이용안내</a>
          </li>
          <li>
            <a href="#">이용현황</a>
          </li>
        </ul>
      </li>

      <li>
        <ul>
          <li>
            <a href="#">
              <h2>공지사항</h2>
            </a>
          </li>
        </ul>
      </li>

      <li>
        <ul>
          <li>
            <a href="#">
              <h2>월페이퍼</h2>
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
);

export default Header_whatsnew;
