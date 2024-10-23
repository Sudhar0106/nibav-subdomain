import { Route, Routes } from "react-router-dom";
import AuthLayout from "./Layouts/authLayout";
import Login from "./auth/login";
import RootLayout from "./Layouts/rootLayout";
import SubLayout from "./Layouts/subLayout";
import Dashboard from "./views/Dashboard";
import TableModules from "./views/module";
import NotFound from "./views/NotFound";
import MRTModule from "./views/MRT-table";
import { FC } from "react";

export const MainRouters: FC = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="" element={<AuthLayout />}>
        <Route path="/" element={<Login />} />
      </Route>
    </Routes>
  );
};

export const NibavRouters: FC = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/pages" element={<RootLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="table" element={<TableModules />} />
        <Route path="mrt-table" element={<MRTModule />} />
      </Route>
    </Routes>
  );
};

export const EliteRouters: FC = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/pages" element={<SubLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="table" element={<TableModules />} />
        <Route path="mrt-table" element={<MRTModule />} />
      </Route>
    </Routes>
  );
};
