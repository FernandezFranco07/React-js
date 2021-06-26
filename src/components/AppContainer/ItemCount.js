import React, { useState } from "react";
import "./ItemCount.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function ItemCount(props) {
  const [numero, setNumero] = useState(0);

  const incrementar = () => {
    if (numero <= props.stock -1) {
      setNumero (numero + 1)
    }
  };

  const decrementar = () => {
    if (numero > 0) {
      setNumero(numero -1)
    }
  }
    
 
  return (
    <div>
      <div className="contador">
      <button className="decrementar" onClick={decrementar}>
        -
      </button>
      <p className="numero">Cantidad:{numero}</p>
      <button className="incrementar" onClick={incrementar}>
        +
      </button>
      </div>
      <button className="botonCarrito" >AGREGAR AL CARRITO</button>
    </div>

  );
}

export default ItemCount;


