import { NextUIProvider } from '@nextui-org/react';
import { darkTheme } from '../themes';
import { ContextUIProvider } from '../context/ContexUI';

export default function Providers({ children} : { children: React.ReactNode}) {
  return (
    <NextUIProvider theme={darkTheme}>
      <ContextUIProvider>
        {children}
      </ContextUIProvider>
    </NextUIProvider>
  )
}
