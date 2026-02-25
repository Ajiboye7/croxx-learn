import axios from "axios"
// import { HOST} from "@env"
import Constants from 'expo-constants';

const HOST = Constants.expoConfig?.extra?.EXPO_PUBLIC_HOST ;
//const HOST = Constants.expoConfig?.extra?.EXPO_PUBLIC_HOST || "http://192.168.0.3:3000/api/v1";

const signin = async (payload: { email: string, password: string }) => {
    console.log(HOST, 'hdhd')
    const request = axios.post(`${HOST}/users/login`, payload)
    const res = await request;
    return res.data
}


const signup = async (payload: { firstName: string, lastName: string, email: string, password: string, passwordConfirm: string }) => {
    const request = axios.post(`${HOST}/users/signup`, payload)
    const res = await request;
    return res.data
}

const forgot_password = async (payload: { email: string }) => {
    console.log(payload)
    const request = axios.post(`${HOST}/users/forgotPassword`, payload)
    const res = await request
    return res.data
}

const verify = async (payload: { verificationCode: string }) => {
    const request = axios.post(`${HOST}/users/verify`, payload)
    const res = await request;
    return res.data
}

export default { signin, signup, forgot_password, verify }

//EXPO_PUBLIC_HOST=https://croxxlearn-d5874d7f0aa7.herokuapp.com/api/v1