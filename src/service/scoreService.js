import axiosClient from '../config/axiosClient';
const _url = '/scores';
const scoreService = {
    getReports: async () => {
        return await axiosClient.get(_url + '/getReports')
    },

    getTopGroup: async (group, limit) => {
        return await axiosClient.get(_url + `/getListTopGroup?group=${group}&limit=${limit}`)
    }
}

export default scoreService