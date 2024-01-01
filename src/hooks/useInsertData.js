import baseUrl from '../api/baseUrl'
const useInsertData = async(url, params) => {
    const res = await baseUrl.post(url, params)
    return res.data.data

}
const useInsertData1 = async (url, params) => {
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.post(url, params, config);
  return res;
};
const useInsertDataWithImage = async (url, params) => {
  const config = {
        headers:{"Content-Type":"multipart/form-data"}
    }
  const res = await baseUrl.post(url, params, config);
  return res.data.data;
};
const useInsertDataWithImage1 = async (url, params) => {
  const config = {
    headers: {
      "Content-type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.post(url, params, config);
  return res.data.data;
};

export {
  useInsertData,
  useInsertDataWithImage,
  useInsertDataWithImage1,
  useInsertData1,
};
