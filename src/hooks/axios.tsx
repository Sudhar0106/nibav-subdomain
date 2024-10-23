import axios from "axios";
import useGetDomain from "../utils/helper.router";

export const useAxios = () => {

    const { main } = useGetDomain();
    
    axios.defaults.baseURL = main?.subdomain === "nibav" ? 'https://fakestoreapi.com' : "https://jsonplaceholder.typicode.com";
    axios.defaults.headers.common['Authorization'] = "";


    axios.interceptors.request.use(function (config) {
        return config;
    }, function (error) {
        return Promise.reject(error);
    });

    axios.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        return Promise.reject(error);
    });

    return { axios }
}