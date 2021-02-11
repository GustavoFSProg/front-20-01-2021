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
              fontWeight: 'bold',
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
              fontWeight: 'bold',
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
              fontWeight: 'bold',
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
