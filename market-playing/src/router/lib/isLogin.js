const isLogin = () => !!sessionStorage.getItem("loginId");

export default isLogin;
