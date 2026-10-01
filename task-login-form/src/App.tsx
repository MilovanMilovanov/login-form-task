import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage"));
const TablePage = lazy(() => import("./pages/TablePage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading home page...</div>}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: "/table",
    element: (
      <Suspense fallback={<div>loading table page...</div>}>
        <TablePage />
      </Suspense>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
