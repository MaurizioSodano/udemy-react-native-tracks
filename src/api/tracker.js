import axios from "axios";
import {AsyncStorage} from "react-native";

const instance= axios.create({
    baseURL:"http://283505af3c7e.ngrok.io"
});

instance.interceptors.request.use(
    async (config)=>{
        const token=AsyncStorage.getItem("token");
        if (token){
            config.headers.Authorization=`Bearer ${token}`;
        }
        return config;
    },
    (err)=>{
        return Promise.reject(err);
    }
)

export default instance;