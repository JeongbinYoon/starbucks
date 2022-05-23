import React from "react";
import styles from "./header_sub.module.css";

const Header_coffee = (props) => (
  <div className={styles.header_sub}>
    <ul className={styles.container}>
      <li>
        <ul>
          <li>
            <a href="#">
              <h2>커피</h2>
            </a>
          </li>
          <li>
            <a href="#">스타벅스 원두</a>
          </li>
          <li>
            <a href="#">스타벅스 비아</a>
          </li>
          <li>
            <a href="#">스타벅스앳홈 by 캡슐</a>
          </li>
        </ul>
      </li>

      <li>
        <ul>
          <li>
            <a href="#">
              <h2>나와 어울리는 커피</h2>
            </a>
          </li>
        </ul>
      </li>

      <li>
        <ul>
          <li>
            <a href="#">
              <h2>스타벅스 리저브™</h2>
            </a>
          </li>
          <li>
            <a href="#">RESERVE MAGAZINE</a>
          </li>
        </ul>
      </li>

      <li>
        <ul>
          <li>
            <a href="#">
              <h2>
                <h2>에스프레소 음료</h2>
              </h2>
            </a>
          </li>
          <li>
            <a href="#">도피오</a>
          </li>
          <li>
            <a href="#">에스프레소 마키아또</a>
          </li>
          <li>
            <a href="#">아메리카노</a>
          </li>
          <li>
            <a href="#">마키아또</a>
          </li>
          <li>
            <a href="#">카푸치노</a>
          </li>
          <li>
            <a href="#">라떼</a>
          </li>
          <li>
            <a href="#">모카</a>
          </li>
        </ul>
      </li>

      <li>
        <ul>
          <li>
            <a href="#">
              <h2>최상의 커피를 즐기는 법</h2>
            </a>
          </li>
          <li>
            <a href="#">커피 프레소</a>
          </li>
          <li>
            <a href="#">푸어 오버</a>
          </li>
          <li>
            <a href="#">아이스 푸어 오버</a>
          </li>
          <li>
            <a href="#">커피 메이커</a>
          </li>
          <li>
            <a href="#">리저브를 매장에서 다양하게 즐기는 법</a>
          </li>
        </ul>
      </li>

      <li>
        <ul>
          <li>
            <a href="#">
              <h2>커피 이야기</h2>
            </a>
          </li>
          <li>
            <a href="#">농장에서 우리의 손으로</a>
          </li>
          <li>
            <a href="#">최상의 아라비카 원두</a>
          </li>
          <li>
            <a href="#">스타벅스 로스트 스펙트럼</a>
          </li>
          <li>
            <a href="#">스타벅스 디카페인</a>
          </li>
          <li>
            <a href="#">클로버® 커피 추출 시스템</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
);

export default Header_coffee;
