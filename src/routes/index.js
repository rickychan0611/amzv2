import React, { useState, useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import ScrollToTop from "./ScrollToTop"

import { TopBar } from "../components"
import { Body, View, TopBarContainer, Content } from './styles.js'

import Home from "../pages/Home"
import Item from "../pages/Item"
import CreatePost from '../admin/CreatePost';
import NewOrders from '../admin/NewOrders';

export default (props) => {
  return (
    <Body>
      <View>

        <TopBarContainer>
          <TopBar />
        </TopBarContainer>

        <Content>
        <ScrollToTop />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/myadmin/create-post" exact component={CreatePost} />
            <Route path="/myadmin/new-orders" exact component={NewOrders} />
            <Route path="/item/:id/:keywords" component={Item} />
          </Switch>
          
        </Content>
      </View>
    </Body>
  )
}