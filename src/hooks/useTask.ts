import { useState } from "react";
import { TaskI } from "../interfaces/task";
import { createTask, deleteTask, getTasks, updateTask } from '../services/taskService/index';
import { useUiContext } from "../context/ContexUI";
import { notify } from "../utils";


export const useTask = () => {
    const {tasks, showModal, taskSelected, handleTaskSelected, handleTask, toogleModal} = useUiContext();
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>('');

    const onGetTasks = async (): Promise<void> => {
        try {
            setLoading(true);
            const {data} = await getTasks();
            handleTask(data);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    const onPostTask = async (task: Partial<TaskI>): Promise<void> => {
        try {
            setLoading(true);
            const {data} = await createTask(task);
            notify('Task created successfully', 'success');
            await onGetTasks();
        } catch (error) {
            setError(error);
            notify('Error creating task', 'error');
        } finally {
            setLoading(false);
        }
    };

    const onPutTask = async (task: TaskI): Promise<void> => {
        if(task === null) return;
        try {
            setLoading(true);
            const {data} = await updateTask(task);
            notify('Task updated successfully', 'success');
            onGetTasks();
        } catch (error) {
            setError(error);
            notify('Error updating task', 'error');
        } finally {
            setLoading(false);
        }
    }

    const onDeleteTask = async (id: number): Promise<void> => {
        try {
            setLoading(true);
            const {data} = await deleteTask(id);
            notify('Task deleted successfully', 'success');
            onGetTasks();
        } catch (error) {
            setError(error);
            notify('Error deleting task', 'error');
        } finally {
            setLoading(false);
        }
    };

    return {
        tasks,
        loading,
        error,
        showModal,
        taskSelected,
        onGetTasks,
        onPostTask,
        onPutTask,
        onDeleteTask,
        toogleModal,
        handleTaskSelected,
    }
};