import { Card, Grid, Text } from "@nextui-org/react"
import { TaskI } from "../../interfaces/task"
import { BadgeStatus } from "./BadgeStatus";
import { CustomButton } from "../ui/CustomButton";
import { MdModeEditOutline } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";
import { useTask } from "../../hooks/useTask";
 
export const TaskItem = ({ task }: { task: TaskI }) => {
    const {onDeleteTask, handleTaskSelected, toogleModal} = useTask();    

    return (
        <Card 
            variant='bordered' isHoverable css={{
            marginBottom: "1rem",
            height: "200px"
        }}>
            <Card.Header>
                <Grid.Container justify='space-between'>
                    <Grid>
                        <Text b h5>{task.title}</Text>
                    </Grid>
                    <Grid>
                        <BadgeStatus status={task.status}/>
                    </Grid>
                </Grid.Container>
            </Card.Header>
            <Card.Divider/>
            <Card.Body>
                <Text>{task.description}</Text>
            </Card.Body>
            <Card.Footer>
                <Grid.Container justify='flex-end' gap={1}>
                    <Grid>
                        <CustomButton 
                            icon={<MdModeEditOutline/>}
                            label="Edit" 
                            color='secondary' 
                            size='xs' 
                            onPress={() => {
                                handleTaskSelected(task);
                                toogleModal(true);
                            }}
                            flat/>
                    </Grid>
                    <Grid>
                        <CustomButton 
                            icon={<CiCircleRemove/>}
                            label="Delete" 
                            color='error' 
                            size='xs' 
                            onPress={() => onDeleteTask(task.id)}
                            flat/>
                    </Grid>
                 </Grid.Container>   
            </Card.Footer>
        </Card>
    )
}
