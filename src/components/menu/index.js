import React from 'react'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { useHistory } from 'react-router-dom'
import hamburguer from '../../assets/hambur.png'

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const history = useHistory()

  function handleHome() {
    history.push('/')
  }

  function handleProfile() {
    history.push('/profile')
  }

  function handleUpdate() {
    history.push('/update')
  }

  function handleLogin() {
    history.push('/login')
  }

  function handleRegister() {
    history.push('/register')
  }

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{ color: 'white', fontWeight: 'bold', fontSize: '15px' }}
      >
        <img src={hamburguer} alt="logo" width="18%" />
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleHome}>Home</MenuItem>
        <MenuItem onClick={handleProfile}>Perfil</MenuItem>
        <MenuItem onClick={handleLogin}>Login</MenuItem>
        <MenuItem onClick={handleRegister}>Cadastro</MenuItem>
        <MenuItem onClick={handleUpdate}>Update</MenuItem>
      </Menu>
    </div>
  )
}
