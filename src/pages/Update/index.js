import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import api from '../../services/api'
import Header from '../../components/Header'
import {
  ContainerImg,
  Container,
  ContainerLista,
  Lista,
  BodyContainer,
  ContainerData,
  TextContainer,
} from './style'

function Update() {
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState([])

  const [lista, setLista] = useState([])
  const history = useHistory()

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const id = localStorage.getItem('ID')
      const token = localStorage.getItem('Token')
      // const data = new FormData()

      console.log(token)

      const data = {
        title,
        price,
        token,
      }

      if (!typeof price === Number) {
        return alert('O preço deve ser um numero!!')
      } else {
        // data.append('title', title)
        // data.append('price', price)
        // data.append('image', image)

        await api.put(`/product/update/${id}`, data)

        alert('Prtoduto editado com sucesso!')
        return history.push('/')
      }
    } catch (error) {
      console.log(error)
      return alert(`Deu erro no front ${error}`)
    }
  }

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
            <h3>Editar Produto </h3>
            <br />
          </TextContainer>
          <ContainerLista>
            <form onSubmit={handleSubmit} className="janela">
              <div className="profile-container">
                <fieldset>
                  <legend>Editar Produto</legend>

                  <div className="input-block">
                    <label htmlFor="name">Titulo</label>
                    <br />
                    <input
                      id="title"
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder={lista.title}
                      value={title}
                    />
                  </div>

                  <div className="input-block">
                    <label htmlFor="name">Preço</label>
                    <br />
                    <input
                      id="price"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                      placeholder={lista.price}
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
                      <strong>Editar</strong>
                    </button>
                  </div>
                </fieldset>
              </div>
            </form>
          </ContainerLista>
        </BodyContainer>
      </Container>
    </>
  )
}

export default Update
