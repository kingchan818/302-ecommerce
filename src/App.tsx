import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import TrackScreen from './screens/TrackScreen';
import Nav from './components/Nav';
import LoginModals from './components/Modals/LoginModals';
import RegisterModals from './components/Modals/RegisterModals';
import ProductScreen from './screens/ProductScreen';
import Footer from './components/Footer';
import CheckOutScreen from './screens/CheckOutScreen';
import { DecidedNode } from './components/ToastNotification/DecidedNode';
import { Danger } from './components/ToastNotification/Danger';
import { Warning } from './components/ToastNotification/Warning';
function App() {
    const [isOpen, setIsOpen] = useState(false);
    const [toggleRegister, setToggleRegister] = useState(false);

    return (
        <>
            <BrowserRouter>
                <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
                <LoginModals
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    setToggleRegister={setToggleRegister}
                    toggleRegister={toggleRegister}
                />
                <RegisterModals
                    toggleRegister={toggleRegister}
                    setToggleRegister={setToggleRegister}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />
                <Routes>
                    <Route path="/*" element={<HomeScreen />} />
                    <Route path="/cart/*" element={<CartScreen />} />
                    <Route path="/track/*" element={<TrackScreen />} />
                    <Route path="/products/:id" element={<ProductScreen />} />
                    <Route path="/checkout/*" element={<CheckOutScreen />} />
                    {/* <Route path="/" element={<HomeScreen />}> */}
                    {/* <Route path="teams" element={<Teams />}>
                            <Route path=":teamId" element={<Team />} />
                            <Route path="new" element={<NewTeamForm />} />
                        </Route> */}
                </Routes>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
