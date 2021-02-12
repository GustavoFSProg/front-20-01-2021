import React from 'react'
import { useHistory } from 'react-router-dom'
import Header from '../Header/index'

import './styles.css'

export default function Logout() {
  const history = useHistory()
  localStorage.clear()

  // alert('Logout efetuado com sucesso!')

  history.push('/')

  return (
    <>
      <Header />
    </>
  )
}
