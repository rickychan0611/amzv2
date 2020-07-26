import React, { useState } from 'react'
import { Icon } from "semantic-ui-react";
import { LoaderContainer } from './Styles.js'

const TopBar = () => {
  return (
    <>
      <LoaderContainer>
          <Icon loading name="star outline" size="large" color="orange"/>
          loading...
        </LoaderContainer>
    </>
  )
}

export default TopBar