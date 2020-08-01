import React, { useContext } from 'react'
import styled from 'styled-components'
import { Title, Wrapper } from './TopBarStyles.js'
import { UserContext } from '../../context/UserContext.js'

const TopBar = () => {

  const { signOut } = useContext(UserContext)
  return (
    <>
      <Title>
        <div style={{
          marginLeft: 5
        }}>
          <Icon name='bars' size="large" style={{ color: '#707070' }}
            onClick={() => { setOpenSideBar(!openSideBar) }} />
            </div>
        amz-club
      </Title>
    </>
  )
}

export default TopBar