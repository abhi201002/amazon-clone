import React from 'react'
import { useDataValue } from './Datalayer';
import "./Product.css"

function Product(props) {
    const price = "₹ " + props.price;
    const [Cart,dispatch] = useDataValue();
    const add = () => {
        dispatch({
            type: "ADD_TO_CART",
            product: {
                id: props.id,
                name: props.name,
                price: props.price,
                img: props.img,
                rating: props.rating
            }
        })
        // console.log(Cart)
    }
  return (
    <>
        <div className="product">
            <p className="name">{props.name}</p>
            <p className="price">{price}</p>
            <div className="rating">
                {Array(props.rating)
                    .fill()
                    .map((_) =>{
                        return (<p>⭐</p>);
                    })
                }
            </div>
            <div className="pro_img">
                <img src={props.img} alt="" />
            </div>
            <div className="add">
                <button onClick={add}>Add to Cart</button>
            </div>
        </div>
    </>
  )
}

export default Product