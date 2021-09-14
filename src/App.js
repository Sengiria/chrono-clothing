import './App.scss';
import Topbar from './components/topbar/topbar.component';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import SignInPage from './pages/sign-in/sign-in-page.component';
import React from 'react';
import { connect } from 'react-redux';
import Shop from './pages/shop/shop.component';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/user/user.selectors';
import CheckoutPage from './pages/checkout/checkout.component';
import { checkUserSession } from './redux/user/user.actions';

class App extends React.Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const { checkUserSession } = this.props
    checkUserSession()

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    //const { pathname } = useLocation();
    //<Redirect from="/:url*(/+)" to={pathname.slice(0, -1)} />
    return (
      <div className="App">
        <Topbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/shop/:id" component={Shop} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin" render={() =>
            this.props.currentUser ?
              (<Redirect to="/" />)
              :
              (<SignInPage />)
          } />



        </Switch>
      </div>

    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
