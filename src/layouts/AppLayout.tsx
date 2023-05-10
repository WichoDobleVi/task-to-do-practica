import { Container} from "@nextui-org/react";
import { NavBar } from "../components/NavBar"


export const AppLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
        <NavBar />
        <Container>
           {children}
        </Container>

    </>
  )
}
