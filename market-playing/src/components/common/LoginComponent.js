import Header from "./Header";
import Footer from "./Footer";

const LoginComponent = () => {
  return (
    <div id="wrap">
      <Header />
      <div id="login_wrap">
        <div class="login">
          <h4>로그인</h4>
          <form>
            아이디
            <br />
            <input
              type="text"
              name="username"
              placeholder="아이디를 입력하세요"
            />
            <br />
            비밀번호
            <br />
            <input type="text" name="psw" placeholder="비밀번호를 입력하세요" />
          </form>
          <a href="#">
            <i>아이디/비밀번호찾기</i>
          </a>
          <div class="btn">
            <a href="/modu">로그인하기</a>
          </div>
        </div>
        <div class="join">
          <h2>반갑습니다 :)</h2>
          <p>회원가입을 원하시면 아래 버튼을 눌러주세요.</p>
          <div class="btn">
            <a href="join.html">회원가입하기</a>
          </div>
          <img src="img/main_img.jpg" alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginComponent;
