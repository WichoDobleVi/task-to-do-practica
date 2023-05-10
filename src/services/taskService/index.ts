import mockApi from "../../api/mockApi";
import { TaskI } from "../../interfaces/task";


export const getTasks = async () => {
    const url = "/task";
    return mockApi.get(url);
};

export const getTask = async (id: number) => {
    const url = `/task/${id}`;
    return mockApi.get(url);
};

export const createTask = async (task: Partial<TaskI>) => {
    const url = "/task";
    return mockApi.post(url, task);
};

export const updateTask = async (task: TaskI) => {
    const url = `/task/${task.id}`;
    return mockApi.put(url, task);
};

export const deleteTask = async (id: number) => {
    const url = `/task/${id}`;
    return mockApi.delete(url);
};
