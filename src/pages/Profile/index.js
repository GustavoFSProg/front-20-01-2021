import React, { useEffect, useState } from 'react'
import api from '../../services/api'
import { useHistory } from 'react-router-dom'
import Header from '../Header/index'

import {
  ContainerImg,
  Container,
  ContainerLista,
  Lista,
  BodyContainer,
  ContainerData,
  TextContainer,
} from './style'

function Profile() {
  const [lista, setLista] = useState([])
  const history = useHistory()

  async function getById() {
    const id = localStorage.getItem('ID')

    console.log(`id: ${id}`)

    // const { data } = await api.get(`/`)
    const { data } = await api.get(`/product/${id}`)

    setLista(data)

    console.log(data)

    return lista
  }

  useEffect(() => {
    getById()
  }, [])

  return (
    <Container>
      <BodyContainer>
        <Header />
        <TextContainer>
          <h2 style={{ color: 'purple' }}>Profile: </h2>
          <br />
        </TextContainer>

        <>
          <ul key={lista._id}>
            <ContainerLista>
              <button
                type="button"
                style={{
                  background: '#086871',
                  color: 'yellow',
                  padding: '5px',
                  marginBottom: '4px',
                }}
                onClick={() => history.push('/cart')}
              >
                <strong>Comprar</strong>
              </button>
              <div style={{ paddingTop: '18px' }} />

              <ContainerImg>
                <img
                  style={{ width: '25%' }}
                  src={`https://api-ultima.herokuapp.com/files/${lista.image}`}
                  alt="imagem"
                />

                <ContainerData>
                  <Lista>
                    <strong>Nome: </strong>
                    {lista.title}
                  </Lista>
                  <Lista>
                    <strong>Preço: </strong>
                    {lista.price}
                  </Lista>
                </ContainerData>
              </ContainerImg>
            </ContainerLista>
          </ul>
        </>
      </BodyContainer>
    </Container>
  )
}

export default Profile
