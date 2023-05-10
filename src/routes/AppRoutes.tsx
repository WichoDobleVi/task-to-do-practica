import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PrivateRoutesAuth } from "./PrivateRoutes"
import LoginPage from "../pages/login"
import HomePage from "../pages/home"

export const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/home/*" element={
                <PrivateRoutesAuth />
            } />
            <Route path="/" element={<LoginPage/>} />
        </Routes>
    </BrowserRouter>
  )
}
