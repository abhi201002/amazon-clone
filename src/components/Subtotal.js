import React from 'react'
import { useEffect ,useState} from 'react';
import { useDataValue } from './Datalayer';
import './subtotal.css'
import CurrencyFormat from 'react-currency-format';

function Subtotal() {
    const [Sum,setSum] = useState(0);
    const [{cart},dispatch] = useDataValue();
    const Add = (total,item) => {
        return total + (+item?.price.replace(/,/g,""));
    }
    useEffect(() => {
        // const Sum = () => {
            let setSum = 0;
            cart?.map((e)=>{
                setSum = setSum + (+(e?.price.replace(/,/g,"")));
            })
        // }
    }, [cart])
  return (
    <div className="Subtotal">
        <h2>Subtotal</h2>
        {console.log(cart.reduce(Add,0))}
        <CurrencyFormat
        renderText={(value) =>(
            <p>Subtotal ({cart?.length} item): <strong>{value}</strong></p>
        )}
        decimalScale={2}
        value = {cart.reduce(Add,0)}
        displayType = "text"
        thousandSeparator = {true}
        prefix = {"Rs "}
        />
        <button className='Subtotal_btn'>Proceed To Checkout</button>
    </div>
  )
}

export default Subtotal