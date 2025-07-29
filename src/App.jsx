import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import HomeLayout from "./rootLayouts/HomeLayout"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Dashboard from "./pages/Dashboard"
import Statistics from "./pages/Statistics"

function App() {
  
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="dashbord" element={<Dashboard />} />
        <Route path="statistics" element={<Statistics />} />
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
