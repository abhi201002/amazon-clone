import React from 'react'
import { useDataValue } from './Datalayer'
import './items.css'

function Item(props) {
    const [{cart},dispatch] = useDataValue();
    const del = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            id: props.id
        });
    }
  return (
    <div className="items">
        {/* <div className="items_img"> */}
            <img src={props.img} alt="" />
        {/* </div> */}
        <div className="items_info">
            <h3>{props.name}</h3>
            <small >In Stock</small>
            <div className="delete">
                <button onClick={del}>Remove</button>
            </div>
        </div>
        <strong>{"Rs " + props.price}</strong>
    </div>
  )
}

export default Item