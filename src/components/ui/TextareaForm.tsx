import { ErrorMessage } from "@hookform/error-message";
import { Grid, Input, Text, Textarea, useInput } from "@nextui-org/react";
import { Controller, useFormContext } from "react-hook-form";

interface PropsInterface {
    name: string;
    rules?: any;
    handleChangeText?: (value: string) => void;
    [x: string]: any;
}

export const TextareaForm = ({ name, rules, handleChangeText, ...props }: PropsInterface) => {
    const { control, formState, register } = useFormContext();
    const { bindings } = useInput("");


    return (
        <Controller
            name={name || ""}
            control={control}
            render={({ field: { onChange, value }, fieldState }) => (
                <Grid.Container justify='center'>
                    <Grid xs={12} justify='center'>
                        <Textarea
                            aria-label={name}
                            {...bindings}
                            onChange={(e) => {
                                onChange(e.target.value);
                                handleChangeText && handleChangeText(e.target.value);
                            }}
                            color={fieldState.invalid ? "error" : 'default'}
                            {...props}
                            value={value || ""}
                        />
                    </Grid>
                    <Grid xs={12} justify='center' >
                        <ErrorMessage
                            errors={formState.errors}
                            name={name}
                            render={({ message }) => (
                                <Text color="error" size="$xs">
                                    {message}
                                </Text>
                            )}
                        />
                    </Grid>
                </Grid.Container>
            )}
            rules={rules}
        />
    );
};