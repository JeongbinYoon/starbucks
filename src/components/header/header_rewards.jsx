import React from "react";
import styles from "./header_sub.module.css";

const Header_rewards = (props) => (
  <div className={styles.header_sub}>
    <ul className={styles.container}>
      <li>
        <ul>
          <li>
            <a href="#">
              <h2>스타벅스 리워드</h2>
            </a>
          </li>
          <li>
            <a href="#">스타벅스 리워드 소개</a>
          </li>
          <li>
            <a href="#">등급 및 혜택</a>
          </li>
          <li>
            <a href="#">스타벅스 별</a>
          </li>
          <li>
            <a href="#">자주 하는 질문</a>
          </li>
        </ul>
      </li>

      <li>
        <ul>
          <li>
            <a href="#">
              <h2>스타벅스 카드</h2>
            </a>
          </li>

          <li>
            <a href="#">스타벅스 카드 소개</a>
          </li>
          <li>
            <a href="#">스타벅스 카드 갤러리</a>
          </li>
          <li>
            <a href="#">등록 및 조회</a>
          </li>
          <li>
            <a href="#">충전 및 이용안내</a>
          </li>
          <li>
            <a href="#">분실신고/환불신청</a>
          </li>
          <li>
            <a href="#">자주 하는 질문</a>
          </li>
        </ul>
      </li>

      <li>
        <ul>
          <li>
            <a href="#">
              <h2>스타벅스 e-Gift Card</h2>
            </a>
          </li>
          <li>
            <a href="#">스타벅스 e-Gift Card 소개</a>
          </li>
          <li>
            <a href="#">이용안내</a>
          </li>
          <li>
            <a href="#">선물하기</a>
          </li>
          <li>
            <a href="#">자주 하는 질문</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
);

export default Header_rewards;
