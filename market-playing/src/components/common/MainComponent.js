import Header from "./Header";
import Footer from "./Footer";
import isLogin from "../../router/lib/isLogin";

const MainComponent = () => {
  return (
    <div id="wrap">
      <div id="main">
        <div id="header">
          <div class="top_menu">
            <div class="inner">
              <ul>
                <li>
                  <a href="/login">LOGIN</a>
                </li>
                <li>
                  <a href="/join">JOIN</a>
                </li>
                <li>
                  <a href="sub/sub02.html">MYPAGE</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="menu">
            <div class="inner">
              <h4>
                <a href="/modu">TOY PROJECT</a>
              </h4>
              <ul>
                <li>
                  <a href="/main">게임하기</a>
                </li>
                <li>
                  <a href="sub/sub02.html">게임방법</a>
                </li>
                <li>
                  <a href="sub/sub02.html">게임소개</a>
                </li>
                <li>
                  <a href="sub/sub02.html">리포트</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div id="section">
          <div class="inner">
            <div class="box01">
              <div class="txt_wrap">
                <p>
                  <span>Hello, Users</span> <br />
                  Toy Project
                </p>
              </div>
              <div class="btn_wrap">
                <a href="/main">게임하러가기</a>
                <a href="sub/sub02.html">게임방법</a>
              </div>
            </div>
            <div class="box02">
              <div class="con_box">
                <p>
                  처음 오신분들 반갑습니다 :)
                  <br />
                  로그인을 하면 게임저장이 가능하다는 꿀팁!
                </p>
                <div class="a_wrap">
                  <a href="/login">로그인</a>
                  <a href="/join">회원가입</a>
                </div>
              </div>
              <div class="con_box">
                <p>
                  오늘도 즐거운 게임 이용하셨나요 :)
                  <br />
                  재미있게 게임 하셨다면
                  <br />
                  게임 랭킹 순위도 확인해보세요!
                </p>
                <div class="a_wrap">
                  <a href="sub/sub02.html">게임랭킹순위</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <div class="inner">
            <div class="txt_wrap">
              <h5>TOY PROJECT LOGO</h5>
              <p>COPYRIGHTⓒ 2023 TOYPROJECT ALL RIGHT RESERVED</p>
            </div>
            <div class="img_wrap">
              <a href="sub/sub02.html">
                <img src={require("../../img/foot_about.png")} alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
