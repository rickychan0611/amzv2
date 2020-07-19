import React, { useState, useContext } from 'react';
import { Route, Switch, useLocation, useParams, Redirect } from 'react-router-dom';
import { TopBar } from "../components"
import { Body, View } from './styles.js'

import Home from "../pages/Home"

export default (props) => {
  return (
    <Body>
      <View>
        <TopBar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </View>
    </Body>
  )
}