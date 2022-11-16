import Header from "./Header";
import Footer from "./Footer";

const JoinComponent = () => {
  return (
    <div id="wrap">
      <Header />
      <div class="join_wrap">
        <div class="join_main">
          <h4>회원가입</h4>
          <form>
            이름
            <br />
            <input
              type="text"
              name="username"
              placeholder="이름을 입력하세요"
            />
            <br />
            성별
            <br />
            <div class="input_radio">
              <input type="radio" name="sex" value="여성" checked />
              여성&nbsp;&nbsp;
              <input type="radio" name="sex" value="남성" />
              남성
            </div>
            <br />
            닉네임
            <br />
            <input type="text" name="name" placeholder="닉네임을 입력하세요" />
            <br />
            아이디
            <br />
            <input type="text" name="id" placeholder="아이디를 입력하세요" />
            <br />
            비밀번호
            <br />
            <input type="text" name="psw" placeholder="비밀번호를 입력하세요" />
            <br />
            비밀번호 확인
            <br />
            <input
              type="text"
              name="psw"
              placeholder="비밀번호를 한번 더 입력하세요"
            />
            <br />
            이메일
            <br />
            <input
              type="email"
              name="email"
              placeholder="이메일을 입력하세요"
            />
            <br />
            <br />
            <div class="input_checkbox">
              <input type="checkbox" name="agree" />
              이용약관 및 개인정보 처리방침에 동의합니다.
            </div>
          </form>
          <div class="btn">
            <a href="/login">작성완료</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JoinComponent;
