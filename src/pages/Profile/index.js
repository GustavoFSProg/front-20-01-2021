import React, { useEffect, useState } from 'react'
// import { useHistory } from 'react-router-dom'
import api from '../../services/api'
import Header from '../../components/Header'
import Container from '../../components/Container'
import Card from '../../components/Card'
import HeaderTitle from '../../components/HeaderTitle'

function Profile() {
  const [list, setList] = useState([])
  // const history = useHistory()

  async function getById() {
    const id = localStorage.getItem('ID')
    console.log(`id: ${id}`)
    // const { data } = await api.get(`/`)
    const { data } = await api.get(`/product/${id}`)
    setList(data)
    console.log(data)
    return list
  }

  useEffect(() => {
    getById()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <Header />
      <HeaderTitle>Perfil:</HeaderTitle>

      <Card
        key={list._id}
        id={list._id}
        getById={getById}
        imageSource={list.image}
        title={list.title}
        price={list.price}
      />
    </Container>
  )
}

export default Profile
