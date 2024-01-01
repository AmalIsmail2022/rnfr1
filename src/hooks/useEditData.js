import baseUrl from '../api/baseUrl'
const useEditData = async (url, params) => {
    const config = {
      headers: { "Content-Type": "multipart/form-data" }
    };
    const res = await baseUrl.put(url, params, config);
    return res.data.data

}
export default useEditData


