import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Loader } from "./ui";

const HomePage = lazy(() => import("./pages/HomePage"));
const TablePage = lazy(() => import("./pages/TablePage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader>Loading home page...</Loader>}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: "/table",
    element: (
      <Suspense fallback={<Loader>loading table page...</Loader>}>
        <TablePage />
      </Suspense>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
