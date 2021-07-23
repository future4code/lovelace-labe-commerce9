import React from 'react';
import './App.css';

function Header (){
    return(
        <div className="header">
        <header>
            <h2>filtros</h2>
        <ul>
            <li>Valor minimo</li>
                     <input type='number'></input>
            <li>Valor Maximo</li>
                     <input type="text"></input>
            <li>Buscar por Nome</li>
                     <input type="text"></input>
        </ul>
      
        </header>
      </div>
    )
}

export default Header;