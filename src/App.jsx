import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Orders from './pages/Orders'
import Create from './pages/Create-Product'
import ProductDetail from './pages/Product-Details'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} /> <Route path="products" element={<Products />} />{' '}
                    <Route path="products/create" element={<Create />} />{' '}
                    <Route path="products/1" element={<ProductDetail />} /> <Route path="orders" element={<Orders />} />{' '}
                </Route>{' '}
                <Route path="/register" element={<Register />} />{' '}
            </Routes>{' '}
        </Router>
    )
}

export default App
