import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import HomeLayout from "./rootLayouts/HomeLayout"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Dashboard from "./pages/Dashboard"
import Statistics from "./pages/Statistics"
import Sidebar from "./pages/Sidebar"
import AllDetails from "./pages/AllDetails"
import DetailsProdect from "./pages/DetailsProdect"
import NotFound from "./pages/NotFound"

function App() {
  
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} >
          <Route path="sidebar" element={<Sidebar />} />
          <Route path="allDetails" element={<AllDetails />} />
          <Route path="detailsProdect" element={<DetailsProdect />} />
        </Route>
        <Route path="dashbord" element={<Dashboard />} />
        <Route path="statistics" element={<Statistics />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={route} />
    </>
  )
}

export default App
