import { useUiContext } from "../context/ContexUI";
import { getUser } from "../services/userService";
import { useState } from 'react';
import { notify } from "../utils";
import { useNavigate } from "react-router-dom";


export const useUser = () => {
    const {user, handleUser} = useUiContext();
    const nav = useNavigate();
    const [loading, setLoading]  = useState<boolean>(false);


    const onGetUser = async (email: string, password: string): Promise<void> => {
        try {
            setLoading(true);
            const user = await getUser(email, password);
            if(user) {
                handleUser(user);
                notify('Welcome ' + user?.name, 'success');
                nav('/home');
                return;
            }
            notify('User not found', 'warn');
        } catch (error) {
            console.log(error);
            notify('Error logging user', 'error');
        } finally {
            setLoading(false);
        }
    };

    return {
        user,
        loading,
        onGetUser,
        handleUser
    };




};