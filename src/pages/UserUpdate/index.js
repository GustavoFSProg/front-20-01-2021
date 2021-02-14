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
function Update() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState([])

  const [lista, setLista] = useState([])
  const history = useHistory()

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const id = localStorage.getItem('UserID')
      const token = localStorage.getItem('Token')
      // const data = new FormData()

      console.log(token)

      const data = {
        name,
        email,
        password,
        token,
      }

      if (!typeof price === Number) {
        return alert('O preço deve ser um numero!!')
      } else {
        // data.append('title', title)
        // data.append('price', price)
        // data.append('image', image)

        await api.put(`/update/${id}`, data)

        alert('Usuario editado com sucesso!')
        return history.push('/')
      }
    } catch (error) {
      console.log(error)
      return alert(`Deu erro no front ${error}`)
    }
  }

  async function getById() {
    const id = localStorage.getItem('UserID')

    console.log(`id: ${id}`)

    // const { data } = await api.get(`/`)
    const { data } = await api.get(`/userOne/${id}`)

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
                    <label htmlFor="name">Nome</label>
                    <br />
                    <input
                      id="name"
                      onChange={(e) => setName(e.target.value)}
                      placeholder={lista.name}
                      value={name}
                    />
                  </div>

                  <div className="input-block">
                    <label htmlFor="name">Email</label>
                    <br />
                    <input
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={lista.email}
                      type="email"
                    />
                  </div>

                  <div className="input-block">
                    <label htmlFor="name">Senha</label>
                    <br />
                    <input
                      type="password"
                      id="password"
                      className="botao-imagem"
                      onChange={(e) => setPassword(e.target.value)}
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
