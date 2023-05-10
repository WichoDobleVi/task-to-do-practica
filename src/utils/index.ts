import { toast } from "react-toastify";

export const notify = (msg: string, status: string = 'success') =>
    status === 'success' ? toast.success(msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: false,
    }) : status === 'warn' ? toast.warn(msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: false,
    }) : toast.error(msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: false,
});


export const color = (status: string) => {
    switch (status) {
        case 'todo':
            return 'primary';
        case 'in-progress':
            return 'warning';
        case 'done':
            return 'success';
        default:
            return 'primary';
    }
}