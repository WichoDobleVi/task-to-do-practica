import { useState, createContext, useContext } from 'react';
import { TaskI } from '../interfaces/task';
import { UserI } from '../interfaces/user';

interface ContextUIProps {
    showModal: boolean;
    user: UserI | null;
    tasks: TaskI[];
    taskSelected: TaskI | null;
    toogleModal: (show: boolean) => any;
    handleUser: (user: UserI) => any;
    handleTask: (task: TaskI[]) => any;
    handleTaskSelected: (task?: any) => any;
}

const ContextUI = createContext<ContextUIProps>({
    showModal: false,
    user: null,
    tasks: [],
    taskSelected: null,
    toogleModal: (show: boolean) => {},
    handleUser: (user: UserI) => {},
    handleTask: (task: TaskI[]) => {},
    handleTaskSelected: (task?: TaskI) => {},
});

export const ContextUIProvider = ({ children }: { children: React.ReactNode }) => {
    const [modal, setModal] = useState(false);
    const [user, setUser] = useState<UserI | null>(null);
    const [tasks, setTasks] = useState<TaskI[]>([]);
    const [taskSelected, setTaskSelected] = useState<TaskI | null>(null);

    return (
        <ContextUI.Provider value={{
            showModal: modal,
            user,
            tasks,
            taskSelected,
            toogleModal: (show: boolean) => setModal(show),
            handleUser: (user: UserI) => setUser(user),
            handleTask: (task: TaskI[]) => setTasks(task),
            handleTaskSelected: (task?: TaskI ) => setTaskSelected(task ? task : null),
          }}>
            {children}
        </ContextUI.Provider>
    )
}

export const useUiContext = () => useContext(ContextUI)