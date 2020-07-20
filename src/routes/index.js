import React, { useState, useContext } from 'react';
import { Route, Switch, useLocation, useParams, Redirect } from 'react-router-dom';
import { TopBar } from "../components"
import { Body, View, TopBarContainer, Content } from './styles.js'

import Home from "../pages/Home"
import CreatePost from '../admin/CreatePost';

export default (props) => {
  return (
    <Body>
      <View>

        <TopBarContainer>
          <TopBar />
        </TopBarContainer>

        <Content>

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/myadmin/create-post" exact component={CreatePost} />
          </Switch>
          
        </Content>
      </View>
    </Body>
  )
}