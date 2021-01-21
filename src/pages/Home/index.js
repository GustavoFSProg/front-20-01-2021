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

function Listagem() {
  const [lista, setLista] = useState([])
  const history = useHistory()

  async function getAll() {
    const { data } = await api.get('/')

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
  })

  return (
    <>
      <Container>
        <BodyContainer>
          {/* <Header /> */}
          <TextContainer>
            <h2>Loja Virtual</h2>
            <br />
          </TextContainer>
          {/* {lista.map((list) => { */}
          {/* return ( */}
          <>
            <ul>
              <ContainerLista>
                {/* <button type="button" onClick={() => getById(list._id)}>
                      Detalhes
                    </button> */}
                <button type="button">Detalhes</button>
                {/* <button type="button" onClick={() => getById(list._id)}> */}
                {/* Comprar
                </button> */}
                <p>Entrando</p>
                <div style={{ paddingTop: '18px' }} />

                {/* <ContainerImg>
                  <img
                    style={{ width: '25%' }}
                    src={`https://loja-sistem.herokuapp.com/files/${list.image}`}
                    alt="imagem"
                  />

                  <ContainerData>
                    <Lista>
                      <strong>Produto: </strong>
                      {list.title}
                    </Lista>
                    <Lista>
                      <strong>Preço: </strong>
                      {list.price}
                    </Lista>
                  </ContainerData>
                </ContainerImg> */}
              </ContainerLista>
            </ul>
          </>
          {/* )})} */}
        </BodyContainer>
      </Container>
    </>
  )
}

export default Listagem
