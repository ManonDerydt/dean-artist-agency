import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from "./Pages/Header";
import Customers from "./Pages/Customers";
import Contact from "./Pages/Contact";
import Portefolios from "./Pages/Portefolios";
import Talents from "./Pages/Talents";
import Dean from "./Pages/Dean";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/partners" element={<Customers />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/portefolios" element={<Portefolios />} />
                    <Route path="/talents" element={<Talents />} />
                    <Route path="/talents" element={<Talents />} />
                    <Route path="/us" element={<Dean />} />
                    <Route path="/" element={<Header />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default App;