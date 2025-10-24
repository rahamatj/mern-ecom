import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from '@/pages/Home.jsx'
import Header from "@/components/Header.jsx";
import Footer from "@/components/Footer.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/products/:id",
        element: <ProductDetails />
    }
])

function App() {

    return (
        <>
            <Header />
            <RouterProvider router={router} />
            <Footer />
        </>
      )
}

export default App
