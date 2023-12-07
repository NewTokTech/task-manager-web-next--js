import axios from '../utils/authUtils'
import User from '../../components/admin/createUser/interface';
import Login from '../../components/login/interface'


export const createUserApi = async (data: User) => {
    try {
        const res = await axios.post('/createUser', data)
        return res.status
    } catch (error: any) {
        return error.response.data.massage
    }
}

export const createLoginApi = async (data: Login) => {
    try {
        const res = await axios.post('/login', data)
        console.log(res);
        return res
    } catch (error: any) {
        return error.response.data.massage
    }
}