import { Card, Text } from "@nextui-org/react"
import { TaskI } from "../../interfaces/task"
import { TaskItem } from "./TaskItem"
import { CustomButton } from "../ui/CustomButton"
import { IoMdAddCircleOutline } from "react-icons/io"

export const TaskList = ({ title, list, addAction }: { title: string, list: TaskI[], addAction?: () => any }) => {
    return (
        <Card css={{
            maxHeight: "86vh",
        }} >
            <Card.Header>
                <Text b>{title}</Text>
            </Card.Header>
            {
                addAction && (
                    <>
                        <CustomButton icon={<IoMdAddCircleOutline />} onPress={addAction} auto label="Add task" bordered color='secondary' />
                    </>
                )
            }
            <Card.Divider />
            <Card.Body css={{ py: "$10" }}>
                {list?.map((item) => (
                    <TaskItem key={item.id} task={item} />
                ))}
            </Card.Body>
        </Card>
    )
}
