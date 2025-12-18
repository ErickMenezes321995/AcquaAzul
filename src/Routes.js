import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from './pages/Home/index';
import Gallery from './pages/galeria/galeria';
import Contatos from './pages/contatos/contatos';



function RouterApp(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/galeria" element={<Gallery/>}/>
            <Route path="/contato" element={<Contatos/>} />
        </Routes>
    )
}

export default RouterApp;