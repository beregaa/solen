import { lazy, Suspense } from "react";
import Main from "./pages/main/main";
const InventoryPage = lazy(() => import("./pages/inventory/inventory"));
const GalleryPage = lazy(() => import("./pages/gallery/gallery"));

const routes = [
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/inventory/:country",
    element: (
      <Suspense fallback={null}>
        <InventoryPage />
      </Suspense>
    ),
  },
  {
    path: "/gallery",
    element: (
      <Suspense fallback={null}>
        <GalleryPage />
      </Suspense>
    ),
  },
];

export default routes;
