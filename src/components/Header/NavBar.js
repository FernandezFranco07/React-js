import React from 'react';
import './NavBar.css';
import img from './logoTienda.jpg';
import CartWidget from './CartWidget';


function NavBar (){
    return <>   
<div className="NavBar">    
                    <img className="imagen" src={img} alt="..."/>
                    <CartWidget/>
  <nav className="categorias">
    <a href=" " className="NavButton" >Procesador</a>
    <a href=" " className="NavButton" >Memoria RAM</a>
    <a href=" " className="NavButton" >Motherboard</a>
    <a href=" " className="NavButton" >Almacenamiento</a>
    <a href=" " className="NavButton" >Placa de video</a>
    <a href=" " className="NavButton" >Refrigeracion</a>
    <a href=" " className="NavButton" >Gabinete</a>
  </nav>
</div>
    </>;
}

export default NavBar

