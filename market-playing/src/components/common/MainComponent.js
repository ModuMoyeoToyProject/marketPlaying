import Header from "./Header";
import Footer from "./Footer";

const MainComponent = () => {
  return (
    <div id="wrap" class="clfix">
      <Header />
      {/* <!-- section01 --> */}
      <div id="section01" class="clfix">
        <div class="con_left">
          <div class="main_tit">
            <p>Hello, Users</p>
            <p>ToyProject</p>
          </div>
          <div class="main_btn">
            <ul>
              <a href="/main">
                <li>게임하러가기</li>
              </a>
            </ul>
            <ul>
              <a href="#">
                <li>게임방법</li>
              </a>
            </ul>
          </div>
        </div>
        <div class="con_right">
          <img src={require("../../img/main_img.jpg")} alt="" />
        </div>
      </div>
      {/* <!-- //section01 --> */}
      {/* <!-- section02--> */}
      <div id="section02" class="clfix">
        <div class="con_box">
          <p>
            처음오신분들 반갑습니다 :)
            <br />
            로그인을 하면 게임저장이 가능하다는 꿀팁!
          </p>
          <div class="btn">
            <a href="/login">
              <span>로그인하기</span>
            </a>
            <a href="/join">
              <span>회원가입하기</span>
            </a>
          </div>
        </div>
        <div class="con_box">
          <p>
            게임을 이용해주셔서 감사합니다 :)
            <br />
            게임에 대한 리뷰한줄 작성 부탁드립니다!
          </p>
          <div class="btn">
            <a href="">
              <span>리뷰작성하기</span>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- //section02--> */}
      <Footer />
    </div>
  );
};

export default MainComponent;
