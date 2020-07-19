import React, { useState } from 'react'
import styled from 'styled-components'
// import { Button, Dropdown, Menu } from 'semantic-ui-react'
import {Title, Wrapper} from './styles.js'


const TopBar = () => {
  return (
    <div>
      <Wrapper>
        <Title>
          amz-club.com
        </Title>
      </Wrapper>
    </div>
  )
}

export default TopBar