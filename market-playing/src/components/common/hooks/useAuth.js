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
      var params = new URLSearchParams();
      params.append("username", loginId);
      params.append("psw", loginPW);
      const { data } = axios.post(`${api}/account/login`, params);
      if (data.result === "unsuccessful") {
        alert(data.type);
      } else {
        let sessionStorage = window.sessionStorage;
        sessionStorage.clear();
        sessionStorage.setItem("loginId", loginId);
        console.log(data.result);
      }
    }
  }

  async function signup(loginId, loginPW, username, name, sex, email) {
    if (formValidate(loginId, loginPW)) {
      var params = new URLSearchParams();
      params.append("id", loginId);
      params.append("psw", loginPW);
      params.append("username", username);
      params.append("name", name);
      params.append("sex", sex);
      params.append("email", email);
      const { data } = axios.post(`${api}/account/register`, params);
      console.log(data);
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
