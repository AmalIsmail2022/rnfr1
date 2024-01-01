import baseUrl from '../api/baseUrl'
const useGetData = async(url, params) => {
    const res = await baseUrl.get(url, params)
    return res.data.data

}
export default useGetData
