import baseUrl from '../api/baseUrl'
const useDeleteData = async(url, params) => {
    const res = await baseUrl.delete(url, params)
    return res.data.data

}
export default useDeleteData