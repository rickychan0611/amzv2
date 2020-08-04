import React, { useContext, useState } from 'react'
import { UserContext } from '../../context/UserContext'
import { useHistory } from "react-router-dom"
import { SignInModal } from '../../components'

import {
  Menu,
  Sidebar,
  Icon,
  Confirm,
  Divider
} from 'semantic-ui-react'
import styles from './styles'

const SideNavBar = ({ setNavDim }) => {
  const { user, loading, openSideBar, setOpenSideBar, signOut } = useContext(UserContext)
  const history = useHistory()
  const [openSignInModal, setOpenSignInModal] = useState(false)

  const handleClick = (e, { name }) => {
    if (
      name === "/create-post" ||
      name === "/messages" ||
      name === "/notifications" ||
      name === "/messages" ||
      name === "/my-orders" ||
      name === "/profile" ||
      name === "/my-posts" ||
      name === "/my-sales"
    ) {
      if (user === "not signed in") {
        // alert("please sign in")
        setOpenSignInModal(true)
      }
      else { 
        history.push(name) 
      }
    }
    else {
      history.push(name)
    }
    setOpenSideBar(false)
  }

  const [confirm, setConfirm] = useState()
  const handleConfirm = () => {
    signOut()
    history.push('/')
    setConfirm(false)
  }

  return (
    <div>
      <SignInModal openSignInModal={openSignInModal} setOpenSignInModal={setOpenSignInModal} />

      <Sidebar
        animation='overlay'
        icon='labeled'
        // inverted
        vertical="true"
        visible={openSideBar}
        onVisible={() => setNavDim(true)}
        onHide={() => {
          setOpenSideBar(false)
          setNavDim(false)
        }}
        style={{ zIndex: 2000, backgroundColor: "#f0f5ff", paddingLeft: 15 }}
      >
        <Menu size='large' vertical secondary
          style={{
            paddingTop: 90, height: "100%", width: '99%'
          }}>
          <Menu.Menu position="right">
            <Menu.Item onClick={() => { setOpenSideBar(false) }}>
              &nbsp;
              <Icon name="arrow circle left" size="large" color="grey" />
            </Menu.Item>
          </Menu.Menu>
          <Menu.Item name="/" onClick={handleClick}>Home</Menu.Item>
          <Menu.Item name="/my-orders" onClick={handleClick}>My Orders</Menu.Item>
          <Menu.Item name="/profile" onClick={handleClick}>My Profile</Menu.Item>
          <Divider />

          {user === 'not signed in' ?
            <>
              <Menu.Item name="/sign-in" onClick={handleClick}>Sign In</Menu.Item>
              <Menu.Item name="/register" onClick={handleClick}>Register</Menu.Item>
            </> :
            <>
              <Menu.Item name="/log-out" onClick={() => {
                setOpenSideBar(false)
                setConfirm(true)
              }}>
                Log Out
          </Menu.Item>
            </>
          }
        </Menu>

      </Sidebar>
      <Confirm
        open={confirm}
        content='Are you sure to logout?'
        onCancel={() => setConfirm(false)}
        onConfirm={handleConfirm}
      />
    </div>
  )
}

export default SideNavBar