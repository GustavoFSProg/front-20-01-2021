import React from 'react'
import { Link } from 'react-router-dom'
import SimpleMenu from '../../components/menu'
import { Container, List } from './style'

function Header() {
  return (
    <Container>
      <SimpleMenu />
    </Container>
  )
}

export default Header
