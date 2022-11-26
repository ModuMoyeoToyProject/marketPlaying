import isLogin from "../../router/lib/isLogin";
import { useAuth } from "./hooks/useAuth";
import { useLogin, useRegister } from "./hooks/login";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { signout } = useAuth({ login: useLogin(), join: useRegister() });

  const signOut = () => {
    signout();
    navigate("/modu");
  };
  return (
    <div id="head" class="clfix">
      <div class="head_logo">
        <a href="/modu">
          <h2>Toy Project</h2>
        </a>
      </div>
      <div class="head_wrap">
        <div class="login clfix">
          <ul>
            {isLogin() ? (
              <a onClick={signOut}>
                <li>로그아웃</li>
              </a>
            ) : (
              <a href="/login">
                <li>로그인</li>
              </a>
            )}
            <a href="/join">
              <li>회원가입</li>
            </a>
          </ul>
        </div>
        <div class="menu clfix">
          <ul>
            <a href="/main">
              <li>게임하기</li>
            </a>
            <a href="#">
              <li>게임방법</li>
            </a>
            <a href="#">
              <li>게임소개</li>
            </a>
            <a href="#">
              <li>리포트</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
