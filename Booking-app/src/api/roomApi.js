import { ENDPOINT } from "../utils/constants"
import axiosClient from "./axiosClient"

const roomApi = {
    create: (data) => {
        return axiosClient.post(ENDPOINT.rooms, data);
    },
    update: (id,data) => {
        return axiosClient.patch(`${ENDPOINT.rooms}/${id}`, data);
    },
    delete: (id) => {
        return axiosClient.delete(`${ENDPOINT.rooms}/${id}`);
    },
    getRoomById: (id) => {
        return axiosClient.get(`${ENDPOINT.rooms}/${id}`);
    },
    getAll: () => {
        return axiosClient.get(ENDPOINT.rooms);
    },
    getRoomByPrice: (price1 = 10, price2 = 999, guest = 1) => {
        if(!!price1 && !!price2) {
            return axiosClient.get(`${ENDPOINT.rooms}/${price1}/${price2}/${guest}`);
        }
    },
    getRoomByUser: (id_user) => {
        return axiosClient.get(`${ENDPOINT.rooms}/user/${id_user}`);
    }
}

export default roomApi;