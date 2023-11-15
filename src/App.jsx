import { Routes, Route } from "react-router-dom"
import PageNotFound from "./PageNotFound"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/registerPage"
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage"

function App() {
  return (
    <Routes>
       <Route path="/" element={<HomePage />} />
       <Route path="/*" element={<PageNotFound />} />
       <Route path="/login" element={<LoginPage />} />
       <Route path="/register" element={<RegisterPage />} />
       <Route path="/product" element={<ProductPage />} />
    </Routes>
  )
}

export default App
