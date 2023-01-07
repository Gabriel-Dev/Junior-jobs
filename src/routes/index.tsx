import { Navigate, Route, Routes } from "react-router-dom";
import { Login } from "../pages/login";
import { Company } from "../pages/company";
import { Register } from "../pages/register";
import { ProtectRoutes } from "../components/ProtectRoutes";
import { UserProfile } from "../pages/user";
import { Job } from "../pages/job";
import { MyUserContext } from "../components/ProtectRoutes/MyUserContext";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route element={<ProtectRoutes />}>
        <Route path="/company" element={<Company />} />
        <Route element={<MyUserContext />}>
          <Route path="/user" element={<UserProfile />} />
          <Route path="/job/:name" element={<Job />} />
        </Route>
      </Route>
    </Routes>
  );
};
