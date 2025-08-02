import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import styles

import HomeLayout from "./rootLayouts/HomeLayout";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Dashboard from "./pages/Dashboard";
import Statistics from "./pages/Statistics";
import DetailsProdect from "./pages/DetailsProdect";
import NotFound from "./pages/NotFound";

function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="details/:id" element={<DetailsProdect />} />
          <Route path="dashbord" element={<Dashboard />} />
          <Route path="statistics" element={<Statistics />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </>
    )
  );

  return (
    <>
      <RouterProvider router={route} />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
