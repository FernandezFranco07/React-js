import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CartWidget.css';
import Logo from './cart3.svg';

function CartWidget() {
    return (
        <div>
         <a href=" " className="logoCarrito" ><img src={Logo} width='25px' alt="..."/>Mi compra</a>
        </div>
    )
}

export default CartWidget
