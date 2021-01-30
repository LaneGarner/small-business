import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import Listings from './containers/Listings'
import Login from './containers/Login'
import Details from './containers/Details'
import Add from './containers/Add'
import cookie from 'cookie'



const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
}

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
            <ProtectedRoute path="/add" component={Add} />
            <Route exact path="/details/:id" component={Details} />
            {/* <ProtectedRoute path="/about" component={About} /> */}
            {/* <ProtectedRoute path="/car/:id" component={Car} /> */}
        </Switch>
    );
};

export default Router;