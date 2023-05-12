import { Route, RouterProvider, Routes, createBrowserRouter } from "react-router-dom";
import GroupiePage from "./pages/groupie/GroupiePage";
import routes from "./routes/routes";

export default () => {
  return (
    <RouterProvider router={createBrowserRouter(routes)} />
  )
};

