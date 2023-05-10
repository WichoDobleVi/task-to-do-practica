import { Grid, Loading, Spacer, Text } from "@nextui-org/react"
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../ui/CustomButton"
import { MdLockOutline } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { InputForm } from "../ui/InputForm";
import { FormProvider, useForm } from "react-hook-form";
import { InputFormPassword } from "../ui/InputFormPassword";
import { useUser } from "../../hooks/useUser";


export const FormLogin = () => {
    const methods = useForm();
    const { loading, onGetUser } = useUser();

    const handleLogin = async (data: any) => {
        await onGetUser(data.email, data.password);
    };

    return (
        <FormProvider {...methods}>
            <Grid.Container justify='center' alignContent='center' alignItems='center'>
                <Grid xs={12} md={12} lg={12} justify='center' alignContent='center' alignItems='center'>
                    <Text h2 b align="center">Task Manager</Text>
                </Grid>
                <Grid xs={12} md={12} lg={12} justify='center'>
                    <Text h3 align="center" color="gray" >Sign in</Text>
                </Grid>
                <Spacer y={1.5} />

                <Grid xs={12} md={12} lg={12} >
                    <InputForm
                        display='flex'
                        justify='center'
                        name="email"
                        type="email"
                        placeholder="Email"
                        width="50%"
                        required
                        clearable
                        rules={{
                            required: {
                                value: true,
                                message: "Email is required"
                            },
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                message: "Invalid email address"
                            }
                        }}
                        contentRight={
                            <MdMailOutline />
                        }
                    />
                </Grid>
                <Spacer y={1} />
                <Grid xs={12} md={12} lg={12} justify='center'>
                    <InputFormPassword
                        name="password"
                        placeholder="Password"
                        width="50%"
                        required
                        rules={{
                            required: {
                                value: true,
                                message: "Password is required"
                            },
                        }}
                    />
                </Grid>
                <Spacer y={1.5} />
                <Grid xs={12} md={12} lg={12} justify='center' >
                    <CustomButton
                        icon={<MdLockOutline />}
                        label="Sign in"
                        onClick={methods.handleSubmit(handleLogin)}
                        size='lg'
                        color='secondary'>
                            {
                                loading && <Loading type="spinner" color="currentColor" size="sm" />
                            }
                    </CustomButton>
                </Grid>
            </Grid.Container>
        </FormProvider>
    )
}
