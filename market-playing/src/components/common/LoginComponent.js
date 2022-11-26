import React, { useEffect, useState } from "react";

import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

import { useAuth } from "./hooks/useAuth";
import { useUser } from "./hooks/useUser";
import { useLogin, useRegister } from "./hooks/login";
import isLogin from "../../router/lib/isLogin";

const LoginComponent = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { signin } = useAuth({ login: useLogin(), join: useRegister() });

  useEffect(() => {
    console.log(user);
    if (user) {
      navigate("/modu");
    }
  }, [user]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      signin(loginId, loginPW);
    }
  };

  const [loginInfo, setLoginInfo] = useState({
    loginId: "",
    loginPW: "",
  });

  const { loginId, loginPW } = loginInfo;

  const loginChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({
      ...loginInfo,
      [name]: value,
    });
  };

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
              name="loginId"
              value={loginId}
              onChange={loginChange}
              placeholder="아이디를 입력하세요"
              onKeyPress={handleKeyPress}
            />
            <br />
            비밀번호
            <br />
            <input
              type="password"
              name="loginPW"
              value={loginPW}
              onChange={loginChange}
              placeholder="비밀번호를 입력하세요"
              onKeyPress={handleKeyPress}
            />
          </form>
          <a href="#">
            <i>아이디/비밀번호찾기</i>
          </a>
          <div class="btn">
            <a onClick={() => signin(loginId, loginPW)}>로그인하기</a>
          </div>
        </div>
        <div class="join">
          <h2>반갑습니다 :)</h2>
          <p>회원가입을 원하시면 아래 버튼을 눌러주세요.</p>
          <div class="btn">
            <a href="/join">회원가입하기</a>
          </div>
          <img src="img/main_img.jpg" alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LoginComponent;
