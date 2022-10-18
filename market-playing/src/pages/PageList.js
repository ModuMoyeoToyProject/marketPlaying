/**
 * @FileName    : PageList.jsx
 * @Description : 개발항목 List
 * @History     : 2022.10.07.  리코더     페이지 생성
 * 
 */

import { Link } from 'react-router-dom';

import "../styles/Game.scss";
 
 
function PageList() {  
 
  return (
    <div>
      <h1>Front 진행현황</h1>

      <div style={{justifyContent: "flex-start", flexDirection: "row", display: "flex"}}>
        <Link className="linkItem " to="/"><div className="linkBtn none" > 로그인 </div></Link>
        <Link className="linkItem" to="/main"> <div className="linkBtn" > 게임화면 </div> </Link>
        <Link className="linkItem" to="/"><div className="linkBtn none" > 관리자화면 </div></Link>
      </div>

      <h3>미션1</h3>
      <ul> 
        <Link className="linkItem" to="/chart"><li>1. [입문] chart.js 찾아보고 react에 예시데이터 적용하기</li></Link>
        <Link className="linkItem" to="/street"><li>2. [하돌] 배경에서 움직일 수 있는 곳과 움직일 수 없는 곳 구분하고 움직일 수 있는 곳으로 이동(순간이동 or 애니메이션 이동)하게 하기</li></Link>
        <Link className="linkItem" to="/userInfoTest"><li>3. [리코더] 돈 증감 기능 구현하기 + 시간 계속 가게 하고 시간에 따라 낮/밤 바뀌게 하기</li></Link>
        <Link className="linkItem" to="/shop"><li>4. [레제] 상점에서 테이블 클릭하면 상품 정보 보이게 하기</li></Link>
        <Link className="linkItem" to="/lake"><li>5. [레제] 낚시 미니게임 만들기</li></Link>
        <Link className="linkItem none" to="/"><li>6. [BD] 캐릭터 디자인과 메인 광장 디자인</li></Link>
        <Link className="linkItem none" to="/"><li>7. [욜] 전체 홈페이지 디자인</li></Link>
      </ul>


      <h3 style={{marginTop: 50}}>미션2 (~ 10/19)</h3>
      <ul> 
        <Link className="linkItem none" to="/"><li>1. [입문] react-router-dom 배우고 예시 적용하기</li></Link>
        <Link className="linkItem none" to="/main"><li>2. [하돌] "url 말고 다른 방법으로" 장소 이동하기. 상점 앞 클릭하면 상점으로, 집앞 클릭하면 집으로 이동하기</li></Link>
        <Link className="linkItem none" to="/main"><li>3. [리코더] 4번이랑 연동해서 구입하기 누르면 그만큼 돈 내려가고 인벤토리에 상품 추가, 판매하기 누르면 그만큼 돈 올라가고 인벤토리에 상품 삭제</li></Link>
        <Link className="linkItem none" to="/"><li>4. [어차피어피치] 인벤토리 기능 구현(전체 물건들 중에서 갖고 있는 건 색 있게, 없는 건 색 없게. 갯수 표시)</li></Link>
        <Link className="linkItem none" to="/"><li>5. [레제] 나무패기, 양털깎기, 뭐 만들기 미니게임 만들기</li></Link>
        <Link className="linkItem none" to="/"><li>6. [BD] 상점 디자인</li></Link>
        <Link className="linkItem none" to="/"><li>7. [욜] 전체 홈페이지 퍼블리싱 + 로그인, 회원가입 화면 디자인 </li></Link>
      </ul>
    </div>
  );
}

export default PageList;
