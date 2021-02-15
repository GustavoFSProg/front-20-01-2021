import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../services/api'
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
    <>
      <Container>
        <BodyContainer>
          <Header />
          <TextContainer>
            <h2>Perfil: </h2>
            <br />
          </TextContainer>
          <>
            <ul key={lista._id}>
              <ContainerLista>
                <button
                  type="button"
                  style={{
                    background: '#086871',
                    padding: '10px',
                    color: 'yellow',
                    marginBottom: '4px',
                    borderRadius: '7px',
                    border: '1px solid #086871',
                    fontSize: '16px',
                  }}
                  onClick={() => alert('You click me!')}
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
          <ul key={lista._id}>
            <ContainerLista>
              <button
                type="button"
                style={{
                  background: '#086871',
                  padding: '10px',
                  color: 'yellow',
                  marginBottom: '4px',
                  borderRadius: '7px',
                  border: '1px solid #086871',
                  fontSize: '16px',
                }}
                onClick={() => alert('You click me!')}
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
        </BodyContainer>
      </Container>
    </>
  )
}

export default Profile
