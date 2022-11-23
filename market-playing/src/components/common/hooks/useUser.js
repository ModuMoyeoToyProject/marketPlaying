export const useUser = () => {
  const user = sessionStorage.getItem("loginId");
  return { user };
};

export const clearUser = () => {
  sessionStorage.clear();
};
