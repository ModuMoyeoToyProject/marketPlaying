import { useQuery, useMutation, useQueryClient } from "react-query";
import axios from "axios";
import { api } from "../../../Config";

async function getFoodEachData(id) {
  const { data } = await axios.get(`${api}/foods/purchase/each?id=${id}`);
  return data;
}

async function setCorrectionFood(correctionData) {
  var params = new URLSearchParams();
  params.append("id", JSON.stringify(correctionData.id));
  params.append("item_type", JSON.stringify(1));
  await axios.post(`${api}/correction`, params);
}

export function foodEachData(id) {
  const { data = [] } = useQuery(["food_each_data", id], () =>
    getFoodEachData(id)
  );
  return data;
}

export function foodCorrection() {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    (correctionData) => setCorrectionFood(correctionData),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["foods_purchase_all"]);
      },
    }
  );

  return mutate;
}
