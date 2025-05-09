import  axios  from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const instance= axios.create({
    baseURL : 'https://fb57-39-34-154-143.ngrok-free.app'
   
})

instance.interceptors.request.use(
    async (config)=>{
        const token=await AsyncStorage.getItem("token");
        config.headers.Authorization= `Bearer ${token}`;
        return config;
        },
    (err)=>{
        return Promise.reject(err);
    },
)

export default instance;