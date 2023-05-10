import { Navbar, Text, Button, User } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/useUser";

export const NavBar = () => {
    const navigate = useNavigate();
    const { user, handleUser } = useUser();

    const handleLogout = () => {
        handleUser(null);
        navigate('/');
    };

    return (
        <Navbar isBordered variant={'static'}>
            <Navbar.Brand>
                <Text b color="inherit" hideIn="xs">
                    TASK MANAGER
                </Text>
            </Navbar.Brand>
            <Navbar.Content>
                <Navbar.Link color="inherit">
                    <User
                        src={user?.avatar}
                        name={user?.name}
                    />
                </Navbar.Link>
                <Navbar.Item>
                    <Button auto flat href="/" onClick={handleLogout}>
                        Sign out
                    </Button>
                </Navbar.Item>
            </Navbar.Content>
        </Navbar>
    )
}
