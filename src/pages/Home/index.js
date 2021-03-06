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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Container>
        <BodyContainer>
          {/* <Header /> */}
          <TextContainer>
            <h2>Home</h2>
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
                        border: '1px solid lightgray',
                        font: 'Trebuchet',
                        color: 'darkblue',
                        fontWeight: 'bold',
                        fontSize: '15px',
                        marginBottom: '6px',
                        background: 'lightyellow',
                      }}
                      onClick={() => getById(list._id)}
                    >
                      Detalhes
                    </button>
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
                        src={`http://localhost:3001/files/${list.image}`}
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
                    </ContainerImg>
                  </ContainerLista>
                </ul>
              </>
            )
          })}
        </BodyContainer>
      </Container>
    </>
  )
}

export default Listagem
