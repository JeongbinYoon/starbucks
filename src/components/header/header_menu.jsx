import React from "react";
import styles from "./header_sub.module.css";

const Header_menu = (props) => (
  <div className={styles.header_sub}>
    <ul className={styles.container}>
      <li>
        <ul>
          <li>
            <a href="#">
              <h2>음료</h2>
            </a>
          </li>
          <li>
            <a href="#">콜드브루</a>
          </li>
          <li>
            <a href="#">브루드 커피</a>
          </li>
          <li>
            <a href="#">에스프레소</a>
          </li>
          <li>
            <a href="#">프라푸치노</a>
          </li>
          <li>
            <a href="#">블렌디드</a>
          </li>
          <li>
            <a href="#">스타벅스 피지오</a>
          </li>
          <li>
            <a href="#">티(티바나)</a>
          </li>
          <li>
            <a href="#">기타 제조 음료</a>
          </li>
          <li>
            <a href="#">스타벅스 주스(병음료)</a>
          </li>
        </ul>
      </li>

      <li>
        <ul>
          <li>
            <a href="#">
              <h2>푸드</h2>
            </a>
          </li>
          <li>
            <a href="#">브레드</a>
          </li>
          <li>
            <a href="#">케이크</a>
          </li>
          <li>
            <a href="#">샌드위치 & 샐러드</a>
          </li>
          <li>
            <a href="#">따뜻한 푸드</a>
          </li>
          <li>
            <a href="#">과일 & 요거트</a>
          </li>
          <li>
            <a href="#">스낵 & 미니디저트</a>
          </li>
          <li>
            <a href="#">아이스크림</a>
          </li>
        </ul>
      </li>

      <li>
        <ul>
          <li>
            <a href="#">
              <h2>
                <h2>상품</h2>
              </h2>
            </a>
          </li>
          <li>
            <a href="#">머그</a>
          </li>
          <li>
            <a href="#">글라스</a>
          </li>
          <li>
            <a href="#">플라스틱 텀블러</a>
          </li>
          <li>
            <a href="#">스테인리스 텀블러</a>
          </li>
          <li>
            <a href="#">보온병</a>
          </li>
          <li>
            <a href="#">액세서리</a>
          </li>
          <li>
            <a href="#">선물세트</a>
          </li>
          <li>
            <a href="#">커피 용품</a>
          </li>
          <li>
            <a href="#">패키지 티(티바나)</a>
          </li>
        </ul>
      </li>

      <li>
        <ul>
          <li>
            <a href="#">
              <h2>카드</h2>
            </a>
          </li>
          <li>
            <a href="#">실물카드</a>
          </li>
          <li>
            <a href="#">e-Gift 카드</a>
          </li>
        </ul>
      </li>

      <li>
        <ul>
          <li>
            <a href="#">
              <h2>메뉴 이야기</h2>
            </a>
          </li>
          <li>
            <a href="#">나이트로 콜드브루</a>
          </li>
          <li>
            <a href="#">콜드브루</a>
          </li>
          <li>
            <a href="#">스타벅스 티바나</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
);

export default Header_menu;
