import axiosClient from '../config/axiosClient';
const _url = '/scores';
const scoreService = {
    getReports: async () => {
        return await axiosClient.get(_url + '/getReports')
    },

    getTopGroup: async (limit) => {
        return await axiosClient.get(_url + `/getListTopGroup?limit=${limit}`)
    },

    getDetailScores: async (sbd) => {
        return await axiosClient.get(_url + `/check?sbd=${sbd}`)
    },
}

export default scoreService