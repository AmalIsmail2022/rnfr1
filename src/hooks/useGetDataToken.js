import baseUrl from "../api/baseUrl";

const useGetDataToken = async (url, parmas) => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  const res = await baseUrl.get(url, config);
  return res.data.data;
};
export default useGetDataToken;
