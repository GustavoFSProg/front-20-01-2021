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

  async function getAll() {
    const { data } = await api.get('/product')

    setLista(data)

    console.log('Entrou!')

    console.log(`Lista: ${lista}`)

    return lista
  }

  useEffect(() => {
    getAll()
  }, [])

  return (
    <Container>
      <BodyContainer>
        <Header />
        <TextContainer>
          <h2 style={{ color: 'purple' }}>Profile: </h2>
          <br />
        </TextContainer>
        {lista.map((list) => {
          return (
            <>
              <ul key={list._id}>
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
                      src={`https://api-ultima.herokuapp.com/files/${list.image}`}
                      alt="imagem"
                    />

                    <ContainerData>
                      <Lista>
                        <strong>Nome: </strong>
                        {list.title}
                      </Lista>
                      <Lista>
                        <strong>Preço: </strong>
                        {list.price}
                      </Lista>
                    </ContainerData>
                  </ContainerImg>
                </ContainerLista>
              </ul>
            </>
          )
        })}
      </BodyContainer>
    </Container>
  )
}

export default Profile
