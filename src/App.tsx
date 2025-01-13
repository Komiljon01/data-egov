import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import {
  Home,
  Organizations,
  News,
  Monitoring,
  Statistics,
  AIData,
} from "./pages";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "organizations",
          element: <Organizations />,
        },
        {
          path: "/news",
          element: <News />,
        },
        {
          path: "/monitoring",
          element: <Monitoring />,
        },
        {
          path: "/statistics",
          element: <Statistics />,
        },
        {
          path: "/ai-data",
          element: <AIData />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
