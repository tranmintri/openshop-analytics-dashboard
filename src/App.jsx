import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Orders from './pages/Orders'
import Create from './pages/Create-Product'
import ProductDetail from './pages/Product-Details'
import OrderDetails from './pages/Order-Details'
import Customer from './pages/Customer'
import Profile from './pages/Profile'

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Dashboard />} />
                    <Route path="products" element={<Products />} />{' '}
                    <Route path="products/create" element={<Create />} />{' '}
                    <Route path="products/:id" element={<ProductDetail />} />{' '}
                    <Route path="orders" element={<Orders />} /> <Route path="orders/:id" element={<OrderDetails />} />{' '}
                    <Route path="customers" element={<Customer />} /> <Route path="profiles" element={<Profile />} />{' '}
                </Route>{' '}
                <Route path="/register" element={<Register />} />{' '}
            </Routes>{' '}
        </Router>
    )
}

export default App
