import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';




import './header.styles.scss';

const Header = ({currentuser,hidden}) => (
    <div className='header'> 
    <Link className='logo-container' to='/'>
        <Logo className='logo' />

    </Link>
    <div className='options'>
        <Link to='/shop' className='option'>SHOP</Link>
        <Link to='/shop' className='option'>CONTACT</Link>
        <Link>
        {
            currentuser ?(
            <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
             ) : (
            <Link className='option' to='/signin'>SIGNIN</Link>
             )}
        </Link> 
        <CartIcon/>

    </div>{
        hidden? null:
    <CartDropdown />
    }

        

    </div>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
  });
  
  export default connect(mapStateToProps)(Header);
