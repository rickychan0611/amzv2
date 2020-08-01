import React, { useContext } from 'react'
import styled from 'styled-components'
import { Title, Wrapper } from './TopBarStyles.js'
import { UserContext } from '../../context/UserContext.js'

const TopBar = () => {

  const { signOut } = useContext(UserContext)
  return (
    <>
      <Title>
        amz-club
      </Title>
    </>
  )
}

export default TopBar