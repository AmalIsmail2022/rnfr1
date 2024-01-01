import baseUrl from "../api/baseUrl";

const useEditDataWithToken = async (url, parmas) => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  const res = await baseUrl.put(url, parmas, config);
  return res.data.data;
};
export default useEditDataWithToken;