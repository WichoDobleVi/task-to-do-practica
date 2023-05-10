import { useTask } from "../../hooks/useTask";
import { CustomButton } from "../ui/CustomButton";
import { ModalUi } from "../Modal"
import { Dropdown, Grid } from '@nextui-org/react';
import { MdSave, MdCancel } from 'react-icons/md';
import { FormProvider, useForm } from 'react-hook-form';
import { InputForm } from "../ui/InputForm";
import { TextareaForm } from "../ui/TextareaForm";
import { useState, useMemo, useEffect } from 'react';

export const ModalTask = () => {
  const methods = useForm();
  const { showModal, taskSelected, toogleModal, onPostTask, onPutTask, handleTaskSelected} = useTask();
  const [selected, setSelected] = useState(new Set(["todo"]));

  useEffect(() => {
    if (taskSelected) {
      methods.reset(taskSelected);
      setSelected(new Set([taskSelected.status]));
    }
  }, [taskSelected]);

  const onSubmit = (data: any) => {
    methods.reset({
      title: "",
      description: ""
    });
    if (taskSelected) {
      onPutTask({
        ...data,
        status: selectedValue
      });
      handleTaskSelected(null);
      toogleModal(false);

      return ;
    }
    onPostTask({
      ...data,
      status: selectedValue
    });
    toogleModal(false);
  }

  const selectedValue = useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  return (
    <FormProvider {...methods}>
      <ModalUi visible={showModal} title={taskSelected ? "Edit Task" : "New Task"} toogleModal={() => {
        methods.reset({
          title: "",
          description: ""
        });
        if(taskSelected) {
          console.log("handleTaskSelected", taskSelected);
          handleTaskSelected();
        }
        toogleModal(false);
      }} footer={
        (
          <Grid.Container gap={1} justify="center">
            <Grid>
              <CustomButton
                icon={
                  <MdCancel />
                }
                onPress={() => {
                  methods.reset({
                    title: "",
                    description: ""
                  });
                  if(taskSelected) {
                    console.log("handleTaskSelected", taskSelected);
                    handleTaskSelected();
                  }
                  toogleModal(false);
                }}
                color="error"
                size='sm'
                label="Cancel" />
            </Grid>
            <Grid>
              <CustomButton
                icon={
                  <MdSave />
                }
                onClick={methods.handleSubmit(onSubmit)}
                color="success"
                size='sm'
                label="Save" />
            </Grid>
          </Grid.Container>
        )
      } >
        <Grid.Container gap={1} justify="center">
          <Grid xs={12} md={12} lg={12}>
            <InputForm 
              name='title' 
              required
              label="Title" 
              placeholder="Title" 
              width="100%" 
              bordered
              rules={{
                required: {
                  value: true,
                  message: "Title is required"
                }
              }}
              />
          </Grid>
          <Grid xs={12} md={12} lg={12}>
            <TextareaForm 
              name="description" 
              label="Description" 
              placeholder="Description" 
              width="100%" 
              bordered
              rules={{
                required: {
                  value: true,
                  message: "Description is required"
                }
              }}  
            />
          </Grid>
          <Grid xs={12} md={12} lg={12}>
            <Dropdown>
              <Dropdown.Button flat size={'md'}>{selectedValue}</Dropdown.Button>
              <Dropdown.Menu aria-label="Static Actions"
                selectionMode="single"
                selectedKeys={selected}
                onSelectionChange={setSelected}
              >
                <Dropdown.Item key="todo">To do</Dropdown.Item>
                <Dropdown.Item key="in-progress">In-Progress</Dropdown.Item>
                <Dropdown.Item key="done">Done</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Grid>
        </Grid.Container>
      </ModalUi>
    </FormProvider>
  )
}
