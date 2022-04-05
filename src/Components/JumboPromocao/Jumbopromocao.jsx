import React from 'react'
import './Jumbopromocao.css'
import Navbar from '../NavBar/Navbar';

export default () => {
    return (
        <header>
            <Navbar></Navbar>
            <div class="container">
                <br />
                <h1 class="display-4">Promoções</h1>
                <p class="leadpromo1">Temos as melhores promoções para você</p>
                <button class="btn1"><a href="#pacotes">Pacotes</a></button>
                <button class="btn2"><a href="#destinos">Destinos</a></button>
            </div>
        </header>
    );
}