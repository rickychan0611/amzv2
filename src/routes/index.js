import React, { useState, useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import ScrollToTop from "./ScrollToTop"

import { TopBar, SideNavBar } from "../components"
import { Body, View, TopBarContainer, Content } from './styles.js'
import { Grid, Dimmer } from 'semantic-ui-react';

import Home from "../pages/Home"
import Item from "../pages/Item"
import User from "../pages/User"
import SignIn from "../pages/SignIn"
import CreatePost from '../admin/CreatePost';
import NewOrders from '../admin/NewOrders';
import UserQuery from '../admin/UserQuery';

export default (props) => {
  const [navDim, setNavDim] = useState(false)

  return (
    <Body>
      <View>

        <TopBarContainer>
          <TopBar />
        </TopBarContainer>

        <SideNavBar setNavDim={setNavDim} />
        <Dimmer.Dimmable dimmed={navDim} blurring>
          <Dimmer active={navDim} inverted />
          <div style={{
            paddingTop: 10,
            postion: "relative",
            height: '100%',
            // backgroundColor: 'yellow'
          }}>

            <Content>
              <ScrollToTop />
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/myadmin/create-post" exact component={CreatePost} />
                <Route path="/myadmin/new-orders" exact component={NewOrders} />
                <Route path="/myadmin/user-query" exact component={UserQuery} />
                <Route path="/item/:id/:keywords" component={Item} />
                <Route path="/:state/user/:facebookName/:id" component={User} />
                <Route path="/signin" exact component={SignIn} />
              </Switch>

            </Content>

            </div>
        </Dimmer.Dimmable>

      </View>
    </Body>
      )
}