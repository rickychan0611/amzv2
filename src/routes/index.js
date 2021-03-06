import React, { useState, useContext } from "react";
import { Route, Switch } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";

import { TopBar, SideNavBar } from "../components";
import { Body, View, TopBarContainer, Content } from "./styles.js";
import { Grid, Dimmer } from "semantic-ui-react";

import Home from "../pages/Home";
import Item from "../pages/Item";
import User from "../pages/User";
import Register from "../pages/Register";
import SignIn from "../pages/SignIn";
import CreatePost from "../admin/CreatePost";
import NewOrders from "../admin/NewOrders";
import UserQuery from "../admin/UserQuery";
import { UserContext } from "../context/UserContext";

export default (props) => {
  const [navDim, setNavDim] = useState(false);
  const { user } = useContext(UserContext);
  return (
    <Body>
      <View>
        <TopBarContainer>
          <TopBar />
        </TopBarContainer>

        <SideNavBar setNavDim={setNavDim} />
        <Dimmer.Dimmable dimmed={navDim} blurring>
          <Dimmer active={navDim} inverted />
          <div
            style={{
              paddingTop: 10,
              postion: "relative",
              height: "100%",
              // backgroundColor: 'yellow'
            }}
          >
            <Content>
              <ScrollToTop />
              {user == "not signed in" ? (
                <>
                  <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/*" component={SignIn} />
                  </Switch>
                </>
              ) : (
                // if user signed in but not registered.
                <>
                  {user && user.registered == false ? (
                    <>
                      <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/*" component={Register} />
                      </Switch>
                    </>
                  ) : (
                    // if user registered
                    <>
                      <Switch>
                        <Route path="/" exact component={Home} />
                        <Route
                          path="/myadmin/create-post"
                          exact
                          component={CreatePost}
                        />
                        <Route
                          path="/myadmin/new-orders"
                          exact
                          component={NewOrders}
                        />
                        <Route
                          path="/myadmin/user-query"
                          exact
                          component={UserQuery}
                        />
                        <Route path="/item/:id/:keywords" component={Item} />
                        <Route
                          path="/:state/user/:facebookName/:id"
                          component={User}
                        />
                        <Route path="/profile" component={User} />
                        <Route path="/register" component={Register} />
                        <Route path="/sign-in" exact component={SignIn} />
                      </Switch>
                    </>
                  )}
                </>
              )}
            </Content>
          </div>
        </Dimmer.Dimmable>
      </View>
    </Body>
  );
};
