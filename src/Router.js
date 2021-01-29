import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Listings from './containers/Listings'
// import { Listings } from './containers/Listings'
// import About from './components/About'
// import Car from './components/Car'
import Login from './components/Login'
import Details from './containers/Details'

// Write checkAuth function here
// Check the cookies for a cookie called "loggedIn"
const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
}

// Write ProtectedRoute function here
const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route
        {...rest}
        render={(props) => checkAuth()
            ? <Component {...props} />
            : <Redirect to="/login" />}
        />
    )
}


const Router = () => {
    return (
        <Switch>
            {/* <ProtectedRoute exact path="/" component={Listings} /> */}
            <Route exact path="/" component={Listings} />
            <Route path="/login" component={Login} />
            {/* <Route path="/details" component={Details} /> */}
            <Route exact path="/details/:id" component={Details} />
            {/* <ProtectedRoute path="/about" component={About} /> */}
            {/* <ProtectedRoute path="/car/:id" component={Car} /> */}
        </Switch>
    );
};

export default Router;