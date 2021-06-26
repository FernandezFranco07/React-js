import React, { useState, useEffect } from "react";
import "./Item.css";
import { itemsData } from "./ItemsData.js";
import ItemCount from '../ItemCount/ItemCount.js';

function Item(){
    const [items, setItems] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setItems(itemsData);
      console.log(items);
    }, 2000);
  });

  return (
    <div className="ItemList"> 
      {items.map((item, idx) => {
        return (       
<div className="Item" key={idx}>
    <div className="fondoImg">
      <img className="img" src={item.img} width="150px" alt="..."/>
    </div> 
  <div>
    <h1 className="nombreItem">{item.name}</h1>
    <h2 className="precioItem">Precio: {item.price}</h2>
    <ItemCount stock={item.stock}/>
  </div> 
</div>
        );
      })}
    </div>
  );
}

export default Item;
