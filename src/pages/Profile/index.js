import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../services'
import {
  ContainerImg,
  Container,
  ContainerLista,
  Lista,
  BodyContainer,
  ContainerData,
  TextContainer,
} from './style'
// import Header from '../Header'

export default function Profile() {
  const [lista, setLista] = useState([])
  const history = useHistory()

  async function getById() {
    const code = localStorage.getItem('ID')

    console.log(code)

    const { data } = await api.get(`/product/${code}`)

    setLista(data)

    return lista
  }

  useEffect(() => {
    getById()
  }, [])
  return (
    <Container>
      <BodyContainer>
        {/* <Header /> */}
        <TextContainer>
          <h2>Profile</h2>
          <br />
        </TextContainer>
        <>
          {/* {lista.map((list) => { */}
          {/* return ( */}
          <ul key={lista._id}>
            <ContainerLista>
              <button
                style={{
                  border: '1px solid lightgray',
                  font: 'Trebuchet',
                  color: 'darkblue',
                  fontWeight: 'bold',
                  fontSize: '15px',
                  background: 'lightyellow',
                }}
                type="button"
                onClick={() => history.push('/cart')}
              >
                Comprar
              </button>
              <div style={{ paddingTop: '18px' }} />

              <ContainerImg>
                <img
                  style={{ width: '25%' }}
                  src={`http://localhost:3001/files/${lista.image}`}
                  alt="imagem"
                />

                <ContainerData>
                  <Lista>
                    <strong>Produto: </strong>
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
          {/* ) */}
          {/* })} */}
        </>
      </BodyContainer>
    </Container>
  )
}
