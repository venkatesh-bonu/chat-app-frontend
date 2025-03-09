import { Cookie } from "@mui/icons-material";
import Cookies from "js-cookie";
import React, { lazy, Suspense } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LayoutLoader } from "./components/Layouts/Loaders";

const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import("./pages/Groups"));
const NotFound = lazy(() => import("./pages/NotFound"));
const ProtectedRoute = lazy(() =>
  import("./components/ProtectedRoute/ProtectedRoute")
);

const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const Dashboard = lazy(() => import("./pages/admin/Dashboard"));
const UserManagement = lazy(() => import("./pages/admin/UserManagement"));
const ChatManagement = lazy(() => import("./pages/admin/ChatManagement"));
const MessageManagement = lazy(() => import("./pages/admin/MessageManagement"));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LayoutLoader />}>
        <Routes>
          <Route path="/" element={<ProtectedRoute element={<Home />} />} />
          <Route
            path="/chat/:chatId"
            element={<ProtectedRoute element={<Chat />} />}
          />
          <Route
            path="/groups"
            element={<ProtectedRoute element={<Groups />} />}
          />
          <Route path="/login" element={<Login />} />

          <Route path="/admin" element={<AdminLogin />} />

          <Route path="/admin/dashboard" element={<Dashboard />} />

          <Route path="/admin/users" element={<UserManagement />} />

          <Route path="/admin/chats" element={<ChatManagement />} />

          <Route
            path="/admin/messages"
            element={<MessageManagement />}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
