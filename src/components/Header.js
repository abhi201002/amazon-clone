import React from 'react'
import "./header.css"
import PageviewSharpIcon from '@mui/icons-material/PageviewSharp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useDataValue } from './Datalayer';
import { auth } from './firebase';

function Header() {
    const url = "https://pngimg.com/uploads/amazon/amazon_PNG11.png"
    const [{cart,user},dispatch] = useDataValue();
    const login = () =>{
        if(user){
            auth.signOut();
        }
    }
  return (
    <>
        <div className="Header">
            <Link to = "/">
                <img src = {url} alt="" className="header_img" />
            </Link>
            <div className="search">
                <input type="text" className="header_input" placeholder='Search'/>
                <PageviewSharpIcon className='header_icon'/>
            </div>
            <Link to = {user ? "/" : "/login"} onClick = {login} className="info">
                <div className="info1">Hello! {user ? user : ""}</div>
                <div className="info2">{ user ? "Sign Out" : "Sign In" }</div>
            </Link>
            <Link to = "/" className="info">
                <div className="info1">Orders</div>
                <div className="info2">& returns</div>
            </Link>
            <Link to = "/" className="info">
                <div className="info1">Your</div>
                <div className="info2">Prime</div>
            </Link>
            <Link to = "/checkout" className = "info" id = "checkout">
                <ShoppingCartIcon/>
                <p>{cart?.length}</p>
            </Link>
        </div>
    </>
  )
}

export default Header