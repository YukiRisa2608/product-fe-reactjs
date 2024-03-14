import React from 'react'
import { NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import { Container, NavbarBrand, Navbar, Nav, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import App from './App'
import { ClipLoader } from 'react-spinners'
import CategoryPage from './components/admin/CategoryPage'
import HomePage from './components/customer/HomePage'
import DefaultLayout from './components/admin/DefaultLayout'
import ProductPage from './components/admin/ProductPage'

const Router = () => {

    const navigate = useNavigate();
    return (
        <div>

            <Routes>
                <Route path='/' element={<HomePage />} />
            </Routes>

            <Routes>
                <Route path='/admin' element={<DefaultLayout />} >
                    <Route path='/admin/category' element={<CategoryPage />} />
                    <Route path='/admin/product' element={<ProductPage />} />
                </Route>
            </Routes>
        </div>
    )
}

export default Router;