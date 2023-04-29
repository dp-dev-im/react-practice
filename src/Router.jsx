import { createBrowserRouter } from "react-router-dom";
import Homemovie from "./routes/Homemovie";
import Detail from "./routes/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homemovie />,
  },
  {
    path: "/movie/:id",
    element: <Detail />,
    children: [{}],
  },
]);
export default router;
