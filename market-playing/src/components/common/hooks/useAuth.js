import axios from "axios";

import { clearUser } from "./useUser";
import { api } from "../../../Config";
import { useRegister, useLogin } from "./login";

export const useAuth = (props) => {
  const { login, join } = props;
  const formValidate = (loginId, loginPW) => {
    if (loginId === "" || loginPW === "") {
      alert("아이디 또는 비밀번호를 입력하십시오.");
      return false;
    } else {
      return true;
    }
  };

  async function signin(loginId, loginPW) {
    if (formValidate(loginId, loginPW)) {
      login({ loginId: loginId, loginPW: loginPW });
    }
  }

  async function signup(loginId, loginPW, username, name, sex, email) {
    if (formValidate(loginId, loginPW)) {
      join({
        loginId: loginId,
        loginPW: loginPW,
        username: username,
        name: name,
        sex: sex,
        email: email,
      });
    }
  }

  function signout() {
    clearUser();
  }

  return {
    signin,
    signup,
    signout,
  };
};
