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
import './styles.css'

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
        data.append('title', title)
        data.append('price', price)
        data.append('image', image)

        // await api.post('/product/register', data)

        // alert('Cadastro realizado com sucesso!')
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
            <h2>Cadastro de Produtos: </h2>
            <br />
          </TextContainer>
          <ContainerLista>
            <form onSubmit={handleSubmit} className="janela">
              <div className="profile-container">
                <fieldset>
                  <legend>Cadastrar Produto</legend>

                  <div className="input-block">
                    <label htmlFor="name">Titulo</label>
                    <br />
                    <input
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>

                  <div className="input-block">
                    <label htmlFor="name">Preço</label>
                    <br />
                    <input
                      id="price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>

                  <div className="input-block">
                    <input
                      type="file"
                      id="image"
                      className="botao-imagem"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </div>
                  <div className="input-block">
                    <button className="confirm-button" type="submit">
                      Cadastrar
                    </button>
                  </div>
                </fieldset>
              </div>
            </form>

            <ContainerData></ContainerData>
          </ContainerLista>
        </BodyContainer>
      </Container>
    </>
  )
}
