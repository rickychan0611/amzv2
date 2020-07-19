import React, { useState, useContext } from 'react';
import { Route, Switch, useLocation, useParams, Redirect } from 'react-router-dom';
import {  TopBar  } from "../components"

import Home from "../pages/Home"

export default (props) => {
  return (
    <>
      <div>
        <TopBar />
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </>
  )
}