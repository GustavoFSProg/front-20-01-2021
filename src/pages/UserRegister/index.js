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
// import './styles.css'

export default function UserRegister() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState([])

  const history = useHistory()

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const token = localStorage.getItem('Token')

      const data = {
        name,
        email,
        password,
        token,
      }

      console.log(token)

      await api.post('/user', data)

      alert('User cadastrado com uscesso')
      return history.push('/')
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
            <h3>Cadastro de Usuários: </h3>
            <br />
          </TextContainer>
          <ContainerLista>
            <form onSubmit={handleSubmit} className="janela">
              <div className="profile-container">
                <fieldset>
                  <legend>Cadastrar Usuário</legend>

                  <div className="input-block">
                    <label htmlFor="name">Nome</label>
                    <br />
                    <input
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="input-block">
                    <label htmlFor="name">Email</label>
                    <br />
                    <input
                      id="email"
                      value={email}
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="input-block">
                    <label htmlFor="name">Senha</label>

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
                      <strong>Cadastrar</strong>
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
