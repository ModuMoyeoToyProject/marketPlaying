import axios from "axios";

import { clearUser } from "./useUser";
import { api } from "../../../Config";

export const useAuth = () => {
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
      const { data } = axios.get(`${api}/account/login`, {
        params: {
          id: loginId,
          password: loginPW,
        },
      });
      if (data.result === "unsuccessful") {
        alert(data.type);
      } else {
        let sessionStorage = window.sessionStorage;
        sessionStorage.clear();
        sessionStorage.setItem("loginId", loginId);
      }
    }
  }

  async function signup(loginId, loginPW, username, name, sex, email) {
    if (formValidate(loginId, loginPW)) {
      var params = new URLSearchParams();
      params.append("id", loginId);
      params.append("password", loginPW);
      params.append("username", username);
      params.append("name", name);
      params.append("sex", sex);
      params.append("email", email);
      const { data } = axios.post(`${api}/account/register`, params);

      if (data.result === "unsuccessful") {
        alert(data.type);
      } else {
        alert("회원가입되었습니다.");
      }
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
