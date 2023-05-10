import mockApi from "../../api/mockApi";
import { UserI } from "../../interfaces/user";


export const getUser = async (email: string, password: string) => {
    const url = `/users/`;
    const {data} = await mockApi.get(url);
    const user = data.find((user: UserI) => user.email === email && user.password === password);
    return user ? {
        ...user,
        password: null
    } : null;
};