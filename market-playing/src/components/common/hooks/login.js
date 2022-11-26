import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { api } from "../../../Config";

// async function getFoodEachData(id) {
//   const { data } = await axios.get(`${api}/foods/purchase/each?id=${id}`);
//   return data;
// }

// async function setCorrectionFood(correctionData) {
//   var params = new URLSearchParams();
//   params.append("id", JSON.stringify(correctionData.id));
//   params.append("item_type", JSON.stringify(1));
//   await axios.post(`${api}/correction`, params);
// }

// export function foodEachData(id) {
//   const { data = [] } = useQuery(["food_each_data", id], () =>
//     getFoodEachData(id)
//   );
//   return data;
// }

// export function foodCorrection() {
//   const queryClient = useQueryClient();
//   const { mutate } = useMutation(
//     (correctionData) => setCorrectionFood(correctionData),
//     {
//       onSuccess: () => {
//         queryClient.invalidateQueries(["foods_purchase_all"]);
//       },
//     }
//   );

//   return mutate;
// }

async function login(loginData) {
  var params = new URLSearchParams();
  params.append("username", loginData.loginId);
  params.append("psw", loginData.loginPW);

  axios.post(`${api}/account/login`, params).then((response) => {
    console.log(response.data);
    // return response.data;
    const data = response.data;
    if (data.result === "unsuccessful") {
      alert(data.type);
    } else {
      let sessionStorage = window.sessionStorage;
      sessionStorage.setItem("loginId", loginData.loginId);
    }
  });
}

async function register(joinData) {
  var params = new URLSearchParams();
  params.append("id", joinData.loginId);
  params.append("psw", joinData.loginPW);
  params.append("username", joinData.username);
  params.append("name", joinData.name);
  params.append("sex", joinData.sex);
  params.append("email", joinData.email);
  axios.post(`${api}/account/register`, params).then((response) => {
    const data = response.data;
    if (data.result === "unsuccessful") {
      alert(data.type);
    } else {
      alert("회원가입되었습니다.");
    }
  });
}

export function useLogin() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation((loginData) => login(loginData), {
    onSuccess: () => {
      queryClient.invalidateQueries(["login"]);
    },
  });

  return mutate;
}

export function useRegister() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation((joinData) => register(joinData), {
    onSuccess: () => {
      queryClient.invalidateQueries(["join"]);
    },
  });

  return mutate;
}
