import { FC } from 'react';
import { Button, ButtonProps } from '@nextui-org/react';

interface CustomButtonProps extends ButtonProps {
    label: string;
}

export const CustomButton: FC<CustomButtonProps> = ({label, children, ...props }) => {
  return (
    <Button {...props}>{children ? children : label}</Button>
  )
}
