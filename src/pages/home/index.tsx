import { useEffect } from 'react';
import { AppLayout } from "../../layouts/AppLayout";
import { TaskList } from "../../components/home/TaskList";
import { Grid, Loading } from "@nextui-org/react";
import { useTask } from "../../hooks/useTask";
import { ModalTask } from '../../components/home/ModalTask';


export default function HomePage() {
    const { tasks, loading, onGetTasks, toogleModal } = useTask();

    useEffect(() => {
        onGetTasks();
        return () => { }
    }, []);


    return (
        <AppLayout>
            <ModalTask />
            <Grid.Container gap={2} justify="center">
            {
                loading ? <Loading size="xl" /> : (
                    <>
                        <Grid xs={12} md={4} css={{
                            display: "flex",
                            flexDirection: "column",
                        }}>
                            <TaskList
                                title="Task to do"
                                list={
                                    tasks?.filter((task) => task.status === "todo")
                                }
                                addAction={() => toogleModal(true)}
                            />

                        </Grid>
                        <Grid xs={12} md={4}>
                            <TaskList
                                title="In Progress"
                                list={
                                    tasks?.filter((task) => task.status === "in-progress")
                                }
                            />
                        </Grid>
                        <Grid xs={12} md={4}>
                            <TaskList
                                title="Done"
                                list={
                                    tasks?.filter((task) => task.status === "done")
                                }
                            />
                        </Grid>
                    </>
                )
            }
            </Grid.Container>
        </AppLayout>
    )
}
