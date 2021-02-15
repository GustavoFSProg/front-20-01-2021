import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../services/api'
import Container from '../../components/Container'
import Header from '../../components/Header'
import Card from '../../components/Card'
import HeaderTitle from '../../components/HeaderTitle'

function Listagem() {
  const [lista, setLista] = useState([])
  const history = useHistory()

  async function getAll() {
    const { data } = await api.get('/product')
    setLista(data)
    console.log('Entrou!')
    console.log(`Lista: ${lista}`)
    return lista
  }

  function getById(id) {
    localStorage.setItem('ID', id)
    history.push('/profile')
  }

  useEffect(() => {
    getAll()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Container>
      <Header />
      <HeaderTitle>Produtos:</HeaderTitle>

      {lista.map((list) => (
        <Card
          key={list._id}
          id={list._id}
          getById={getById}
          imageSource={list.image}
          title={list.title}
          price={list.price}
        />
      ))}
    </Container>
  )
}

export default Listagem
