import React from "react";
import './topbar.styles.scss';
import { Link, withRouter } from 'react-router-dom';
import Countdown from 'react-countdown';
import Cart from '../cart/cart.component';
import { FaBars, FaUserAlt, FaShoppingCart, FaPhoneAlt, FaEnvelope, FaFireAlt } from "react-icons/fa";
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { selectCartHidden, selectCartItemsCount } from '../../redux/cart/cart.selectors';
import { selectCurrentUser, selectUserHidden } from '../../redux/user/user.selectors';
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { toggleUserHidden } from "../../redux/user/user.actions";

const Topbar = ({ toggleCartHidden, toggleUserHidden, currentUser, quantity, location, cartHidden, userHidden }) => {
    return (
        <div>
            <header className="header--sales">
                <nav>
                    <ul className="nav__links">
                        <li>
                            <Link to="#" className="nav__links__with-icon">
                                <span>SUMMER SALE</span>
                                <FaFireAlt />
                            </Link>
                        </li>
                        <li>
                            <Link to="#">
                                <Countdown
                                    date={Date.now() + 2592000000} />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
            <header className="header--contact">
                <nav>
                    <ul className="nav__links">
                        <li>
                            <Link to="#" className="nav__links__with-icon">
                                <FaPhoneAlt />
                                <span>+36 00 000 0000</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="nav__links__with-icon">
                                <FaEnvelope />
                                <span>sengiria.wymer@gmail.com</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <nav>
                </nav>
            </header>
            <header className={`header--main-menu ${location.pathname === '/' ? 'home' : ''}`}>
                <button className="toggle-button" >
                    <FaBars />
                </button>
                <img className="logo" src="chrono-clothing--white.png" alt="logo" />
                <nav className="main-menu__items">
                    <ul className="nav__links">
                        <li>
                            <Link to="/">HOME</Link>
                        </li>
                        <li>
                            <Link to="/shop">SHOP</Link>
                        </li>
                        <li>
                            <Link to="#">ABOUT</Link>
                        </li>
                    </ul>
                </nav>
                <nav>
                    <ul className="nav__links">
                        <li>
                            {
                                currentUser ?
                                    (
                                        <div className="current-user" onClick={toggleUserHidden}>
                                            {
                                                currentUser.photoURL ?
                                                    <img className="current-user__picture--small" alt="profile" src={currentUser.photoURL} />
                                                    : <FaUserAlt />
                                            }
                                            <span className="current-user__name">{currentUser.displayName}  </span>
                                            {userHidden ?
                                                null : (
                                                    <div className="dropdown__body">                                                    
                                                        <p onClick={() => { auth.signOut() }}>Sign out</p>
                                                    </div>
                                                )
                                            }
                                        </div>

                                    )
                                    :
                                    (
                                        <Link to="/signin">
                                            <FaUserAlt />
                                        </Link>
                                    )
                            }
                            {
                                cartHidden ?
                                    null
                                    :
                                    <Cart />
                            }
                        </li>
                        <li>
                            <Link onClick={toggleCartHidden} className="cart" to="#">
                                <FaShoppingCart />
                                <span className="cart__badge">{quantity}</span>
                            </Link>

                        </li>

                    </ul>
                </nav>
            </header>
        </div>
    )
}


const mapStateToProps = state => ({
    currentUser: selectCurrentUser(state),
    quantity: selectCartItemsCount(state),
    cartHidden: selectCartHidden(state),
    userHidden: selectUserHidden(state)
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()),
    toggleUserHidden: () => dispatch(toggleUserHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Topbar));