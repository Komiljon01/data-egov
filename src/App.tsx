import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import {
  Home,
  Organizations,
  News,
  Monitoring,
  Statistics,
  AIData,
  Copyrights,
  Faq,
  Glossary,
  Instructions,
  Legislation,
  Requests,
  Poll,
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
        {
          path: "/copyrights",
          element: <Copyrights />,
        },
        {
          path: "/glossary",
          element: <Glossary />,
        },
        {
          path: "/instructions",
          element: <Instructions />,
        },
        {
          path: "/legislation",
          element: <Legislation />,
        },
        {
          path: "/requests",
          element: <Requests />,
        },
        {
          path: "/faq",
          element: <Faq />,
        },
        {
          path: "/poll",
          element: <Poll />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
