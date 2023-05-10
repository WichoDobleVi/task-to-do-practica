import { useUser } from "../hooks/useUser";
import HomePage from "../pages/home";
import LoginPage from "../pages/login";

const withAuth = (Component: any) => {
  return () => {
      const { user } = useUser();
      if (!user) {
          return <LoginPage />;
      }
      return (
          <Component />
      );
  };
};
const AdminRoutes = ({children}: {children: React.ReactNode}) => {
  return <HomePage/> ;
}


export const PrivateRoutesAuth = withAuth(AdminRoutes);

