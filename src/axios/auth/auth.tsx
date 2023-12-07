import axios from '../utils/authUtils'
import User from '../../compontes/admin/createUser/interface';


export const createUserApi = async (data: User) => {
    try {
        const res = await axios.post('/createUser', data)
        return res.status
    } catch (error: any) {
        return error.response.data.massage
    }
}