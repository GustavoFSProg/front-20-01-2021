import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Register from './pages/Register'
import Update from './pages/Update'
import Login from './pages/Login'
import Logout from './pages/Logout'
import User from './pages/UserRegister'
import UserUpdate from './pages/UserUpdate'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/register" component={Register} />
        <Route path="/update" component={Update} />
        <Route path="/login" component={Login} />
        <Route path="/user" component={User} />
        <Route path="/userUpate" component={UserUpdate} />
        <Route path="/logout" component={Logout} />
      </Switch>
    </BrowserRouter>
  )
}
