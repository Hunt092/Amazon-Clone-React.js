import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './Firebase';



function Header() {
    const [{basket, user},dispatch] = useStateValue();

    const handleAuth =() =>{
        auth.signOut()
    }
    return (
        <header className="header">
            <Link to='/'>
            <img
            className="header_logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
            />
            </Link>

    
            <div className='header_search'>
                <input className="header_searchInput" text="text"/>
                <SearchIcon className="header_searchIcon"/>
                    
            </div>
            <nav className="header_nav">
                <Link to={!user && "/login"}>
                <div onClick={handleAuth} className= "header_option">
                    <span className="header_optionLineone">
                       hello, {user ? user.email :"Guest"} 
                    </span>
                    <span className="header_optionLinetwo">
                        {user ? 'Sign out ':' Sign in'}
                    </span>
                </div>
                </Link>
                

                <div className= "header_option">
                    <span className="header_optionLineone">
                       Return  
                    </span>
                    <span className="header_optionLinetwo">
                       Orders
                    </span>
                </div>

                <div className= "header_option">
                    <span className="header_optionLineone">
                       Your 
                    </span>
                    <span className="header_optionLinetwo">
                       Prime
                    </span>
                </div>
                <Link to='/checkout'>
                <div className="header_optionBasket">
                    <ShoppingBasketIcon/>
                    <span className='header_optionLinetwo header_BasketCount'>
                       {basket?.length}
                    </span>
                </div>
                </Link>
            </nav>
        </header>
    )
}

export default Header
