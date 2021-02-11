import React from 'react'
import { Link } from 'react-router-dom'
import { Container, List } from './style'

function Header() {
  return (
    <Container>
      <ul>
        <List>
          <Link
            to="/"
            style={{
              display: 'flex',
              listStyle: 'none',
              fontFamily: 'Arial',
              fontSize: '17px',
              color: 'white',
              textDecoration: 'none',
              paddingRight: '13px',
            }}
          >
            Home
          </Link>

          <Link
            to="/profile"
            style={{
              display: 'flex',
              listStyle: 'none',
              fontFamily: 'Arial',
              fontSize: '17px',
              color: 'white',
              textDecoration: 'none',
              paddingRight: '13px',
            }}
          >
            Profile
          </Link>

          <Link
            to="/register"
            style={{
              display: 'flex',
              listStyle: 'none',
              fontFamily: 'Arial',
              fontSize: '17px',
              color: 'white',
              textDecoration: 'none',
              paddingRight: '13px',
            }}
          >
            Register
          </Link>
        </List>
      </ul>
    </Container>
  )
}

export default Header
