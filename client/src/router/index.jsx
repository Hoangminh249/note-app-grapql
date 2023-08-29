import { createBrowserRouter, Outlet } from "react-router-dom";
import NodeList from "../components/NodeList";
import Note from "../components/Note";
import AuthProvider from "../context/AuthProvider";
import Errorpage from "../pages/Errorpage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ProtectedRoute from "./ProtectedRoute";

const AuthLayout = () => {
  return (
    <AuthProvider>
      <Outlet />
    </AuthProvider>
  );
};

export default createBrowserRouter([
  {
    element: <AuthLayout />,
    errorElement: <Errorpage />,
    children: [
      {
        element: <Login />,
        path: "/login",
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <Home />,
            path: "/",
            children: [
                {
                    element: <NodeList />,
                    path:`folders/:folderId`,
                    children:[
                        {
                            element:<Note /> ,
                            path:`note/:noteId`
                        }
                    ]
                }
            ]
          },
        ],
      },
      
    ],
  },
]);
