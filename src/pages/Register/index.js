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
  Form,
  Legend,
  ProfileContainer,
  InputBlock,
} from './style'

export default function Register() {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState([])

  const history = useHistory()

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const data = new FormData()

      if (!typeof price === Number) {
        return alert('O preço deve ser um numero!!')
      } else {
        const token = localStorage.getItem('Token')

        data.append('title', title)
        data.append('price', price)
        data.append('image', image)
        data.append('token', token)

        console.log(token)

        await api.post('/product/register', data)

        alert('Cadastro realizado com sucesso!')
        return history.push('/')
      }
    } catch (error) {
      console.log(error)
      return alert(`Deu erro no front ${error}`)
    }
  }

  return (
    <>
      <Container>
        <BodyContainer>
          <Header />
          <TextContainer>
            <h3>Cadastro de Produtos: </h3>
            <br />
          </TextContainer>
          <ContainerLista>
            <Form
              onSubmit={handleSubmit}
              // style={{
              //   // background: '#f2f2f2',
              //   display: 'flex',
              //   alignItems: 'center',
              //   flexDirection: 'column',
              //   width: '65%',
              // }}
            >
              <ProfileContainer>
                <fieldset>
                  <Legend>Cadastrar Produto</Legend>

                  <div
                    style={{
                      width: '110%',
                      paddingLeft: '20px',
                      paddingBottom: '17px',
                    }}
                  >
                    <label htmlFor="name">Titulo</label>
                    <br />
                    <input
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>

                  <InputBlock className="input-block">
                    <label htmlFor="name">Preço</label>
                    <br />
                    <input
                      style={{
                        width: '110%',
                        paddingLeft: '20px',
                        paddingBottom: '17px',
                      }}
                      id="price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </InputBlock>

                  <InputBlock className="input-block">
                    <input
                      style={{
                        width: '110%',
                        paddingLeft: '20px',
                        paddingBottom: '17px',
                      }}
                      type="file"
                      id="image"
                      className="botao-imagem"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </InputBlock>
                  <div
                    style={{
                      width: '110%',
                      paddingLeft: '20px',
                      paddingBottom: '17px',
                    }}
                  >
                    <button
                      style={{
                        color: 'darkgreen',
                        paddingRight: '20px',
                        paddingLeft: '20px',
                        background: '#e6fff2',
                        fontSize: '15px',
                      }}
                      className="confirm-button"
                      type="submit"
                    >
                      <strong>Cadastrar</strong>
                    </button>
                  </div>
                </fieldset>
              </ProfileContainer>
            </Form>

            <ContainerData></ContainerData>
          </ContainerLista>
        </BodyContainer>
      </Container>
    </>
  )
}
