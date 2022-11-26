import React, { useEffect, useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

import { useAuth } from "./hooks/useAuth";
import { useUser } from "./hooks/useUser";
import { useLogin, useRegister } from "./hooks/login";
import isLogin from "../../router/lib/isLogin";

const JoinComponent = () => {
  const navigate = useNavigate();
  const { signup } = useAuth({ login: useLogin(), join: useRegister() });
  const { user } = useUser();

  const [joinInfo, setJoinInfo] = useState({
    loginId: "",
    loginPW: "",
    loginPW2: "",
    username: "",
    name: "",
    sex: "",
    email: "",
  });
  const [agree, setAgree] = useState(false);

  const { loginId, loginPW, loginPW2, username, name, sex, email } = joinInfo;

  // useEffect(() => {
  //   if (!isLogin()) {
  //     navigate("/login");
  //   }
  // }, [user]);

  const joinChange = (e) => {
    const { name, value } = e.target;
    setJoinInfo({
      ...joinInfo,
      [name]: value,
    });
  };

  const joinBtn = () => {
    if (!agree) {
      alert("이용약관에 동의해주셔야 가입됩니다.");
    }
    if (loginPW !== loginPW2) {
      alert("비밀번호와 비밀번호 확인 값이 다릅니다.");
    }
    signup(loginId, loginPW, username, name, sex, email);
    navigate("/modu");
  };
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
              name="name"
              value={name}
              onChange={joinChange}
              placeholder="이름을 입력하세요"
            />
            <br />
            성별
            <br />
            <div class="input_radio">
              <input
                type="radio"
                name="sex"
                value="여성"
                onChange={joinChange}
                checked
              />
              여성&nbsp;&nbsp;
              <input
                type="radio"
                name="sex"
                value="남성"
                onChange={joinChange}
              />
              남성
            </div>
            <br />
            닉네임
            <br />
            <input
              type="text"
              name="username"
              value={username}
              onChange={joinChange}
              placeholder="닉네임을 입력하세요"
            />
            <br />
            아이디
            <br />
            <input
              type="text"
              name="loginId"
              value={loginId}
              onChange={joinChange}
              placeholder="아이디를 입력하세요"
            />
            <br />
            비밀번호
            <br />
            <input
              type="text"
              name="loginPW"
              value={loginPW}
              onChange={joinChange}
              placeholder="비밀번호를 입력하세요"
            />
            <br />
            비밀번호 확인
            <br />
            <input
              type="text"
              name="loginPW2"
              value={loginPW2}
              onChange={joinChange}
              placeholder="비밀번호를 한번 더 입력하세요"
            />
            <br />
            이메일
            <br />
            <input
              type="email"
              name="email"
              value={email}
              onChange={joinChange}
              placeholder="이메일을 입력하세요"
            />
            <br />
            <br />
            <div class="input_checkbox">
              <input
                type="checkbox"
                name="agree"
                value={agree}
                onChange={() => setAgree(!agree)}
              />
              이용약관 및 개인정보 처리방침에 동의합니다.
            </div>
          </form>
          <div class="btn">
            <a onClick={joinBtn}>작성완료</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JoinComponent;
