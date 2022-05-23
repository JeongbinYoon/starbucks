import React from "react";
import styles from "./header_sub.module.css";

const Header_responsibility = (props) => (
  <div className={styles.header_sub}>
    <ul className={styles.container}>
      <li>
        <ul>
          <li>
            <a href="#">
              <h2>사회공헌 캠페인 소개</h2>
            </a>
          </li>
        </ul>
      </li>

      <li>
        <ul>
          <li>
            <a href="#">
              <h2>지역 사회 참여 활동</h2>
            </a>
          </li>
          <li>
            <a href="#">희망배달 캠페인</a>
          </li>
          <li>
            <a href="#">재능기부 카페 소식</a>
          </li>
          <li>
            <a href="#">커뮤니티 스토어</a>
          </li>
          <li>
            <a href="#">청년 지원 프로그램</a>
          </li>
          <li>
            <a href="#">우리 농산물 사랑 캠페인</a>
          </li>
          <li>
            <a href="#">우리 문화 지키기</a>
          </li>
        </ul>
      </li>

      <li>
        <ul>
          <li>
            <a href="#">
              <h2>
                <h2>환경보호 활동</h2>
              </h2>
            </a>
          </li>
          <li>
            <a href="#">친환경 활동</a>
          </li>
          <li>
            <a href="#">일회용 컵 없는 매장</a>
          </li>
          <li>
            <a href="#">커피 원두 재활용</a>
          </li>
        </ul>
      </li>

      <li>
        <ul>
          <li>
            <a href="#">
              <h2>윤리 구매</h2>
            </a>
          </li>
          <li>
            <a href="#">윤리적 원두 구매</a>
          </li>
          <li>
            <a href="#">공정무역 인증</a>
          </li>
          <li>
            <a href="#">커피 농가 지원 활동</a>
          </li>
        </ul>
      </li>

      <li>
        <ul>
          <li>
            <a href="#">
              <h2>글로벌 사회 공헌</h2>
            </a>
          </li>
          <li>
            <a href="#">윤리경영 보고서</a>
          </li>
          <li>
            <a href="#">스타벅스 재단</a>
          </li>
          <li>
            <a href="#">지구촌 봉사의 달</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
);

export default Header_responsibility;
