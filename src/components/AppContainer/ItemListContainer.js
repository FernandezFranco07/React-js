import React from 'react';
import './ItemListContainer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemList from './ItemList';


function ItemListContainer() {

    return (
        <div className="container-fluid">
            <ItemList/>
        </div>
        

    )
}

export default ItemListContainer;
